import React from "react";
import { MdSearch } from "react-icons/md";

export const Search = ({ handleSearchNote }) => {
  return (
    <div className="flex items-center bg-gray-200 rounded-xl p-2">
      <MdSearch size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        className="focus:outline-none bg-gray-200 ml-1 w-full"
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};
