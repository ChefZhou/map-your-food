import UseSideBar from "./UseSideBar";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // 確保引入 toast 組件

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

  const navigate = useNavigate();

  const handleFateButtonClick = () => {
    if (markers.length >= 2) {
      toast.success("命運的指針指向了你的下一個目的地!");
      navigate("/destination");
    } else {
      toast.error("現在想不到?那就休息一下再來吧");
      navigate("/home");
    }
  };

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
            <li
              key={marker.id}
              className="cursor-pointer"
              onClick={() => handleSelectMarker(marker)}
            >
              {marker.description} - 距離:{" "}
              {distanceCalculator(
                marker.position[0],
                marker.position[1]
              ).toFixed(2)}{" "}
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
              <Button
                onClick={() => handleDeleteMarker(selectedMarker.id)}
                className="bg-red-500 text-white hover:bg-red-400"
              >
                刪除
              </Button>
            </div>
          </div>
        )}
        <div className="mt-4">
          <Button
            onClick={handleFateButtonClick}
            className="bg-green-500 text-white hover:bg-green-400"
          >
            交給命運
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapSideBar;
