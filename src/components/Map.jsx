import { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MapSideBar from "./MapSideBar";
import useLocation from "../hooks/useLocation";
import useLocationTrack from "../hooks/useLocationTrack.jsx";

const targetLatitude = 25.033964;
const targetLongitude = 121.564468;

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

const MapClickHandler = ({ setMarkers, markerCount }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkers({
        id: Date.now(),
        position: [lat, lng],
        description: `自訂座標${markerCount.current}`,
      });
      markerCount.current += 1;
    },
  });
  return null;
};

const Map = () => {
  const { currentPosition, error } = useLocationTrack();
  const defaultPosition = [25.033964, 121.564468]; // 預設位置 (台北)
  const currentPositionArray = currentPosition
    ? [currentPosition.latitude, currentPosition.longitude]
    : defaultPosition;

  const [markers, setMarkers] = useState([]);
  const [newMarker, setNewMarker] = useState(null);
  const markerCount = useRef(1);

  const updateMarker = (id, description) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id ? { ...marker, description } : marker
      )
    );
  };

  const handleNewMarker = (marker) => {
    setMarkers((prevMarkers) => [...prevMarkers, marker]);
    setNewMarker(marker);
  };

  const deleteMarker = (id) => {
    setMarkers((prevMarkers) =>
      prevMarkers.filter((marker) => marker.id !== id)
    );
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  const mainPosition = currentPositionArray;

  return (
    <div>
      <MapSideBar
        markers={markers}
        updateMarker={updateMarker}
        newMarker={newMarker}
        deleteMarker={deleteMarker}
        distanceCalculator={(lat, lng) =>
          calculateDistance(mainPosition[0], mainPosition[1], lat, lng)
        }
      />
      <div>
        <div>
          <MapContainer
            center={mainPosition}
            zoom={13}
            className="rounded-3xl h-[750px] w-[70%] fixed top-[95px] right-5"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={mainPosition}>
              <Popup>{currentPosition ? `你的位置` : "預設位置"}</Popup>
            </Marker>
            {markers.map((marker) => (
              <Marker key={marker.id} position={marker.position}>
                <Popup>{marker.description || "新標記"}</Popup>
              </Marker>
            ))}
            <MapClickHandler
              setMarkers={handleNewMarker}
              markerCount={markerCount}
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
