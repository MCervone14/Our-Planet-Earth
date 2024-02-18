import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Image from "next/legacy/image";
import dayjs from "dayjs";
import Link from "next/link";
import { LuPrinter } from "react-icons/lu";

/* Documentation for [slug].js file

  Page for displaying the article content.

  The page contains the article section with all the article's content.

  We get the slug, frontmatter, and content from the getStaticProps function.

 
*/

const PostPage = ({
  slug,
  frontmatter: { title, date, cover_image },
  content,
}) => {
  const handlePrint = () => {
    window.onbeforeprint = () => {
      document.getElementById("link-1").classList.add("hidden");
      document.getElementById("link-2").classList.add("hidden");
      document.querySelector("iframe").style.display = "none";
      document.querySelector("header").classList.add("hidden");
    };
    window.print();
    window.onafterprint = () => {
      document.getElementById("link-1").classList.remove("hidden");
      document.getElementById("link-2").classList.remove("hidden");
      document.querySelector("iframe").style.display = "block";
      document.querySelector("header").classList.remove("hidden");
    };
  };
  return (
    <article className="post-container w-full">
      <Head>
        <title>{slug} | OurPlanetEarth.Eco</title>
      </Head>
      <Link
        href={`/articles`}
        id="link-1"
        className="inline-block bg-charcoal text-white border-0 py-2 px-4 ml-3 rounded cursor-pointer text-lg font-bold hover:text-yellow-300 mb-4 mt-8"
      >
        Go Back
      </Link>
      <div className="py-4 px-7">
        <h1 className="my-2.5 text-4xl mobile:text-lg tablet:text-2xl desktop:text-4xl font-bold">
          {title}
        </h1>
        <div className="mb-5 py-1 flex justify-between">
          Published on {dayjs(date).format("MMMM D, YYYY")}
          <button
            className="mr-2 cursor-pointer hover:text-blue-600"
            onClick={handlePrint}
          >
            <div className="flex gap-1 items-center">
              <LuPrinter className="w-5 h-5" /> Print
            </div>
          </button>
        </div>
        <div className="tablet:w-[50rem] desktop:w-[60rem] text-center">
          <Image
            objectFit="cover"
            height={600}
            width={960}
            layout="intrinsic"
            src={cover_image}
            alt={title}
            placeholder="blur"
            blurDataURL={cover_image}
          />
        </div>
        <div className="post-body tablet:w-[48rem] desktop:w-[60rem]">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          <Link
            href={`/articles`}
            id="link-2"
            className="inline-block bg-charcoal float-right text-white border-0 py-2 px-4 rounded cursor-pointer text-lg font-bold hover:text-yellow-300 mb-5"
          >
            Go Back
          </Link>
        </div>
      </div>
    </article>
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
