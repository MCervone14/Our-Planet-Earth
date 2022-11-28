import React from "react";
import Link from "next/link";
import Head from "next/head";

const PageNotFound = () => {
  return (
    <div>
      <Head>
        <title>Our Planet Earth | 404 Error</title>
      </Head>
      <h1 className="mt-[15rem] text-[10rem] text-center font-[Tangerine] text-[steelblue]">
        Our Planet Earth
      </h1>
      <h2 className="text-center text-[2rem] text-black/40">
        Sorry, your page was not found
      </h2>
      <Link href="/" passHref>
        <h2 className="max-w-fit m-auto bg-[steelblue] text-white border-0 px-[1.5625rem] py-[1.25rem] rounded cursor-pointer text-[1.25rem] font-bold hover:text-[gold] my-[3.125rem]">
          Return to Homepage?
        </h2>
      </Link>
    </div>
  );
};

export default PageNotFound;
