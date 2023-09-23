import React from "react";
import Head from "next/head";
import Link from "next/link";

/* Documentation for 404.js file

  Page for displaying the 404 page not found.
 
*/

const PageNotFound = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <Head>
        <title>404 Page | Our Planet Earth</title>
      </Head>
      <h1 className="text-5xl tablet:text-7xl laptop:text-8xl desktop:text-9xl font-[Tangerine] text-[steelblue]">
        Our Planet Earth
      </h1>
      <p className="text-2xl tablet:text-3xl laptop:text-3xl desktop:text-4xl text-black/40">
        Sorry, this page does not exist.
      </p>
      <Link
        href="/"
        passHref
        className="flex justify-center text-center w-48 m-auto bg-charcoal hover:text-yellow-300 text-white border-0 p-5 rounded cursor-pointer text-md font-bold my-10"
      >
        Return to Home?
      </Link>
    </div>
  );
};

export default PageNotFound;
