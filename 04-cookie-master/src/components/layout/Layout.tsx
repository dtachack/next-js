import React, { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children?: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head></Head>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
