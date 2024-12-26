import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
        404
      </h1>
      <p className="text-lg sm:text-xl md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8">
        頁面不存在
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-blue-500 text-white text-sm sm:text-base md:text-lg rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md"
      >
        返回首頁
      </button>
    </div>
  );
}

export default PageNotFound;
