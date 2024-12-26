import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

/**
 * 目的地地圖組件
 * 顯示起點、終點和路線
 */
const DestinationMap = ({ currentPosition, destination }) => {
  return (
    <MapContainer
      center={currentPosition.position}
      zoom={13}
      className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-lg mb-4"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={currentPosition.position}>
        <Popup>{currentPosition.description || "起點"}</Popup>
      </Marker>
      <Marker position={destination.position}>
        <Popup>{destination.description}</Popup>
      </Marker>
      <Polyline
        positions={[currentPosition.position, destination.position]}
        color="red"
      />
    </MapContainer>
  );
};

export default DestinationMap;
