import Image from "next/image";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image
      src="/redstone-exchange-logo.png"
      alt="Redstone exchange"
      width={200}
      height={100}
    />
  );
};

export default Logo;
