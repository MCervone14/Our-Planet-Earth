import dayjs from "dayjs";

const RelatedNewsArticleItem = ({ frontmatter: { title, date } }) => {
  return (
    <div className="mx-10">
      <div>
        <h1 className="my-[.625rem] text-[2rem] mobile:text-[1rem] tablet:text-[1.5rem] desktop:text-[2rem] font-bold">
          {title}
        </h1>
        <div className="mb-[1.25rem] py-1">
          <span className="text-black/50">Published on</span>{" "}
          {dayjs(date).format("MMMM D, YYYY")}
        </div>
      </div>
    </div>
  );
};

export default RelatedNewsArticleItem;
