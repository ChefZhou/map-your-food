import NavBarButton from "../features/header/NavBarButton";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const hideHomeButton = ["/", "/home"].includes(location.pathname);

  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        {!hideHomeButton && (
          <li>
            <NavBarButton to="/">回到首頁</NavBarButton>
          </li>
        )}
        {/* <li>
          <NavBarButton to="/login">用戶登入</NavBarButton>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
