import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MapSideBar from "./MapSideBar";
import useLocation from "../hooks/useLocation";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LocationMarker = ({ setMarkers }) => {
  const { location, error, position } = useLocation(setMarkers);
  const defaultPosition = [25.033964, 121.564468];

  if (error) {
    console.error(error);
    return (
      <Marker position={defaultPosition}>
        <Popup>預設位置</Popup>
      </Marker>
    );
  }

  return (
    <Marker
      position={
        location.latitude && location.longitude
          ? [location.latitude, location.longitude]
          : defaultPosition
      }
    >
      <Popup>
        {location.latitude && location.longitude ? "你的位置" : "預設位置"}
      </Popup>
    </Marker>
  );
};

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const updateMarker = (id, description) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id ? { ...marker, description } : marker
      )
    );
  };

  return (
    <div>
      <MapSideBar markers={markers} updateMarker={updateMarker} />
      <div>
        <div>
          <MapContainer
            center={[25.033964, 121.564468]} // 初始中心點為台北101
            zoom={13}
            className=" rounded-3xl h-[750px] w-[70%]   fixed top-[95px] right-5  "
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker setMarkers={setMarkers} />
            {markers.map((marker) => (
              <Marker key={marker.id} position={[marker.lat, marker.lng]}>
                <Popup>{marker.description}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
