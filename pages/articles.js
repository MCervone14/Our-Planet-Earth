import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Articles from "../components/Articles";
import { sortByDate } from "../utils";

const articles = ({ posts }) => {
  return (
    <>
      <h1 className="text-[steelblue] font-bold font-[Tangerine] text-center text-[6.25rem]">
        Our Mother Earth Articles
      </h1>
      <div className="w-[60%] my-[1.25rem] mx-auto">
        {posts.map((post, index) => (
          <Articles key={index} id={index} post={post} />
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

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default articles;
