import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import Articles from "../../../components/Articles";
import { capitalizeCategory, sortByDate } from "../../../lib/utils";
import Search from "../../../components/Search";

/* Documentation for [category_name].js file

  Page for displaying the articles in a specific category.
  
  The page is divided into two sections: the search bar in the Search Component and the articles related to that category.
  The articles are filtered by the category name in the getStaticProps function.
 
*/

const Category = ({ posts, categoryName }) => {
  const capitalizeCat = `${capitalizeCategory(
    categoryName
  )} Category | Our Planet Earth`;

  return (
    <>
      <Head>
        <title>{capitalizeCat}</title>
      </Head>
      <Search />
      <section>
        <h1 className="text-[steelblue] font-bold font-[Tangerine] pt-12 text-center text-8xl tablet:text-7xl mobile:text-5xl">
          {capitalizeCategory(categoryName)} Articles
        </h1>
        <div className="w-[60%] p-10 my-5 mx-auto mobile:w-[100%]">
          {posts.map((post, index) => (
            <Articles key={index} id={index} post={post} />
          ))}
        </div>
        <Link
          href="/articles"
          passHref
          className="flex w-48 text-center m-auto bg-charcoal text-white border-0 p-5 rounded cursor-pointer text-xl font-bold hover:text-yellow-300 my-12"
        >
          See All Articles
        </Link>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
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

  //filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  return {
    props: {
      posts: categoryPosts.sort(sortByDate).reverse(),
      categoryName: category_name,
      categories: uniqueCategories.sort(),
    },
  };
}

export default Category;
