import Avatar from "@/components/avatar/Avatar";
import OutsideAlerter from "@/components/outside-alerter/OutsideAlerter";
import React, { useState } from "react";
import NavbarAvatarDropdown from "./navbar-avatar-dropdown/NavbarAvatarDropdown";

type Props = {
  width?: string;
  height?: string;
  avatarUrl?: string;
  id?: string;
};

const NavbarAvatar = ({
  width = "w-8",
  height = "h-8",
  avatarUrl,
  id = "",
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpoen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpoen((curr) => !curr);
  };

  const closeDropdown = () => {
    setIsDropdownOpoen(false);
  };
  return (
    <OutsideAlerter executable={closeDropdown} className="relative">
      <button
        id="navbar-avatar-button"
        className="p-1 hover:bg-zinc-700 duration-200 ease-out rounded-full"
        onClick={toggleDropdown}
      >
        <Avatar avatarUrl={avatarUrl} width={width} height={height} id={id} />
      </button>
      {isDropdownOpen && <NavbarAvatarDropdown />}
    </OutsideAlerter>
  );
};

export default NavbarAvatar;
