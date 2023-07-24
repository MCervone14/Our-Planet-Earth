import { marked } from "marked";
import Image from "next/legacy/image";
import dayjs from "dayjs";
import Link from "next/link";

const ArticleItem = ({
  frontmatter: {
    title,
    date,
    cover_image,
    news_category,
    authors,
    source,
    website,
    video,
  },
  content,
}) => {
  if (news_category === "Related News Article") {
    return (
      <div className="mx-auto w-3/4">
        <div>
          <h1 className="my-[.625rem] text-[2rem] mobile:text-[1rem] tablet:text-[1.5rem] desktop:text-[2rem] font-bold">
            {title}
          </h1>
          <div className="mb-[1.25rem] py-1">
            <span className="text-black/50">Published on</span>{" "}
            {dayjs(date).format("MMMM D, YYYY")} by{" "}
            <span className="font-bold">{authors}</span>
          </div>
          <div className="post-body mb-5">
            <div
              className="text-lg "
              dangerouslySetInnerHTML={{ __html: source }}
            />
          </div>
          <div>
            {video ? (
              <div dangerouslySetInnerHTML={{ __html: video }} />
            ) : (
              <Link href={website} target="_blank" className="font-bold">
                Link to Website
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  } else {
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
          <div className="text-center">
            <Image
              objectFit="cover"
              height="300"
              width="660"
              layout="intrinsic"
              src={cover_image}
              alt={title}
            />
          </div>
          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
    );
  }
};

export default ArticleItem;
