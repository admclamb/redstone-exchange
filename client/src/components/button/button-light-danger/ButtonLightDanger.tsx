import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  size?: string;
  hideUnerline?: boolean;
  spacing?: string;
};

const ButtonLightDanger = ({
  children,
  className = "px-3 py-2",
  href,
  onClick,
  size = "",
  hideUnerline = false,
  spacing = "py-2 px-4",
}: Props) => {
  if (href) {
    return (
      <Link
        to={href}
        className={`${className} ${size} text-red-800 hover:text-red-800 ${
          hideUnerline ? "" : "hover:underline underline-offset-2"
        } hover:bg-red-100 active:bg-red-200 duration-200 ease-out ${spacing} rounded`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${className} ${size} text-red-800 hover:text-red-800 hover:bg-red-100 ${
        hideUnerline ? "" : "hover:underline underline-offset-2"
      } active:bg-red-200 duration-200 ease-out ${spacing} rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonLightDanger;
