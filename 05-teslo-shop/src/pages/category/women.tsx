import { Typography } from "@mui/material";
import React from "react";

import { ShopLayout } from "@/components/layouts";
import ProductList from "@/components/products/ProductList";
import FullScreenLoading from "@/components/ui/FullScreenLoading";
import { useProducts } from "@/hooks";

const WomenPage = () => {
  const { products, isLoading } = useProducts("/products?gender=women");

  return (
    <ShopLayout
      title="Teslo-Shop - Mujeres"
      pageDescription="Encuentra los mejores productos de Teslo para mujeres"
    >
      <Typography variant="h1" component="h1">
        Mujeres
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para mujeres
      </Typography>
      {isLoading ? (
        <FullScreenLoading></FullScreenLoading>
      ) : (
        <ProductList products={products}></ProductList>
      )}
    </ShopLayout>
  );
}

export default WomenPage