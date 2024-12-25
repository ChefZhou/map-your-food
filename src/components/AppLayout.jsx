import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <main className="flex-grow mt-16 mb-16 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
