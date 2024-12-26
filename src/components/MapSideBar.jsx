import UseSideBar from "../features/map/UseSideBar";
import MarkerItem from "./MarkerItem";

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

  return (
    <div>
      <div
        className={`fixed p-4 bg-gray-100 rounded-lg shadow-lg overflow-y-auto 
          ${className}
          // 手機版 (Small screens)
          w-full left-0 top-16 h-[calc(100vh-64px)]
          // 平板版 (Medium screens)
          md:w-1/3 md:left-8 md:top-20 md:h-[calc(80vh-40px)]
          // 電腦版 (Large screens)
          lg:w-1/4 lg:left-10 lg:top-24 lg:h-[calc(70vh-50px)]`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center ">
          點擊地圖開始設定座標!
        </h2>
        <p className="text-xl font-bold mb-4 text-center ">座標列表</p>
        {/* 標記點列表區域 */}
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
        {/* 編輯標記點區域 */}
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
