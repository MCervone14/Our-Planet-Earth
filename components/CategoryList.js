import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const CategoryList = ({ categories }) => {
  const [isShowing, setIsShowing] = useState(false);

  const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      };
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref]);

    return ref;
  };

  const handleClickOutside = () => {
    setIsShowing(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShowing((prev) => !prev);
  };

  const handleHeaderClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      ref={ref}
      onClick={handleHeaderClick}
      className="fixed right-0 top-[47%] p-2 bg-[steelblue] rounded-lg shadow-md  ease-in"
    >
      <button onClick={handleClick} value={isShowing} className="">
        {isShowing === false ? (
          <BsArrowBarLeft size={20} color="white" />
        ) : (
          <BsArrowBarRight size={20} color="white" />
        )}
      </button>
      {isShowing && (
        <div className="mobile:w-full">
          <h3 className="text-xl font-bold bg-[steelblue] text-center border-2  text-white p-3 rounded ease-in">
            Action Platform Categories
          </h3>
          <ul className="category-ul divide-y divide-gray-300 ease-in">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={`/articles/category/${cat.toLowerCase()}`}
              >
                <li className="p-4 cursor-pointer hover:bg-[#386890] text-white">
                  {cat}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
