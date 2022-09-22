import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

const Articles = ({ post, id }) => {
  return (
    <Link href={`/article/${post.slug}`} passHref>
      <div className="article-card">
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
          <h3 className="article-post-title title">
            <span className="article-number">#{id + 1}.</span>{" "}
            {post.frontmatter.title}
          </h3>
          <div className="post-date">
            <span className="span-published">Published </span>
            {dayjs(post.frontmatter.date).format("MMMM D, YYYY")}
          </div>
          <p className="article-card-text">{post.frontmatter.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default Articles;
