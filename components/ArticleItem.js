import { marked } from "marked";
import Image from "next/legacy/image";
import dayjs from "dayjs";
import Link from "next/link";

/* Documentation for ArticleItem.js file

  ArticleItem component is for the article display on the Global News section when you hover over a marker.

  if the news_category is Related News Article, then it will display the source, video, and the link to the website.
  else it will display the full article.

*/

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
      <article className="mx-auto w-3/4">
        <div>
          <h1 className="my-2.5 text-lg tablet:text-2xl desktop:text-3xl font-bold">
            {title}
          </h1>
          <div className="mb-5 py-1">
            <span className="text-black/80">Published on</span>{" "}
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
      </article>
    );
  } else {
    return (
      <article className="mx-10">
        <div>
          <h1 className="my-2.5 text-lg tablet:text-2xl desktop:text-3xl font-bold">
            {title}
          </h1>
          <div className="mb-5 py-1">
            <span className="text-black/80">Published on</span>{" "}
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
      </article>
    );
  }
};

export default ArticleItem;
