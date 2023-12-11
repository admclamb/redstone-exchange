import { Link } from "react-router-dom";
import logo from "./logo-alt-mini.png";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Redstone Exchange"
        height={200}
        className="w-[10rem] -m-1"
      />
    </Link>
  );
};

export default Logo;
