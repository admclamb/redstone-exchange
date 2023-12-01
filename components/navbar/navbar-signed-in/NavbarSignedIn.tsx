import Link from "next/link";
import React from "react";
import NavbarAvatar from "../navbar-avatar/NavbarAvatar";

type Props = {};

const NavbarSignedIn = (props: Props) => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/questions">Questions</Link>
      </li>
      <li>
        <NavbarAvatar />
      </li>
    </ul>
  );
};

export default NavbarSignedIn;
