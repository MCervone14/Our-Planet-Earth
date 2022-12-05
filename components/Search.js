import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShowing, setIsShowing] = useState(false);

  const handleFocus = (e) => {
    setIsShowing((prev) => !prev);
  };

  const handleBlur = (e) => {
    setIsShowing(false);
  };

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === "") {
        setSearchResults([]);
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`);
        const results = await res.json();
        setSearchResults(results);
      }
    };
    getResults();
  }, [searchTerm]);

  return (
    <div className="bg-[steelblue]/20 p-4 pr-8 flex  items-center mobile:justify-center tablet:justify-end laptop:justify-end desktop:justify-end">
      <div className="text-gray-600">
        <form>
          {" "}
          <input
            type="search"
            name="search"
            id="search"
            className="bg-white h-10 px-5 pr-10 rounded-full border-none outline-none focus:border-none text-sm  w-72"
            value={searchTerm}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Articles..."
            autoComplete="off"
          />
        </form>
      </div>
      <SearchResults
        results={searchResults}
        searchTerm={searchTerm}
        isShowing={isShowing}
      />
    </div>
  );
};

export default Search;
