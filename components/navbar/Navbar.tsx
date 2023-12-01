"use client";

import React from "react";
import Searchbar from "../searchbar/Searchbar";
import NavbarSignedIn from "./navbar-signed-in/NavbarSignedIn";
import NavbarNotSignedIn from "./navbar-not-signed-in/NavbarNotSignedIn";
import { useUser } from "@auth0/nextjs-auth0/client";

type Props = {};

const Navbar = (props: Props) => {
  const { user } = useUser();
  return (
    <nav className="p-5 bg-zinc-900 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex items-center gap-5">
          <li>
            <Logo />
          </li>
          <li>
            <Searchbar />
          </li>
        </ul>
        {user ? <NavbarSignedIn /> : <NavbarNotSignedIn />}
      </div>
    </nav>
  );
};

export default Navbar;
