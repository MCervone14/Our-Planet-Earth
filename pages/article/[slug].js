import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const PostPage = ({
  slug,
  frontmatter: { title, date, cover_image },
  content,
}) => {
  const router = useRouter();
  return (
    <div className="post-container">
      <Head>
        <title>Our Mother Earth | {slug}</title>
      </Head>
      <span onClick={() => router.back()}>
        <a className="btn btn-back">Go Back</a>
      </span>
      <div className="card-page">
        <h1 className="slug-post-title">{title}</h1>
        <div className="post-date">
          <span className="span-published">Published on</span>{" "}
          {dayjs(date).format("MMMM D, YYYY")}
        </div>
        <Image height={600} width={1050} src={cover_image} alt={title} />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <span onClick={() => router.back()}>
        <a style={{ float: "right" }} className="btn btn-back">
          Go Back
        </a>
      </span>
    </div>
  );
};

export async function getStaticPaths() {
  const files = await fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = await fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
}

export default PostPage;
