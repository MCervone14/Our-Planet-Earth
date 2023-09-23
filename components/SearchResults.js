import React from "react";
import Articles from "./Articles";

/* Documentation for SearchResult.js file

  Modal for displaying the search results.
  It is displayed when the user clicks on the search bar and starts typing.

  It takes in the results, searchTerm, and isShowing props from the Search Component.

  It maps through the results and displays the Articles Component for each result. It also passes in a compact boolean prop to the Articles Component, 
  which is used to display the article in a compact form (without image, date, category etc.).
 
*/

const SearchResults = ({ results, searchTerm, isShowing }) => {
  if (results.length === 0 || "") return <></>;

  return (
    <>
      {isShowing && (
        <div
          className="absolute h-[40rem] overflow-x-hidden pointer-events-auto search scroll-smooth shadow mobile:top-[100%] tablet:top-[65%] laptop:top-[65%] desktop:top-[70%] right-10 z-100  bg-white rounded-2xl text-black/75 
        w-5/12 tablet:w-7/12 laptop:w-7/12 mobile:w-full mobile:right-0 "
        >
          <div className="p-10">
            <p className="mb-3 float-right mobile:text-sm tablet:text-sm text-[steelblue]">
              {results.length} Results
            </p>
            {results.map((result, index) => (
              <Articles
                key={index}
                id={index}
                post={result}
                compact={true}
                searchTerm={searchTerm}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;
