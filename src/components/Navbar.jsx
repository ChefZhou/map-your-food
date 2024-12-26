import NavBarButton from "../features/header/NavBarButton";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const hideHomeButton = ["/", "/home"].includes(location.pathname);

  return (
    <nav className="flex justify-center w-full px-2 sm:px-4">
      <ul className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
        {!hideHomeButton && (
          <li>
            <NavBarButton to="/">回到首頁</NavBarButton>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
