import ButtonLogout from "@/components/button/button-logout/ButtonLogout";
import Link from "next/link";
import React from "react";

type Props = {};

const NavbarAvatarDropdown = (props: Props) => {
  return (
    <div className="absolute top-[120%] right-0 border border-zinc-700 rounded bg-zinc-900 w-64 p-3 fade-in ease-in duration-200">
      <div className="py-2 border-b border-zinc-700">
        <Link
          href="/profile"
          className="px-3 py-2 block w-full test-start flex flex-col gap-1 bg-zinc-900 duration-200 ease-out hover:bg-zinc-800 rounded"
        >
          <span>Anthony</span>
          <span className="text-sm text-zinc-400">@adylanmclamb</span>
        </Link>
      </div>
      <div className="py-2 border-b border-zinc-700">
        <Link
          href="/profile"
          className="px-3 w-full text-start block py-2 bg-zinc-900 duration-200 ease-out hover:bg-zinc-800 rounded"
        >
          Profile
        </Link>
        <Link
          href="/saves"
          className="px-3 w-full text-start block py-2 bg-zinc-900 duration-200 ease-out hover:bg-zinc-800 rounded"
        >
          Saves
        </Link>
      </div>
      <div className="py-2 border-t border-zinc-700 block">
        <ButtonLogout
          padding="px-3"
          className="w-full text-start block py-2 bg-zinc-900 duration-200 ease-out hover:bg-zinc-800 rounded"
        />
      </div>
    </div>
  );
};

export default NavbarAvatarDropdown;
