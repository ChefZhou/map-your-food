import { useState } from "react";

const UseSideBar = ({ markers = [], updateMarker }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [description, setDescription] = useState("");

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
            {marker.description}
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
          <button
            onClick={handleUpdateMarker}
            className="mt-2 p-2 bg-[#ffd966] text-[#2d2d2d] border-none py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-[#ffc845] text-white shadow"
          >
            更新
          </button>
        </div>
      )}
    </>
  );
};

export default UseSideBar;
