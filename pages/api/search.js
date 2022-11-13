import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";

export default function handler(req, res) {
  let posts;

  if (process.env.NODE_ENV === "production") {
    posts = require("../../cache/data").posts;
  } else {
    const files = fs.readdirSync(path.join("posts"));

    posts = files.map((filename) => {
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
  }

  const query = req.query.q.toLowerCase();
  const results = posts.filter(
    ({ frontmatter: { title, excerpt, date } }) =>
      title.toLowerCase().indexOf(query) !== -1 ||
      excerpt.toLowerCase().indexOf(query) !== -1 ||
      date.toLowerCase().indexOf(query) !== -1
  );

  console.log(results);

  res.status(200).json(results);
}
