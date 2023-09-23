import { Html, Head, Main, NextScript } from "next/document";

/* Documentation for _document.js file

  This page will override the default Next.js document. So, it will use the lang="en" attribute in the html tag.
 
*/

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
