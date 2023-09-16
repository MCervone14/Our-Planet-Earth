import Link from "next/link";
import Image from "next/legacy/image";
import dayjs from "dayjs";
import CategoryLabel from "./CategoryLabel";

const Articles = ({ post, id, compact, searchTerm }) => {
  const getTextWithHightlightsForExcerpt = (text, searchTerm) => {
    const regex = new RegExp(searchTerm, "gi");
    const newText = text.replace(regex, `<mark>$&</mark>`);
    return <span dangerouslySetInnerHTML={{ __html: newText }} />;
  };

  // Need to revisit this function because it is replacing the styles in the Title.

  // const getTextWithHightlightsForTitle = (text, searchTerm) => {
  //   const regex = new RegExp(searchTerm, "gi");
  //   const newText = text.replace(regex, `<mark>$&</mark>`);
  //   return (
  //     <span
  //       dangerouslySetInnerHTML={{ __html: newText }}
  //       style={{ fontSize: "2rem" }}
  //     />
  //   );
  // };

  return (
    <div className="article-card flex items-center mb-[1.25rem]  mobile:flex-col tablet:flex-col laptop:flex-col desktop:flex-row">
      <div className="z-[-1]">
        <Image
          objectFit="cover"
          height="200"
          width="300"
          layout="fixed"
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
        />
      </div>
      <div>
        <Link href={`/article/${post.slug}`} passHref legacyBehavior>
          <h2 className="article-post-title title mobile:text-[1rem] tablet:text-[1.5rem] laptop:text-[2rem] desktop:text-[2rem] hover:cursor-pointer hover:text-[steelblue]">
            {!compact && (
              <span className="mx-[.625rem] mt-[1.125rem] text-black/80">
                #{id + 1}.
              </span>
            )}
            {post.frontmatter.title}
          </h2>
        </Link>
        {!compact && (
          <div className="flex ml-[.625rem] gap-2 justify-between items-center laptop:flex-col laptop:items-start mobile:flex-col mobile:items-start  ">
            <div>
              <span className="text-black/80 ">Published </span>
              {dayjs(post.frontmatter.date).format("MMMM D, YYYY")}
            </div>
            <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          </div>
        )}
        <p className="article-card-text">
          {getTextWithHightlightsForExcerpt(
            post.frontmatter.excerpt,
            searchTerm
          )}
        </p>
      </div>
    </div>
  );
};

export default Articles;
