import NavBarButton from "../features/header/NavBarButton";

function Navbar() {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        <li>
          <NavBarButton to="/">回到主頁面</NavBarButton>
        </li>
        <li>
          <NavBarButton to="/login">用戶登入</NavBarButton>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
