import { Typography } from "@mui/material";
import React from "react";

import { ShopLayout } from "@/components/layouts";
import ProductList from "@/components/products/ProductList";
import FullScreenLoading from "@/components/ui/FullScreenLoading";
import { useProducts } from "@/hooks";

const MenPage = () => {
  const { products, isLoading } = useProducts("/products?gender=men");

  return (
    <ShopLayout
      title="Teslo-Shop - Hombres"
      pageDescription="Encuentra los mejores productos de Teslo para hombes"
    >
      <Typography variant="h1" component="h1">
        Hombres
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para hombres
      </Typography>
      {isLoading ? (
        <FullScreenLoading></FullScreenLoading>
      ) : (
        <ProductList products={products}></ProductList>
      )}
    </ShopLayout>
  );
};

export default MenPage;
