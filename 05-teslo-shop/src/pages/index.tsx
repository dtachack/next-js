import { NextPage } from "next";

import { ShopLayout } from "@/components/layouts/ShopLayout";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { initialData } from "database/products";
import ProductList from "@/components/products/ProductList";

const Home: NextPage = () => {
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

      <ProductList products={initialData.products as any}>

      </ProductList>
    </ShopLayout>
  );
};

export default Home;
