import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import CategoryList from "./CategoryList";

/* Documentation for Search.js file

  Search bar component for the website.

  It takes in the searchTerm and sends it too the SearchResults component.
  
 
*/

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [collaspseSearchBar, setCollapseSearchBar] = useState(true);

  const handleFocus = (e) => {
    setIsShowing(true);
  };

  //Not using this right now.
  // const handleBlur = (e) => {
  //   const didClickModal = e.currentTarget.contains(e.relatedTarget);
  //   if (!didClickModal) {
  //     setIsShowing(false);
  //   }
  // };

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

  if (!collaspseSearchBar) {
    return (
      <button
        className="float-right bg-charcoal px-1 rounded-xl text-xs text-white hover:text-yellow-300 sticky top-1 mt-[-20px] mr-1 flex items-center"
        onClick={() => setCollapseSearchBar(true)}
      >
        <HiChevronDown className="w-4 h-4 inline-block" aria-hidden />
        Expand Search Bar
      </button>
    );
  }

  return (
    <div className="bg-[steelblue]/20 p-4 pr-8 flex mobile:flex-col desktop:flex-row items-center justify-between sticky top-0 backdrop-blur-3xl z-100 gap-10">
      <CategoryList />
      <div className="text-gray-600 z-0">
        <form>
          {" "}
          <input
            type="search"
            name="search"
            id="search"
            className="bg-white h-10 px-5 pr-10 rounded-full border-none outline-none focus:border-none text-sm  w-72 z-[0]"
            value={searchTerm}
            onFocus={handleFocus}
            //
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
      <button
        className="float-right bg-charcoal text-white hover:text-yellow-300 rounded-lg fixed top-1 right-1 px-1 text-xs flex items-center"
        onClick={() => setCollapseSearchBar(false)}
      >
        <HiChevronUp className="w-4 h-4 inline-block" aria-hidden />
        Collapse Search Bar
      </button>
    </div>
  );
};

export default Search;
