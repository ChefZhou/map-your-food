import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] px-4 pt-4">
        <div className="relative h-full rounded-xl overflow-hidden">
          <img
            src="/travel-banner1.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center px-4">
              想不到去哪裡?擬遊趣來幫你決定!
            </h1>
            <Link
              to="/map"
              className="bg-[#ff7a59] text-[#fffdf5] py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-colors duration-300 hover:bg-[#e86a48]"
            >
              開始使用
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <div className="text-center mb-4">
              <span className="text-4xl text-[#ff7a59] transition-colors duration-300 group-hover:text-[#e86a48]">
                1
              </span>
            </div>
            <h2 className="text-xl font-bold text-center mb-3 transition-colors duration-300 hover:text-[#ff7a59]">
              探索地圖
            </h2>
            <p className="text-gray-600 text-center transition-colors duration-300 hover:text-gray-800">
              在互動式地圖上自由探索，尋找心儀的旅遊景點
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <div className="text-center mb-4">
              <span className="text-4xl text-[#ff7a59] transition-colors duration-300 group-hover:text-[#e86a48]">
                2
              </span>
            </div>
            <h2 className="text-xl font-bold text-center mb-3 transition-colors duration-300 hover:text-[#ff7a59]">
              選擇目的地
            </h2>
            <p className="text-gray-600 text-center transition-colors duration-300 hover:text-gray-800">
              標記幾個你感興趣的地點，不用擔心選擇困難
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <div className="text-center mb-4">
              <span className="text-4xl text-[#ff7a59] transition-colors duration-300 group-hover:text-[#e86a48]">
                3
              </span>
            </div>
            <h2 className="text-xl font-bold text-center mb-3 transition-colors duration-300 hover:text-[#ff7a59]">
              隨機決定
            </h2>
            <p className="text-gray-600 text-center transition-colors duration-300 hover:text-gray-800">
              讓命運之輪轉動，為你挑選最佳旅遊目的地
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
