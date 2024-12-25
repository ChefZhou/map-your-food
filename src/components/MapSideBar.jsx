import UseSideBar from "../features/map/UseSideBar";

const MapSideBar = ({ markers = [], updateMarker, className }) => {
  return (
    <div>
      <div
        className={`fixed top-24 left-10 w-1/4 h-[calc(70vh-50px)] p-4 bg-gray-100 rounded-lg shadow-lg overflow-y-auto ${className} sm:w-full sm:left-0 sm:top-16 sm:h-[calc(100vh-32px)] md:w-1/4 md:left-10 md:top-24 md:h-[calc(70vh-50px)]`}
      >
        <UseSideBar markers={markers} updateMarker={updateMarker} />
      </div>
    </div>
  );
};

export default MapSideBar;
