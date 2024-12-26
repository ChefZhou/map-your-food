import Map from "../components/Map";

function MapPage() {
  return (
    <div className="container mx-auto w-full h-screen p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row md:flex-row h-full">
        <Map />
      </div>
    </div>
  );
}
export default MapPage;
