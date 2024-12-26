/**
 * 隨機目的地選擇器
 * @param {Array} markers - 所有可用的標記點
 * @param {Object} currentMarker - 當前位置標記
 * @returns {Object|null} - 返回選中的目的地或 null
 *
 * 功能：
 * 1. 過濾掉當前位置
 * 2. 從剩餘標記點中隨機選擇
 * 3. 確保不會選到當前位置
 */
export const pickRandomDestination = (markers, currentMarker) => {
  // 排除當前位置的標記點
  const availableMarkers = markers.filter(
    (marker) =>
      marker.position[0] !== currentMarker.position[0] &&
      marker.position[1] !== currentMarker.position[1]
  );

  if (availableMarkers.length === 0) return null;

  // 隨機選擇一個目的地
  const randomIndex = Math.floor(Math.random() * availableMarkers.length);
  return availableMarkers[randomIndex];
};
