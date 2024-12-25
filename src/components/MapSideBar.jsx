import UseSideBar from "../features/map/UseSideBar";
import MarkerItem from "./MarkerItem";
import Button from "./Button";

const MapSideBar = ({
  markers = [],
  updateMarker,
  className,
  newMarker,
  deleteMarker,
  distanceCalculator,
}) => {
  const {
    selectedMarker,
    description,
    handleSelectMarker,
    handleUpdateMarker,
    handleDeleteMarker,
    setDescription,
  } = UseSideBar({
    markers,
    updateMarker,
    newMarker,
    deleteMarker,
    distanceCalculator,
  });

  // 添加日誌輸出來檢查 selectedMarker 狀態
  console.log("selectedMarker:", selectedMarker);

  return (
    <div>
      <div
        className={`fixed top-24 left-10 w-1/4 h-[calc(70vh-50px)] p-4 bg-gray-100 rounded-lg shadow-lg overflow-y-auto ${className} sm:w-full sm:left-0 sm:top-16 sm:h-[calc(100vh-32px)] md:w-1/4 md:left-10 md:top-24 md:h-[calc(70vh-50px)]`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center ">
          點擊地圖開始設定座標!
        </h2>
        <p className="text-xl font-bold mb-4 text-center ">座標列表</p>
        <ul>
          {markers.map((marker) => (
            <MarkerItem
              key={marker.id}
              marker={marker}
              distanceCalculator={distanceCalculator}
              handleSelectMarker={handleSelectMarker}
            />
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
      </div>
    </div>
  );
};

export default MapSideBar;
