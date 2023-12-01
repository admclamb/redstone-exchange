import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Redstone Exchange" width={250} height={250} />
    </Link>
  );
};

export default Logo;
