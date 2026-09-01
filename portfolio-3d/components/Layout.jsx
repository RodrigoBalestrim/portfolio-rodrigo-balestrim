import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";

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
          content="Portfólio de Rodrigo Balestrim, Desenvolvedor Front-end Júnior com projetos React, Next.js, TypeScript e React Native."
        />
        <meta
          name="keywords"
          content="desenvolvedor front-end júnior, react, next.js, typescript, react native, expo, supabase, html, css, javascript, portfolio, framer motion"
        />
        <meta name="author" content="Rodrigo Balestrim" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;

