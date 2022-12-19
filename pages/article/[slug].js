import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const PostPage = ({
  slug,
  frontmatter: { title, date, cover_image },
  content,
}) => {
  const router = useRouter();
  return (
    <div className="post-container w-[100%]">
      <Head>
        <title>Our Planet Earth | {slug}</title>
      </Head>
      <span onClick={() => router.back()}>
        <a className="inline-block bg-[#B0C4DE] text-[#2a4cac] border-0 py-[.5rem] px-[1rem] ml-3 rounded cursor-pointer text-[1rem] font-bold hover:text-white mb-[1rem] mt-[2rem]">
          Go Back
        </a>
      </span>
      <div className="py-[.9375rem] px-[1.875rem]">
        <h1 className="my-[.625rem] text-[2rem] mobile:text-[1rem] tablet:text-[1.5rem] desktop:text-[2rem] font-bold">
          {title}
        </h1>
        <div className="mb-[1.25rem] py-1">
          <span className="text-black/50">Published on</span>{" "}
          {dayjs(date).format("MMMM D, YYYY")}
        </div>
        <div className="tablet:w-[50rem] desktop:w-[60rem] text-center">
          <Image
            objectFit="cover"
            height="600"
            width="960"
            layout="intrinsic"
            src={cover_image}
            alt={title}
          />
        </div>
        <div className="post-body tablet:w-[48rem] desktop:w-[60rem]">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          <span onClick={() => router.back()}>
            <a
              style={{ float: "right" }}
              className="inline-block bg-[#B0C4DE] text-[#2a4cac] border-0 py-[.5rem] px-[1rem] rounded cursor-pointer text-[1rem] font-bold hover:text-white mb-[1.25rem]"
            >
              Go Back
            </a>
          </span>
        </div>
      </div>
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
