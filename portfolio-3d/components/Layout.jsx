import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import PageWheelNavigation from "../components/PageWheelNavigation";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ children }) => {
  return (
    <main
      className="page bg-site text-white bg-cover bg-no-repeat font-sora relative"
    >
      {/* metadata */}
      <Head>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Portfólio Rodrigo Balestrim</title>
        <meta
          name="description"
          content="Portfólio de Rodrigo Balestrim, Desenvolvedor Web Júnior."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Rodrigo Balestrim" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />
      <PageWheelNavigation />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
