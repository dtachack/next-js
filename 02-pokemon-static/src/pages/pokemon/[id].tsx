import { Layout } from "@/components/layouts";
import { useRouter } from "next/router";
import React from "react";

const PokemonPage = () => {
  
  const router = useRouter();
  
  return (
    <Layout>
      <h1>Hola mundo</h1>
    </Layout>
  );
};
export default PokemonPage;
