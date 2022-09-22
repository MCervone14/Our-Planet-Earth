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
        <title>Our Mother Earth | Home</title>
      </Head>
      <h1 className="page-title">Our Mother Earth</h1>
      <h4 className="page-subtitle">
        Our journey to care for our planet earth!
      </h4>
      <div className="featured-section">
        <h2 className="feature-title">Featured Articles</h2>
        <hr />
        <div className="featured-section-post">
          {posts
            .map((post, index) => (
              <Post key={index} post={post} readingTime={readingTime} />
            ))
            .slice(0, 2)}
        </div>
      </div>
      <h2 className="feature-title">Recent Articles</h2>
      <hr />
      <div className="posts">
        {posts
          .map((post, index) => <Post key={index} post={post} />)
          .slice(2, 8)}
      </div>
      <Link href="/articles" passHref>
        <h2 className="more-article-btn">See All Articles</h2>
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
