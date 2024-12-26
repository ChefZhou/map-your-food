import UseSideBar from "./UseSideBar";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // 確保引入 toast 組件

/**
 * 側邊欄元件
 * 功能：
 * 1. 顯示所有標記點列表
 * 2. 提供標記點編輯介面
 * 3. 整合命運按鈕功能
 */
const MapSideBar = ({
  markers = [],
  updateMarker,
  className,
  newMarker,
  deleteMarker,
  distanceCalculator,
  currentPosition,
}) => {
  // 使用自定義 Hook 管理側邊欄狀態
  const {
    selectedMarker, // 當前選中的標記點
    description, // 標記點描述文字
    handleSelectMarker, // 選擇標記點處理函數
    handleUpdateMarker, // 更新標記點處理函數
    handleDeleteMarker, // 刪除標記點處理函數
    setDescription, // 設置描述文字的函數
  } = UseSideBar({
    markers,
    updateMarker,
    newMarker,
    deleteMarker,
    distanceCalculator,
  });

  const navigate = useNavigate();

  /**
   * 命運按鈕點擊處理
   * 條件：至少需要兩個標記點
   * 結果：導向目的地頁面或顯示錯誤提示
   */
  const handleFateButtonClick = () => {
    if (markers.length >= 2) {
      // 將當前位置和標記點資料傳遞給目的地頁面
      navigate("/destination", {
        state: {
          markers,
          currentPosition: {
            position: currentPosition,
            description: "當前位置",
          },
        },
      });
    } else {
      toast.error("請至少新增兩個地點！");
    }
  };

  return (
    <div className={`${className} h-full`}>
      <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:h-full">
        <div className="overflow-y-auto h-full">
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center sticky top-0 bg-gray-100 py-2">
            點擊地圖開始設定座標!
          </h2>
          <p className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center">
            座標列表
          </p>
          <ul className="space-y-2 mb-4">
            {markers.map((marker) => (
              <li
                key={marker.id}
                className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg transition-colors"
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
            <div className="mt-2 md:mt-4 space-y-2">
              <h3 className="text-md md:text-lg font-bold">編輯座標名稱</h3>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full rounded-lg bg-gray-200"
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleUpdateMarker}
                  className="flex-1 p-2 bg-lime-600 text-white rounded-lg transition-colors duration-300 hover:bg-lime-500 shadow"
                >
                  更新
                </button>
                <Button
                  onClick={() => handleDeleteMarker(selectedMarker.id)}
                  className="flex-1 bg-red-500 text-white hover:bg-red-400"
                >
                  刪除
                </Button>
              </div>
            </div>
          )}
          <div className="mt-4">
            <Button
              onClick={handleFateButtonClick}
              className="w-full bg-yellow-600 text-white hover:bg-yellow-500 py-3"
              disabled={markers.length < 2}
            >
              讓命運決定
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSideBar;
