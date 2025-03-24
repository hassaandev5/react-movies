import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      {/* Search Icon */}
      <input
        type="text"
        placeholder="Search Through movies"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
