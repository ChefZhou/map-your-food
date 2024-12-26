import { Marker, Popup } from "react-leaflet";

/**
 * MarkerList 組件
 * @description 顯示所有標記點及其相關資訊
 * @param {Array} markers - 標記點陣列
 * @param {Array} distances - 與當前位置的距離陣列
 * @returns {JSX.Element[]} 回傳標記點元素陣列
 */
const MarkerList = ({ markers, distances }) => {
  return markers.map((marker, index) => (
    <Marker key={marker.id} position={marker.position}>
      <Popup>
        {marker.description || "新標記"}
        <br />
        距離: {distances[index]?.toFixed(2)} 公里
      </Popup>
    </Marker>
  ));
};

export default MarkerList;
