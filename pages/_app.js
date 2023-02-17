import "../styles/globals.css";
import Head from "next/head";

import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" key="robotsAllowed" />
        <meta lang="en" />
        <meta
          name="description"
          content="We promote clean air, clean water, and healthy soils; a greener world; sustainable practices; renewable energy;
          and conservation of worldwide ecosystems."
          key="desc"
        />
        <meta name="fo-verify" content="05d4924b-7296-4631-9c25-f159d024e4c4" />
        <link
          rel="canonical"
          href="https://ourplanetearth.eco"
          key="canonical"
        />
        <link rel="icon" type="image/x-icon" href="/images/earth.png" />
      </Head>
      <main className="container">
        <Component {...pageProps} />
        <Analytics />
      </main>
    </Layout>
  );
}

export default MyApp;
