import { Link } from "react-router-dom";
import NavbarAvatar from "../navbar-avatar/NavbarAvatar";

const NavbarSignedIn = () => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/questions">Questions</Link>
      </li>
      <li>
        <NavbarAvatar />
      </li>
    </ul>
  );
};

export default NavbarSignedIn;
