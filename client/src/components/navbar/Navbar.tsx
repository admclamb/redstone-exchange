import Searchbar from "../searchbar/Searchbar";
import NavbarSignedIn from "./navbar-signed-in/NavbarSignedIn";
import NavbarNotSignedIn from "./navbar-not-signed-in/NavbarNotSignedIn";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../logo/Logo";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="p-2 bg-zinc-900 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex items-center gap-5">
          <li>
            <Logo />
          </li>
          <li>
            <Searchbar />
          </li>
        </ul>
        {isAuthenticated ? <NavbarSignedIn /> : <NavbarNotSignedIn />}
      </div>
    </nav>
  );
};

export default Navbar;
