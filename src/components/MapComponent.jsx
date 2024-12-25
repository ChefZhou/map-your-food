import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import useLocationTrack from "../hooks/useLocationTrack";
import MarkerItem from "./MarkerItem";
import MapSideBar from "../features/map/MapSideBar";

const MapComponent = () => {
  const { currentPosition, error } = useLocationTrack();
  const [markers, setMarkers] = useState([]);
  const [distances, setDistances] = useState([]);

  useEffect(() => {
    if (currentPosition) {
      const newDistances = markers.map((marker) =>
        calculateDistance(
          currentPosition.latitude,
          currentPosition.longitude,
          marker.lat,
          marker.lng
        )
      );
      setDistances(newDistances);
    }
  }, [currentPosition, markers]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lat2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  const addMarker = (e) => {
    const { lat, lng } = e.latlng;
    setMarkers([...markers, { lat, lng }]);
  };

  const currentPositionArray = currentPosition
    ? [currentPosition.latitude, currentPosition.longitude]
    : [25.033964, 121.564468]; // 預設位置

  return (
    <div className="flex">
      <MapContainer
        center={currentPositionArray}
        zoom={13}
        className="w-3/4 h-screen"
        onClick={addMarker}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={currentPositionArray}>
          <Popup>{currentPosition ? `你的位置` : "預設位置"}</Popup>
        </Marker>
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>{`新標記位置，距離你的位置約 ${
              distances[index] ? distances[index].toFixed(2) : "未知"
            } 公里`}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <aside className="w-1/4 p-4 bg-white shadow-lg">
        <h2 className="text-lg font-bold mb-4">標記列表</h2>
        {markers.map((marker, index) => (
          <MarkerItem
            key={index}
            marker={marker}
            distanceCalculator={(lat, lng) =>
              calculateDistance(
                currentPositionArray[0],
                currentPositionArray[1],
                lat,
                lng
              )
            }
            handleSelectMarker={() => {}}
          />
        ))}
      </aside>
    </div>
  );
};

export default MapComponent;
