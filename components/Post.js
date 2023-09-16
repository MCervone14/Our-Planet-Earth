import Link from "next/link";
import Image from "next/legacy/image";
import dayjs from "dayjs";

import CategoryLabel from "./CategoryLabel";

const Post = ({ post }) => {
  return (
    <div className="pt-3 pb-6 px-5 rounded-lg shadow-2 bg-white min-w-[20rem]">
      <h3 className="post-title mobile:text-[1rem] tablet:text-[1rem] laptop:text-[1.25rem] desktop:text-[1.5rem] font-bold m-0">
        {post.frontmatter.title}
      </h3>
      <div className="mb-[1.25rem] flex items-center justify-between laptop:flex-col laptop:gap-3 laptop:items-start tablet:flex-col tablet:justify-between mobile:flex-col mobile:items-start mobile:gap-3">
        <div>
          <span className="text-black/80">Published </span>{" "}
          {dayjs(post.frontmatter.date).format("MMMM D, YYYY")}
        </div>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
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

      <Link
        href={`/article/${post.slug}`}
        className="bg-charcoal text-white py-2 px-4 rounded cursor-pointer text-sm font-bold hover:text-yellow-300"
        aria-label={`Read more about ${post.frontmatter.title}`}
      >
        See Full Article
      </Link>
      <span className="ml-2 text-black/80">&#183; {post.readingTime}</span>
    </div>
  );
};

export default Post;
