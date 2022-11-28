import React from "react";
import { useRouter } from "next/router";
import Search from "./Search";
import Header from "./Header";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      {router.asPath === "/articles" ? <Search /> : null}
      {children}
    </>
  );
};

export default Layout;
