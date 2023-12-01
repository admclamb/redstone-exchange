import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  width?: string;
};

const Searchbar = ({ width = "w-96" }: Props) => {
  return (
    <div className={`relative ${width}`}>
      <input
        className="bg-zinc-800 p-2 rounded w-full"
        placeholder="Search..."
      />
      <button className="hover:bg-zinc-700 active:bg-zinc-600 absolute right-0 top-1/2 -translate-y-1/2 py-2 px-2.5 rounded-r">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Searchbar;
