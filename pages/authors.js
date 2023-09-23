import Image from "next/legacy/image";
import Head from "next/head";

/* Documentation for authors.js file

  Page for displaying the authors of the Our Planet Earth.
  mapping over array and displays the author's image, alt, name, and bio.

  add more authors to the authors array if needed.
*/

const authors = [
  {
    id: 1,
    name: "Dr. Tom Cervone",
    alt: "Lead Author of Our Mother Earth Articles",
    image: "/images/TomPhoto.png",
    bio: `Dr. Tom Cervone is a deacon at Holy Redeemer Catholic Church in
    Evansville, Indiana with 50 years of experience in ecology. He
    graduated from St. Bonaventure University, a Franciscan University.`,
  },
  {
    id: 2,
    name: "Sister Maureen Houlihan, D.C.",
    alt: "Author of Our Mother Earth Articles",
    image: "/images/MaureenPhoto.JPG",
    bio: `Sister Maureen Houlihan, D.C. is a support sister on the Seton Harvest
    Farm started by the Daughters of Charity in response to the
    Communities - Care of Mother Earth. This CSA (Community Supported
    Agriculture) Farm grows all natural produce for shareholders and the
    poor.`,
  },
  {
    id: 3,
    name: "Nicole Cervone-Gish, Ed. MS.",
    alt: "Author of Our Mother Earth Articles",
    image: "/images/NicolePhoto.png",
    bio: `Nicole Cervone-Gish, Ed. MS. is an award winning ELL (English Language
    Learner) teacher, who lives in Evansville, Indiana with her family.`,
  },
  {
    id: 4,
    name: "Michael Cervone",
    alt: "Author of Our Mother Earth Website",
    image: "/images/MichaelCervone.jpg",
    bio: `Michael Cervone is a web developer and designer who lives in
    Evansville, Indiana.`,
  },
];

const AuthorsPage = () => {
  return (
    <>
      <Head>
        <title>Authors | Our Planet Earth</title>
      </Head>
      <h1 className="text-[steelblue] mt-16 font-bold font-[Tangerine] text-center text-8xl tablet:text-7xl mobile:text-5xl">
        Meet The Team
      </h1>
      {authors.map((author) => (
        <div
          key={author.id}
          className="flex items-center justify-center m-auto w-1/2 mb-4 mt-5 gap-8 mobile:flex-col tablet:flex-col desktop:flex-row"
        >
          <Image
            src={author.image}
            alt={author.alt}
            width="250px"
            height="250px"
            objectFit="cover"
            objectPosition="top"
            layout="intrinsic"
            placeholder="blur"
            blurDataURL={author.image}
            style={{ borderRadius: "50%" }}
          />
          <p className="w-[60%] tablet:w-full mobile:w-full">{author.bio}</p>
        </div>
      ))}
    </>
  );
};

export default AuthorsPage;
