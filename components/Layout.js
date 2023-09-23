import React from "react";
import Header from "./Header";

/* Documentation for Layout.js file

  Layout component for the website.

  It wraps the _app.js file. This just puts the header on every page.
 
*/

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
