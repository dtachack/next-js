import { NextPage } from "next";

import { ShopLayout } from "@/components/layouts/ShopLayout";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ProductList from "@/components/products/ProductList";
import { useProducts } from "@/hooks";
import FullScreenLoading from "@/components/ui/FullScreenLoading";

const HomePage: NextPage = () => {
  const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout
      title="Teslo-Shop - Home"
      pageDescription="Encuentra los mejores productos de Teslo aqui"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {isLoading ? (
        <FullScreenLoading></FullScreenLoading>
      ) : (
        <ProductList products={products}></ProductList>
      )}
    </ShopLayout>
  );
};

export default HomePage;
