import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import useLocation from "../hooks/useLocation";

function Map() {
  const { location, error } = useLocation();
  const defaultLocation = [25.033, 121.5654];
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current && location.latitude && location.longitude) {
      const userLocation = [location.latitude, location.longitude];

      mapRef.current.flyTo(userLocation, 13, {
        animate: true,
        duration: 2,
      });
    } else if (error) {
      mapRef.current.flyTo(defaultLocation, 13, {
        animate: true,
        duration: 2,
      });
    }
  }, [location, error]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl h-3/4">
        <MapContainer
          center={defaultLocation}
          zoom={13}
          style={{
            position: "fixed",
            top: "10%",
            left: "35%",
            height: "80vh",
            width: "90vw",
            margin: "0",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={
              location.latitude && location.longitude
                ? [location.latitude, location.longitude]
                : defaultLocation
            }
          >
            <Popup>
              {error ? "這是預設位置 (台北101)。" : "這是您的位置。"}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
