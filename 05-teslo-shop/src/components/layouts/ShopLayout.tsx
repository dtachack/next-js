import { FC } from "react";

import Head from "next/head";
import { Navbar, SideMenu } from "@/components/ui";

interface Props {
  children?: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription}></meta>
        <meta name="og:title" content={title}></meta>
        <meta name="og:description" content={pageDescription}></meta>

        {imageFullUrl && <meta name="og:image" content={imageFullUrl}></meta>}
      </Head>

      <nav>
        <Navbar></Navbar>
      </nav>

      <SideMenu></SideMenu>
      
      <main
        style={{ margin: "80px auto", maxWidth: "1440px", padding: "0px 30px" }}
      >
        {children}
      </main>

      <footer></footer>
    </>
  );
};
