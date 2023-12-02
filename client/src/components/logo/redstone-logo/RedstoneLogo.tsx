import { Link } from "react-router-dom";
import redstoneLogo from "../../../../public/favicon.ico";

type Props = {
  width?: string;
};

const RedstoneLogo = ({ width = "w-[10rem]" }: Props) => {
  return (
    <Link to="/">
      <img
        src={redstoneLogo}
        alt="Redstone Exchange"
        className={`${width} -m-1`}
      />
    </Link>
  );
};

export default RedstoneLogo;
