import "../styles/globals.css";
import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" key="robotsAllowed" />
        <meta
          name="description"
          content="Promote clean air, clean water, and healthy soils for a greener and healthier world; learning and growing in our
commitment to sustainability of our natural resources; renewable forms of energy to reduce greenhouse gases;
and ecological conversion for the betterment of all ecosystems throughout the world."
          key="desc"
        />
        <link
          rel="canonical"
          href="https://ourplanetearth.eco"
          key="canonical"
        />
      </Head>
      <main className="container">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
