import React from "react";
import Link from "next/link";

const CategoryLabel = ({ children }) => {
  const colorKey = {
    "cry of the earth": "#86efac",
    "cry of the poor": "#fdba74",
    "ecological economics": "#d8b4fe",
    "ecological education": "#fca5a5",
    "ecological spirituality": "#67e8f9",
    "simple lifestyles": "#fde047",
    "community involvement": "#f9a8d4",
  };
  return (
    <span
      className={`font-semibold w-fit inline-block px-1 py-0 text-center text-sm uppercase rounded last:mr-0 mr-1`}
      style={{ backgroundColor: `${colorKey[children.toLowerCase()]}` }}
    >
      <Link
        href={`/articles/category/${children.toLowerCase()}`}
        className="text-[.65rem] text-[#1e3a8a] "
      >
        {children}
      </Link>
    </span>
  );
};

export default CategoryLabel;
