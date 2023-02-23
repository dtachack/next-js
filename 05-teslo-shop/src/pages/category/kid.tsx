import { Typography } from "@mui/material";
import React from "react";

import { ShopLayout } from "@/components/layouts";
import ProductList from "@/components/products/ProductList";
import FullScreenLoading from "@/components/ui/FullScreenLoading";
import { useProducts } from "@/hooks";

const KidPage = () => {
  const { products, isLoading } = useProducts("/products?gender=kid");

  return (
    <ShopLayout
      title="Teslo-Shop - Niños"
      pageDescription="Encuentra los mejores productos de Teslo para niños"
    >
      <Typography variant="h1" component="h1">
        Niños
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para niños
      </Typography>
      {isLoading ? (
        <FullScreenLoading></FullScreenLoading>
      ) : (
        <ProductList products={products}></ProductList>
      )}
    </ShopLayout>
  );
}

export default KidPage