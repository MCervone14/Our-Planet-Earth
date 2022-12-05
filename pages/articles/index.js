import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Articles from "../../components/Articles";
import CategoryList from "../../components/CategoryList";
import { sortByDate } from "../../utils";
import Search from "../../components/Search";

const articles = ({ posts, categories }) => {
  return (
    <>
      <Head>
        <title>Our Planet Earth | Articles</title>
      </Head>
      <Search />
      <h1 className="text-[steelblue] font-bold font-[Tangerine] text-center text-[6.25rem] tablet:text-[5rem] mobile:text-[2.5rem]">
        Our Planet Earth Articles
      </h1>
      <CategoryList categories={categories} />
      <div className="w-[60%] p-10 my-[1.25rem] mx-auto mobile:w-[100%]">
        {posts.map((post, index) => (
          <Articles
            key={index}
            id={index}
            post={post}
            categories={categories}
          />
        ))}
      </div>
    </>
  );
};

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
    };
  });

  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  return {
    props: {
      posts: posts.sort(sortByDate),
      categories: uniqueCategories.sort(),
    },
  };
}

export default articles;
