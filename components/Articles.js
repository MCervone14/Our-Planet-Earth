import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

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
    <Link href={`/article/${post.slug}`} passHref>
      <div className="article-card flex items-center mb-[1.25rem] hover:cursor-pointer mobile:flex-col tablet:flex-col desktop:flex-row">
        <div>
          {!compact && (
            <Image
              objectFit="cover"
              height="200px"
              width="300px"
              layout="fixed"
              src={post.frontmatter.cover_image}
              alt={post.frontmatter.title}
            />
          )}
        </div>
        <div>
          <h3 className="article-post-title title mobile:text-[1rem] tablet:text-[1.5rem] laptop:text-[2rem] desktop:text-[2rem]">
            {!compact && (
              <span className="mx-[.625rem] mt-[1.125rem] text-black/[.3]">
                #{id + 1}.
              </span>
            )}
            {post.frontmatter.title}
          </h3>
          {!compact && (
            <div>
              <span className="text-black/50 ml-[.625rem]">Published </span>
              {dayjs(post.frontmatter.date).format("MMMM D, YYYY")}
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
    </Link>
  );
};

export default Articles;
