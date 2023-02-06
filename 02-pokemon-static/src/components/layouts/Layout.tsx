import { FC } from "react";

import Head from "next/head";

import { Navbar } from "@/components/ui";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="David Niño"></meta>
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        ></meta>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>
      </Head>

      <Navbar></Navbar>

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
