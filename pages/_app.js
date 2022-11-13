import "../styles/globals.css";
import Header from "../components/Header";
import Head from "next/head";
import Search from "../components/Search";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {router.asPath === "/articles" ? <Search /> : null}
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
