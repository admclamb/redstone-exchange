import React from "react";

type Props = {
  padding?: string;
  className?: string;
};

const ButtonLogout = ({ padding = "", className = "" }: Props) => {
  return (
    <a href="/api/auth/logout" className={`${padding} ${className}`}>
      Logout
    </a>
  );
};

export default ButtonLogout;
