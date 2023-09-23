import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sortByDate } from "../lib/utils";

/* Documentation for index.js file

  Page for displaying the homepage featured and recent blog articles.
  The page is divided into two sections: the featured  and recent.

  The featured section displays the first three articles in the posts array.
  The recent section displays the next six articles in the posts array.
*/

import Post from "../components/Post";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Home | Our Planet Earth</title>
      </Head>
      <h1 className="text-[steelblue] mt-16 font-bold font-[Tangerine] text-center text-9xl mobile:text-5xl ">
        Our Planet Earth
      </h1>
      <p className="font-['Open Sans'] font-light text-3xl mb-7 text-center mobile:text-lg">
        Our journey to care for our planet earth!
      </p>
      <section className="flex flex-col">
        <h2 className="text-[steelblue] font-[Tangerine] mt-10 ml-36 text-7xl mobile:ml-0 mobile:text-4xl">
          Featured Articles
        </h2>
        <div className="mx-36 mt-4 grid grid-cols-3 gap-12 mobile:grid-cols-1 mobile:m-7  tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3">
          {posts
            .map((post, index) => (
              <Post key={index} post={post} readingTime={readingTime} />
            ))
            .slice(0, 3)}
        </div>
      </section>
      <section>
        <h2 className="text-[steelblue] font-[Tangerine] mt-10 ml-36 text-7xl mobile:text-4xl mobile:ml-0">
          Recent Articles
        </h2>
        <div className="grid grid-cols-3 gap-12 mt-4 mobile:m-7 tablet:grid-cols-1 mobile:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 mx-36">
          {posts
            .map((post, index) => <Post key={index} post={post} />)
            .slice(3, 9)}
        </div>
      </section>
      <Link
        href="/articles"
        passHref
        className="flex justify-center text-center w-48 m-auto bg-charcoal hover:text-yellow-300 text-white border-0 p-5 rounded cursor-pointer text-md font-bold my-10"
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
