import React from "react";
import Articles from "./Articles";

const SearchResults = ({ results }) => {
  console.log(results);
  if (results.length === 0) return <></>;
  return (
    <div className="absolute h-[40rem] overflow-x-hidden overflow-y-scroll top-20 right-0 tablet:right-10 z-10 border-4 border-gray-500 bg-white text-black w-4/12 tablet:w-6/12 rounded-2xl">
      <div className="p-10">
        <h2 className="text-xl mb-3 float-right text-[steelblue]">
          {results.length} Results
        </h2>
        {results.map((result, index) => (
          <Articles key={index} id={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
