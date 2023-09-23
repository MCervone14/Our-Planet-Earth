import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Articles from "../../components/Articles";
import { sortByDate } from "../../lib/utils";
import Search from "../../components/Search";
import { useState, useEffect, useRef } from "react";

/* Documentation for ArticlesPage file

  Page for displaying all the articles in the Articles section of Our Planet Earth.

  The page is divided into two sections: the search bar and the articles.

  There is a load more button at the bottom of the page that will load more articles.
  It is set to load 7 articles at a time. This can be changed to however many you want using the articlesPerPage variable.
 
*/

const ArticlesPage = ({ posts, categories }) => {
  const [articlesToShow, setArticlesToShow] = useState([]);
  const articlesPerPage = 7;
  let articlesForHolding = [];
  const ref = useRef(articlesPerPage);

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    articlesForHolding = articlesForHolding.concat(slicedPosts);
    setArticlesToShow(articlesForHolding);
  };

  useEffect(() => {
    loopWithSlice(0, articlesPerPage);
  }, []);

  const handleShowMoreArticles = () => {
    loopWithSlice(0, ref.current + articlesPerPage);
    ref.current += articlesPerPage;
  };

  return (
    <>
      <Head>
        <title>Articles | Our Planet Earth</title>
      </Head>
      <Search />
      <h1 className="text-[steelblue] font-bold pt-12 font-[Tangerine] text-center text-8xl tablet:text-7xl mobile:text-4xl">
        Our Planet Earth Articles
      </h1>
      <div className="w-[60%] p-10 my-5 mx-auto mobile:w-full">
        {articlesToShow.map((post, index) => (
          <Articles
            key={index}
            id={index}
            post={post}
            categories={categories}
          />
        ))}
        <button
          disabled={articlesToShow.length >= posts.length ? true : false}
          onClick={handleShowMoreArticles}
          className="flex justify-center text-center w-48 m-auto bg-charcoal disabled:hidden hover:text-yellow-300 text-white border-0 p-5 rounded cursor-pointer text-md font-bold my-10"
        >
          Load More Articles
        </button>
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

export default ArticlesPage;
