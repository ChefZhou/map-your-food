import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const location = useLocation();
  const hideHeader = ["/", "/home"].includes(location.pathname);

  return (
    <div>
      {!hideHeader && <Header />}
      <main
        className={`flex-grow overflow-hidden ${
          !hideHeader
            ? "mt-4 mb-8 sm:mt-8 sm:mb-12 md:mt-12 md:mb-14 lg:mt-16 lg:mb-16"
            : ""
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
