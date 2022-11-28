import React from "react";
import Articles from "./Articles";

const SearchResults = ({ results, searchTerm, isShowing }) => {
  if (results.length === 0 || "") return <></>;

  return (
    <>
      {isShowing && (
        <div className="absolute h-[40rem] overflow-x-hidden search scroll-smooth shadow top-20 right-10 z-10  bg-white rounded-2xl text-black/75 w-5/12 tablet:w-7/12 laptop:w-7/12 mobile:w-full mobile:right-0 mobile:">
          <div className="p-10">
            <h2 className="text-xl mb-3 float-right mobile:text-sm tablet:text-sm text-[steelblue]">
              {results.length} Results
            </h2>
            {results.map((result, index) => (
              <>
                <Articles
                  key={index}
                  id={index}
                  post={result}
                  compact={true}
                  searchTerm={searchTerm}
                />
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;
