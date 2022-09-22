import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

const Post = ({ post, readingTime }) => {
  return (
    <div className="card">
      <h3 className="post-title">{post.frontmatter.title}</h3>
      <div className="post-date">
        <span className="span-published">Published </span>{" "}
        {dayjs(post.frontmatter.date).format("MMMM D, YYYY")}
      </div>
      <Image
        objectFit="cover"
        height="500"
        width="800"
        layout="responsive"
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
      />

      <p className="card-text">{post.frontmatter.excerpt}</p>

      <Link href={`/article/${post.slug}`}>
        <div className="btn-div">
          <a className="btn">Read More</a>
          <span className="reading-time">&#183; {post.readingTime}</span>
        </div>
      </Link>
    </div>
  );
};

export default Post;
