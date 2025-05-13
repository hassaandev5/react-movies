import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FaSearch className="w-4 h-4 text-indigo-400" />
      </div>
      <input
        type="text"
        placeholder="Search for a movie title..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 shadow-sm"
      />
    </div>
  );
};

export default Search;
