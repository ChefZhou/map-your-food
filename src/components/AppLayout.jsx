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
        className={`flex-grow ${
          !hideHeader ? "mt-16" : ""
        } mb-16 overflow-hidden`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
