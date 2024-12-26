import { useMapEvents } from "react-leaflet";

/**
 * MapClickHandler 組件
 * @description 處理地圖點擊事件，創建新的標記點
 * @param {Function} setMarkers - 新增標記的函數
 * @param {Object} markerCount - 追蹤標記數量的 ref 物件
 */
const MapClickHandler = ({ setMarkers, markerCount }) => {
  // 註冊地圖點擊事件
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      // 創建新標記
      setMarkers({
        id: Date.now(), // 使用時間戳作為唯一識別碼
        position: [lat, lng],
        description: `自訂座標${markerCount.current}`,
      });
      // 增加標記計數
      markerCount.current += 1;
    },
  });
  return null;
};

export default MapClickHandler;
