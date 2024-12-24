import { Link } from "react-router-dom";
import Button from "../../components/Button";

function NavBarButton({ to, children }) {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
}

export default NavBarButton;
