import React from "react";
import Link from "next/link";

const CategoryLabel = ({ children }) => {
  return (
    <span className="text-sm text-center float-right border border-[steelblue] px-2 py-1 rounded-md hover:bg-[steelblue] laptop:flex-row">
      <Link
        href={`/articles/category/${children.toLowerCase()}`}
        className="hover:text-white"
      >
        {children}
      </Link>
    </span>
  );
};

export default CategoryLabel;
