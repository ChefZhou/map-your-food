import { Marker, Popup } from "react-leaflet";
import useLocation from "../../hooks/useLocation";

/**
 * LocationMarker 組件
 * @description 處理使用者位置標記的顯示
 * @param {Function} setMarkers - 用於更新標記的函數
 * @returns {JSX.Element} 回傳位置標記元素
 */
const LocationMarker = ({ setMarkers }) => {
  // 使用自定義 Hook 獲取位置信息
  const { location, error } = useLocation(setMarkers);
  // 台北市預設座標
  const defaultPosition = [25.033964, 121.564468];

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

export default LocationMarker;
