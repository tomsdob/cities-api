import Head from "next/head";
import { useRouter } from "next/router";

export default function IndexHead() {
  const router = useRouter();
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
      />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      {/* Main meta tags */}
      <title>Cities API</title>
      <meta name="title" content="Cities API"></meta>
      <meta name="description" content="API built to fetch country cities" />
      {/*  OG/FB meta tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={router.pathname} />
      <meta property="og:title" content="Cities API" />
      <meta
        property="og:description"
        content="API built to fetch country cities"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={router.pathname} />
      <meta property="twitter:title" content="Cities API" />
      <meta
        property="twitter:description"
        content="API built to fetch country cities"
      />
      {/* Image */}
      <meta name="image" content="/meta_image.png" />
      <meta property="og:image" content="/meta_image.png" />
      <meta property="twitter:image" content="/meta_image.png" />
      {/* Canonical */}
      <link rel="canonical" href={router.pathname} />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
