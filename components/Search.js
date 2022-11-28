import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaSearch } from "react-icons/fa";
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
    <div className="bg-[steelblue]/20 p-4 sticky top-0 z-10">
      <div className="container mr-[20rem] flex mobile:justify-start tablet:justify-end laptop:justify-end desktop:justify-end">
        <div className="relative text-gray-600 w-72">
          <form>
            {" "}
            <input
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
            <FaSearch className="absolute top-0 right-0 text-black mt-3 mr-4" />
          </form>
        </div>
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
