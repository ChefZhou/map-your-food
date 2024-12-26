const MarkerItem = ({ marker, distanceCalculator, handleSelectMarker }) => (
  <li
    key={marker.id}
    className="cursor-pointer hover:bg-yellow-200 p-2 rounded mb-8 border border-gray-300 shadow-lg"
    onClick={() => handleSelectMarker(marker)}
  >
    {marker.description} - 距離:{" "}
    {distanceCalculator(marker.position[0], marker.position[1]).toFixed(2)} 公里
  </li>
);

export default MarkerItem;
