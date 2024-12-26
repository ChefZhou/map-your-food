import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapClickHandler from "./MapClickHandler";
import MarkerList from "./MarkerList";

/**
 * MapContainerWrapper 組件
 * @description 地圖容器的主要包裝組件，整合所有地圖相關功能
 * @param {Array} mainPosition - 主要位置座標
 * @param {Object} currentPosition - 當前位置物件
 * @param {Array} markers - 標記點陣列
 * @param {Function} handleNewMarker - 處理新增標記的函數
 * @param {Object} markerCount - 標記計數器
 * @param {Array} distances - 距離陣列
 */
const MapContainerWrapper = ({
  mainPosition,
  currentPosition,
  markers,
  handleNewMarker,
  markerCount,
  distances,
}) => {
  return (
    <div className="w-full h-full">
      <MapContainer center={mainPosition} zoom={13} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mainPosition}>
          <Popup>{currentPosition ? `你的位置` : "預設位置"}</Popup>
        </Marker>
        <MarkerList markers={markers} distances={distances} />
        <MapClickHandler
          setMarkers={handleNewMarker}
          markerCount={markerCount}
        />
      </MapContainer>
    </div>
  );
};

export default MapContainerWrapper;
