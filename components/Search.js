import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const categoryIcons = [
  { url: "/LSAP_icons/LSAP_Goals_Wheel.png", label: "All-Action-Platforms" },
  {
    url: "/LSAP_icons/LSAP_1_Response_to_the_Cry_of_the_Earth.png",
    label: "Cry-of-the-Earth",
  },
  {
    url: "/LSAP_icons/LSAP_2_Response_to_the_Cry_of_the_Poor.png",
    label: "Cry-of-the-Poor",
  },
  {
    url: "/LSAP_icons/LSAP_3_Ecological_Economics.png",
    label: "Ecological-Economics",
  },
  {
    url: "/LSAP_icons/LSAP_4_Adoption_of_Sustainable_Lifestyles.png",
    label: "Simple-Lifestyles",
  },
  {
    url: "/LSAP_icons/LSAP_5_Ecological_Education.png",
    label: "Ecological-Education",
  },
  {
    url: "/LSAP_icons/LSAP_6_Ecological_Spirituality.png",
    label: "Ecological-Spirituality",
  },
  {
    url: "/LSAP_icons/LSAP_7_Community_Resilience_and_Empowerment.png",
    label: "Community-Involvement",
  },
];

const Search = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [activeLabel, setActiveLabel] = useState(
    router.query.category_name || "all-action-platforms"
  );
  const [collaspseSearchBar, setCollapseSearchBar] = useState(true);

  const handleFocus = (e) => {
    setIsShowing((prev) => !prev);
  };

  const handleBlur = (e) => {
    setIsShowing(false);
  };

  useEffect(() => {
    setActiveLabel(router.query.category_name || "all-action-platforms");
  }, [router.query.category_name]);

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
      <div className="flex items-center justify-around w-full mt-2 z-100">
        <ul className="grid gap-5 mobile:grid-cols-4 tablet:grid-cols-4 laptop:grid-cols-4 desktop:grid-cols-8">
          {categoryIcons.map((icon, index) => (
            <li className="list-none rounded-full z-100" key={index}>
              <Link
                href={
                  icon.label.toLowerCase() === "all-action-platforms"
                    ? "/articles"
                    : `/articles/category/${icon.label.toLowerCase()}`
                }
                className="rounded-full z-100"
              >
                <Image
                  src={icon.url}
                  width={100}
                  height={50}
                  onClick={(e) => setActiveLabel(icon.label)}
                  className={`cursor-pointer  border-4 hover:opacity-90 rounded-full border-[steelblue]/0 z-100 ${
                    icon.label.toLowerCase() === activeLabel
                      ? "border-[steelblue]/100"
                      : ""
                  }`}
                  alt={icon.label}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
            onBlur={handleBlur}
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
