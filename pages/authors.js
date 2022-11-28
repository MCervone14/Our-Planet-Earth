import Image from "next/image";
import Head from "next/head";

const authors = () => {
  return (
    <>
      <Head>
        <title>Our Planet Earth | Authors</title>
      </Head>
      <h1 className="text-[steelblue] mt-[4rem] font-bold font-[Tangerine] text-center text-[6.25rem] tablet:text-[4rem] mobile:text-[3rem]">
        Meet The Team
      </h1>
      <div className="flex items-center justify-center m-auto w-[50%] mb-[1rem]  gap-[2rem] mobile:flex-col tablet:flex-col desktop:flex-row">
        <Image
          src="/images/TomPhoto.png"
          alt="Lead Author of Our Mother Earth Articles"
          width="250px"
          height="250px"
          objectFit="cover"
          objectPosition="top"
          layout="intrinsic"
          placeholder="blur"
          blurDataURL="/images/TomPhoto.png"
          style={{ borderRadius: "50%" }}
        />
        <p className="w-[60%] tablet:w-[100%] mobile:w-[100%]">
          Dr. Tom Cervone is a deacon at Holy Redeemer Catholic Church in
          Evansville, Indiana with 50 years of experience in ecology. He
          graduated from St. Bonaventure University, a Franciscan University.
        </p>
      </div>
      <div className="flex items-center justify-center m-auto w-[50%] mb-[1.875rem] gap-[3.125rem] mobile:flex-col tablet:flex-col desktop:flex-row">
        <Image
          src="/images/MaureenPhoto.JPG"
          alt="Author of Our Mother Earth Articles"
          width="250px"
          height="250px"
          objectFit="cover"
          objectPosition="center"
          layout="intrinsic"
          placeholder="blur"
          blurDataURL="/images/MaureenPhoto.JPG"
          style={{
            borderRadius: "50%",
          }}
        />
        <p className="w-[60%] tablet:w-[100%] mobile:w-[100%]">
          Sister Maureen Houlihan, D.C. is a support sister on the Seton Harvest
          Farm started by the Daughters of Charity in response to the
          Communities - Care of Mother Earth. This CSA (Community Supported
          Agriculture) Farm grows all natural produce for shareholders and the
          poor.
        </p>
      </div>
      <div className="flex items-center justify-center m-auto w-[50%] mb-[1.875rem] gap-[3.125rem] mobile:flex-col tablet:flex-col desktop:flex-row">
        <Image
          src="/images/NicolePhoto.png"
          alt="Author of Our Mother Earth Articles"
          width="250px"
          height="250px"
          objectFit="cover"
          objectPosition="50% 20%"
          layout="intrinsic"
          placeholder="blur"
          blurDataURL="/images/NicolePhoto.png"
          style={{
            borderRadius: "50%",
          }}
        />
        <p className="w-[60%] tablet:w-[100%] mobile:w-[100%]">
          Nicole Cervone-Gish, Ed. MS. is an award winning ELL (English Language
          Learner) teacher, who lives in Evansville, Indiana with her family.
        </p>
      </div>
    </>
  );
};

export default authors;
