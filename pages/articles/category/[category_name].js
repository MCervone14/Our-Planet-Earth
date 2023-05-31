import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import CategoryList from "../../../components/CategoryList";
import Articles from "../../../components/Articles";
import { capitalizeCategory, sortByDate } from "../../../lib/utils";
import Search from "../../../components/Search";

const Category = ({ posts, categoryName, categories }) => {
  return (
    <>
      <Head>
        <title>Our Planet Earth | {capitalizeCategory(categoryName)}</title>
      </Head>
      <Search />
      <h1 className="text-[steelblue] font-bold font-[Tangerine] text-center text-[6.25rem] tablet:text-[5rem] mobile:text-[2.5rem]">
        {capitalizeCategory(categoryName)} Articles
      </h1>
      <CategoryList categories={categories} />
      <div className="w-[60%] p-10 my-[1.25rem] mx-auto mobile:w-[100%]">
        {posts.map((post, index) => (
          <Articles key={index} id={index} post={post} />
        ))}
      </div>
      <Link
        href="/articles"
        passHref
        className="flex w-[12rem] text-center m-auto bg-[#B0C4DE] text-[#2a4cac] border-0 px-[1.25rem] py-[1.25rem] rounded cursor-pointer text-[1.25rem] font-bold hover:text-white my-[3.125rem]"
      >
        See All Articles
      </Link>
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
