import { Link } from "react-router-dom";
import ButtonLogin from "../../button/button-login/ButtonLogin";
import ButtonSignup from "../../button/button-signup/ButtonSignup";

const NavbarNotSignedIn = () => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/questions">Questions</Link>
      </li>
      <li>
        <ButtonLogin />
      </li>
      <li>
        <ButtonSignup />
      </li>
    </ul>
  );
};

export default NavbarNotSignedIn;
