import Link from "next/link";

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
      className={`font-semibold w-fit inline-block px-1 py-0 text-center text-sm uppercase rounded last:mr-0 mr-1 hover:cursor-pointer hover:text-yellow-300`}
      style={{ backgroundColor: `${colorKey[children.toLowerCase()]}` }}
    >
      <Link
        href={`/articles/category/${children.toLowerCase()}`}
        className="text-[.65rem] text-white hover:text-yellow-300"
      >
        {children.replace(/-/g, " ")}
      </Link>
    </span>
  );
};

export default CategoryLabel;
