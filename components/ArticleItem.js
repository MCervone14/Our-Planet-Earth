import { marked } from "marked";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const ArticleItem = ({
  frontmatter: { title, date, cover_image },
  content,
}) => {
  return (
    <div className="mx-10">
      <div>
        <h1 className="my-[.625rem] text-[2rem] mobile:text-[1rem] tablet:text-[1.5rem] desktop:text-[2rem] font-bold">
          {title}
        </h1>
        <div className="mb-[1.25rem] py-1">
          <span className="text-black/50">Published on</span>{" "}
          {dayjs(date).format("MMMM D, YYYY")}
        </div>
        <div className="text-center">
          <Image
            objectFit="cover"
            height="300"
            width="660"
            layout="intrinsic"
            src={cover_image}
            alt={title}
          />
        </div>
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
