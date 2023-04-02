import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-zinc-800">
      <div className="container mx-auto">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
