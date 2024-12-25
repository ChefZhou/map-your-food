import { useState, useEffect } from "react";

const UseSideBar = ({
  markers = [],
  updateMarker,
  newMarker,
  deleteMarker,
  distanceCalculator,
}) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (newMarker) {
      setSelectedMarker(newMarker);
      setDescription(newMarker.description);
    }
  }, [newMarker]);

  const handleSelectMarker = (marker) => {
    setSelectedMarker(marker);
    setDescription(marker.description);
  };

  const handleUpdateMarker = () => {
    if (selectedMarker) {
      updateMarker(selectedMarker.id, description);
      setSelectedMarker(null);
      setDescription("");
    }
  };

  const handleDeleteMarker = (id) => {
    deleteMarker(id);
    if (selectedMarker && selectedMarker.id === id) {
      setSelectedMarker(null);
      setDescription("");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center ">
        點擊地圖開始設定座標!
      </h2>
      <p className="text-xl font-bold mb-4 text-center ">座標列表</p>
      <ul>
        {markers.map((marker) => (
          <li
            key={marker.id}
            className="cursor-pointer"
            onClick={() => handleSelectMarker(marker)}
          >
            {marker.description} - 距離:{" "}
            {distanceCalculator(marker.position[0], marker.position[1]).toFixed(
              2
            )}{" "}
            公里
          </li>
        ))}
      </ul>
      {selectedMarker && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">編輯座標名稱</h3>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full rounded-lg bg-gray-200"
          />
          <div className="flex space-x-2 mt-2">
            <button
              onClick={handleUpdateMarker}
              className="p-2 bg-[#ffd966] text-[#2d2d2d] border-none py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-[#ffc845] text-white shadow"
            >
              更新
            </button>
            <button
              onClick={() => handleDeleteMarker(selectedMarker.id)}
              className="p-2 bg-red-500 text-white border-none py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-red-400 shadow"
            >
              刪除
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UseSideBar;
