import ButtonLogin from "@/components/button/button-login/ButtonLogin";
import ButtonSignup from "@/components/button/button-signup/ButtonSignup";
import Link from "next/link";
import React from "react";

type Props = {};

const NavbarNotSignedIn = (props: Props) => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/questions">Questions</Link>
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
