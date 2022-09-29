import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

const Articles = ({ post, id }) => {
  return (
    <Link href={`/article/${post.slug}`} passHref>
      <div className="article-card flex items-center mb-[1.25rem] hover:cursor-pointer mobile:flex-col tablet:flex-col desktop:flex-row">
        <div>
          <Image
            objectFit="cover"
            height="200px"
            width="300px"
            layout="fixed"
            src={post.frontmatter.cover_image}
            alt={post.frontmatter.title}
          />
        </div>
        <div>
          <h3 className="article-post-title title mobile:text-[1rem] tablet:text-[1.5rem] desktop:text-[2-rem]">
            <span className="mx-[.625rem] mt-[1.125rem] text-black/[.3]">
              #{id + 1}.
            </span>{" "}
            {post.frontmatter.title}
          </h3>
          <div className="post-date">
            <span className="text-black/50 ml-[.625rem]">Published </span>
            {dayjs(post.frontmatter.date).format("MMMM D, YYYY")}
          </div>
          <p className="article-card-text">{post.frontmatter.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default Articles;
