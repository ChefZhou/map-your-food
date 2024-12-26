import { useNavigate, useLocation } from "react-router-dom";
import { calculateDistance } from "../utils/utils";
import { useDestination } from "../hooks/useDestination";
import DestinationMap from "../components/DestinationMap";
import Button from "../components/Button";

function Destination() {
  const navigate = useNavigate();
  const location = useLocation();
  const { markers, currentPosition } = location.state || {};

  const { destination, handleTryAgain } = useDestination(
    markers,
    currentPosition
  );

  if (!markers || !currentPosition || !destination) {
    return <div>載入中...</div>;
  }

  const distance = calculateDistance(
    currentPosition.position[0],
    currentPosition.position[1],
    destination.position[0],
    destination.position[1]
  );

  return (
    <div className="p-2 sm:p-3 md:p-4">
      <div className="mb-2 sm:mb-3 md:mb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center animate-fade-in">
          {`✨ 命運指引您前往 ${destination?.description || "神秘地點"} ✨`}
        </h1>
        <div className="text-center text-base sm:text-lg md:text-xl text-gray-600 mb-2 sm:mb-3 md:mb-4">
          <p className="animate-slide-up">
            從{" "}
            <span className="font-semibold text-blue-600">
              {currentPosition.description || "當前位置"}
            </span>
            <br />到{" "}
            <span className="font-semibold text-purple-600">
              {destination?.description}
            </span>
          </p>
          <p className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl font-bold text-green-600 animate-pulse">
            距離: {distance.toFixed(2)} 公里
          </p>
        </div>
      </div>

      <DestinationMap
        currentPosition={currentPosition}
        destination={destination}
      />

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
        <Button
          onClick={handleTryAgain}
          className="w-full sm:w-auto bg-blue-500 text-white hover:bg-blue-400"
        >
          再試一次
        </Button>
        <Button
          onClick={() => navigate("/map")}
          className="w-full sm:w-auto bg-gray-500 text-white hover:bg-gray-400"
        >
          返回地圖
        </Button>
      </div>
    </div>
  );
}

export default Destination;
