import { IProduct } from "@/interfaces";
import React, { FC } from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ProductCard from "./ProductCard";

interface Props {
  children?: React.ReactNode;
  products: IProduct[];
}

const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products?.map((product, i) => (
        <ProductCard key={i} product={product}></ProductCard>
      ))}
    </Grid>
  );
};

export default ProductList;
