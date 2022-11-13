import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

const Post = ({ post }) => {
  return (
    <div className="py-[1.5625rem] px-[1.875rem] rounded-lg shadow-2 bg-white min-w-[20rem]">
      <h3 className="post-title mobile:text-[1rem] tablet:text-[1rem] laptop:text-[1.25rem] desktop:text-[1.5rem] font-bold">
        {post.frontmatter.title}
      </h3>
      <div className="mb-[1.25rem] py-1">
        <span className="text-black/50">Published </span>{" "}
        {dayjs(post.frontmatter.date).format("MMMM D, YYYY")}
      </div>
      <div className="block">
        <Image
          objectFit="cover"
          height="500"
          width="800"
          layout="responsive"
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
        />
      </div>
      <p className="card-text">{post.frontmatter.excerpt}</p>

      <Link href={`/article/${post.slug}`}>
        <div>
          <a className="bg-[steelblue] text-white border-0 py-[.5rem] px-[1rem] rounded cursor-pointer text-[1rem] font-bold mt-[1rem] hover:text-[gold] ">
            Read More
          </a>
          <span className="ml-[.3125rem] text-black/50">
            &#183; {post.readingTime}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Post;
