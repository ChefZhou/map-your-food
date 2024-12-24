import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="relative p-8">
        <img
          src="/bg.png"
          alt="Banner"
          className="w-full h-full object-cover sm:h-48 md:h-64"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-8">
          <h1 className="text-4xl font-bold mb-4 sm:text-2xl md:text-4xl">
            想不到吃甚麼?遊地圖幫你決定!
          </h1>
          <Link
            to="/map"
            className="bg-[#ff7a59] text-[#fffdf5] py-2 px-4 rounded transition-colors duration-300 hover:bg-[#e86a48]"
          >
            開始使用
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
