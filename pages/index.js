import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sortByDate } from "../utils";

//components
import Post from "../components/Post";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Our Planet Earth | Home</title>
      </Head>
      <h1 className="text-[steelblue] mt-[4rem] font-bold font-[Tangerine] text-center text-[7rem] mobile:text-[3rem] ">
        Our Planet Earth
      </h1>
      <h4 className="font-['Open Sans'] font-light text-[2rem] mb-[1.875rem] text-center mobile:text-[1rem]">
        Our journey to care for our planet earth!
      </h4>
      <div className="m-auto flex flex-col">
        <h2 className="text-[steelblue] font-[Tangerine] mt-[3.125rem] ml-[9rem] text-[5rem] mobile:ml-0 mobile:text-[3rem]">
          Featured Articles
        </h2>
        <div className="mx-[9rem] mt-[15px] grid grid-cols-3 gap-[3.125rem] mobile:grid-cols-1 mobile:ml-0 mobile:mr-auto tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3">
          {posts
            .map((post, index) => (
              <Post key={index} post={post} readingTime={readingTime} />
            ))
            .slice(0, 3)}
        </div>
      </div>
      <h2 className="text-[steelblue] font-[Tangerine] mt-[3.125rem] ml-[9rem] text-[5rem] mobile:text-[3rem] mobile:ml-0">
        Recent Articles
      </h2>
      <div className="grid grid-cols-3 gap-[3.125rem] mt-[.9375rem] mobile:m-0 tablet:grid-cols-1 mobile:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 mx-[9rem]">
        {posts
          .map((post, index) => <Post key={index} post={post} />)
          .slice(3, 9)}
      </div>
      <Link
        href="/articles"
        passHref
        className="flex w-[12rem] text-center m-auto bg-[steelblue] text-white border-0 px-[1.25rem] py-[1.25rem] rounded cursor-pointer text-[1.25rem] font-bold hover:text-[gold] my-[3.125rem]"
      >
        See All Articles
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  //get files from root posts folder
  const files = fs.readdirSync(path.join("posts"));

  // get slug and frontmatter from posts
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
      readingTime: readingTime(markdownWithMeta).text,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate).reverse(),
    },
  };
}
