import React from "react";
import { NavLink } from "../lib/NavLink";

const CategoryList = ({ categories }) => {
  return (
    <>
      <div className="w-[60vw] mt-[2rem] mx-auto">
        <h3 className="text-xl py-1 flex items-center justify-center gap-4  font-bold bg-[steelblue] text-center text-white ">
          Action Platform Goals
        </h3>
        <ul className="category-ul grid gap-2  grid-cols-8 text-center w-[60vw] border-2 border-[steelblue] p-5 laptop:grid-cols-6 tablet:grid-cols-3 mobile:grid-cols-1">
          <NavLink
            key="0"
            exact
            href="/articles"
            className="py-1 px-2 flex text-[#1e3a8a] items-center justify-center list-none rounded-lg hover:bg-[steelblue] cursor-pointer border-2 border-[#2a4cac] hover:text-white"
          >
            All Articles
          </NavLink>
          {categories.map((cat, index) => (
            <NavLink
              key={index + 1}
              href={`/articles/category/${encodeURI(cat.toLowerCase())}`}
              className="py-1 px-2 flex text-[#1e3a8a] items-center justify-center text-center list-none rounded-lg hover:bg-[steelblue] cursor-pointer hover:text-white"
            >
              {cat}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
