import { useState, useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MapSideBar from "../features/map/MapSideBar";
import useLocationTrack from "../features/map/useLocationTrack";
import { calculateDistance } from "../utils/utils";
import MapContainerWrapper from "../features/map/MapContainer";

// 初始化 Leaflet 地圖標記圖示設定
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/**
 * Map 主要組件
 * @description 整合所有地圖相關功能的主要組件
 * 功能包括：
 * 1. 位置追蹤與更新
 * 2. 標記點管理（新增、刪除、更新）
 * 3. 距離計算
 * 4. 介面整合
 */
const Map = () => {
  // === 位置相關狀態 ===
  const { currentPosition, error } = useLocationTrack();
  const defaultPosition = [25.033964, 121.564468];
  const currentPositionArray = currentPosition
    ? [currentPosition.latitude, currentPosition.longitude]
    : defaultPosition;

  // === 標記相關狀態 ===
  const [markers, setMarkers] = useState([]); // 所有標記
  const [newMarker, setNewMarker] = useState(null); // 最新添加的標記
  const markerCount = useRef(1); // 標記計數器
  const [distances, setDistances] = useState([]); // 距離追蹤

  // === 距離計算效果 ===
  useEffect(() => {
    if (currentPosition) {
      const newDistances = markers.map((marker) =>
        calculateDistance(
          currentPositionArray[0],
          currentPositionArray[1],
          marker.position[0],
          marker.position[1]
        )
      );
      setDistances(newDistances);
    }
  }, [currentPosition, markers]);

  // === 標記管理函數 ===
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

  const mainPosition = currentPositionArray;

  return (
    <div className="fixed inset-0 pt-[60px] pb-[40px] overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full bg-gray-50 overflow-hidden">
        {/* 左側邊欄 */}
        <div className="w-full md:w-1/3 lg:w-1/4 md:pr-4 overflow-y-auto">
          <MapSideBar
            className="w-full h-auto md:min-h-full"
            markers={markers}
            updateMarker={updateMarker}
            newMarker={newMarker}
            deleteMarker={deleteMarker}
            distanceCalculator={(lat, lng) =>
              calculateDistance(mainPosition[0], mainPosition[1], lat, lng)
            }
            distances={distances}
            currentPosition={mainPosition}
          />
        </div>

        {/* 右側地圖 */}
        <div className="w-full md:w-2/3 lg:w-3/4 h-full overflow-hidden">
          <div className="w-full h-full rounded-lg shadow-lg">
            <MapContainerWrapper
              mainPosition={mainPosition}
              currentPosition={currentPosition}
              markers={markers}
              handleNewMarker={handleNewMarker}
              markerCount={markerCount}
              distances={distances}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
