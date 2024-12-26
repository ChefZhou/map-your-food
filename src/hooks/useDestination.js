import { useState, useEffect } from "react";
import { pickRandomDestination } from "../utils/destinationPicker";

/**
 * 目的地管理 Hook
 * @param {Array} markers - 所有標記點
 * @param {Object} currentPosition - 當前位置
 * @returns {Object} - 目的地狀態和控制函數
 */
export const useDestination = (markers, currentPosition) => {
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (markers && currentPosition) {
      const newDestination = pickRandomDestination(markers, currentPosition);
      setDestination(newDestination);
    }
  }, [markers, currentPosition]);

  const handleTryAgain = () => {
    const newDestination = pickRandomDestination(markers, currentPosition);
    setDestination(newDestination);
  };

  return {
    destination,
    handleTryAgain,
  };
};
