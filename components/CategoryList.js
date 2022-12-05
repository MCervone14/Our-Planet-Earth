import React from "react";
import { NavLink } from "../utils/NavLink";

const CategoryList = ({ categories }) => {
  const catTooltips = {
    "Community Involvement":
      "Emphasizes 'care for creation' at the local, regional, national, and international levels.",
    "Cry of the Earth":
      "Includes the use of clean renewable energy sources to achieve carbon neutrality. In addition, it promotes biodiversity, clean water, clean air, and healthy soils.",
    "Cry of the Poor":
      "Embraces protecting human life from conception to death, and protecting all life on earth, especially vulnerable groups.",
    "Ecological Economics":
      "Addresses fair-trade policies, sustainable production of products, ethical use of resources and investments, and the removal of any economic activities harmful to the planet and to its people.",
    "Ecological Education":
      "Directs us to rethink and redesign educational curriculum and our schools, and create more ecological awareness, action, and vocations.",
    "Ecological Spirituality":
      "Emphasizes God's creation, encourages more contact with nature, promotes creation-centered liturgical celebrations, and develops more opportunities for ecological prayer, retreats, and formation.",
    "Simple Lifestyles":
      "Praises living a more thoughtful, considerate and simpler lifestyle related to the use of natural resources and energy. It also advocates adopting a more plant-based diet, greater use of public transportation, and not polluting our water, air, and soil.",
  };
  return (
    <>
      <div className="w-[60vw] mt-[2rem] mx-auto">
        <h3 className="text-xl py-1 flex items-center justify-center gap-4  font-bold bg-[steelblue] text-center text-white ">
          Action Platform Categories
        </h3>
        <ul className="category-ul grid gap-2  grid-cols-8 text-center w-[60vw] border-2 border-[steelblue] p-5 laptop:grid-cols-6 tablet:grid-cols-3 mobile:grid-cols-1">
          <NavLink
            key="0"
            exact
            href="/articles"
            className="py-1 px-2 flex items-center justify-center list-none rounded-lg hover:bg-[steelblue] cursor-pointer hover:text-white"
          >
            All Articles
          </NavLink>
          {categories.map((cat, index) => (
            <NavLink
              key={index + 1}
              href={`/articles/category/${encodeURI(cat.toLowerCase())}`}
              className="py-1 px-2 flex items-center justify-center text-center list-none rounded-lg hover:bg-[steelblue] cursor-pointer hover:text-white"
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
