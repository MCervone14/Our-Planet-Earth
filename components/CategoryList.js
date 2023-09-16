import React from "react";
import Image from "next/image";
import { NavLink } from "../lib/NavLink";

const CategoryList = ({ categories }) => {
  return (
    <>
      <div className="w-[60vw] mt-[2rem] mx-auto">
        <h2 className="text-xl py-1 flex items-center justify-center gap-4  font-bold bg-charcoal text-center text-white ">
          Action Platform Goals
        </h2>
        <ul className="category-ul grid gap-2  grid-cols-8 text-center w-[60vw] border-2 border-charcoal p-5 laptop:grid-cols-6 tablet:grid-cols-3 mobile:grid-cols-1">
          {/* <li>
            <NavLink
              key="0"
              exact
              href="/articles"
              className="py-1 px-2 flex text-white bg-charcoal items-center justify-center list-none rounded-lg hover:bg-charcoal/90 cursor-pointer border-2 border-charcoal"
            >
              All Articles
            </NavLink>
          </li>
          <li className="flex">
            {categories.map((cat, index) => (
              <NavLink
                key={index + 1}
                href={`/articles/category/${encodeURI(cat.toLowerCase())}`}
                className="py-1 px-2 flex text-[#1e3a8a] items-center justify-center text-center list-none rounded-lg hover:bg-charcoal cursor-pointer hover:text-white"
              >
                {cat}
              </NavLink>
            ))}
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
