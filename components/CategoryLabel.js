import Link from "next/link";

/* Documentation for CategoryLabel.js file

  Category label component for the website.
  It is used to display the category label and the color of the label depending on the key in the colorKey array.

*/

const CategoryLabel = ({ children }) => {
  const colorKey = {
    "cry-of-the-earth": "#013220",
    "cry-of-the-poor": "#983301",
    "ecological-economics": "#301934",
    "ecological-education": "#8B0000",
    "ecological-spirituality": "#00008b",
    "simple-lifestyles": "#615900",
    "community-involvement": "#1d2739",
  };
  return (
    <span
      className={`font-semibold w-fit inline-block px-1 py-0 mt-1 text-center text-sm uppercase rounded last:mr-0 mr-1 hover:cursor-pointer hover:text-yellow-300`}
      style={{ backgroundColor: `${colorKey[children.toLowerCase()]}` }}
    >
      <Link
        href={`/articles/category/${children.toLowerCase()}`}
        className="text-[10px] text-white hover:text-yellow-300"
      >
        {children.replace(/-/g, " ")}
      </Link>
    </span>
  );
};

export default CategoryLabel;
