// 引入必要的 React Hooks 和 react-leaflet 組件
import { useState, useEffect } from "react";
import { useMapEvents } from "react-leaflet";

// 預設的台北市座標
const defaultPosition = { latitude: 25.033964, longitude: 121.564468 };

/**
 * 自定義 Hook 用於處理地圖位置相關功能
 * @param {Function} setMarkers - 設置標記點的函數
 * @returns {Object} 包含位置信息和錯誤狀態的對象
 */
const useLocation = (setMarkers) => {
  // 儲存當前位置信息
  const [location, setLocation] = useState(defaultPosition);
  // 儲存錯誤信息
  const [error, setError] = useState(null);
  // 儲存地圖上的位置點
  const [position, setPosition] = useState(null);
  // 追踪標記點計數
  const [markerCount, setMarkerCount] = useState(1);

  // 初始化時獲取用戶地理位置
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err);
        }
      );
    } else {
      setError(new Error("Geolocation is not supported by this browser."));
    }
  }, []);

  // 註冊地圖事件處理
  useMapEvents({
    // 處理地圖點擊事件，添加新的標記點
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkers((prevMarkers) => [
        ...prevMarkers,
        { lat, lng, id: Date.now(), description: `自訂座標點${markerCount}` },
      ]);
      setMarkerCount(markerCount + 1);
    },
    // 處理位置找到事件
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return { location, error, position };
};

export default useLocation;
