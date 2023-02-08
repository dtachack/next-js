import React from "react";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
  Chip,
} from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { CartList, OrdenSummary } from "@/components/cart";
import NextLink from "next/link";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout
      title="Resumen de la orden 12345667"
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component="h1">
        Orden: ABC12345
      </Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined></CreditCardOffOutlined>}
      ></Chip> */}

      <Chip
        sx={{ my: 2 }}
        label="Orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined></CreditScoreOutlined>}
      ></Chip>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList></CartList>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }}></Divider>

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <NextLink href="/checkout/address" legacyBehavior>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <Typography>David Niño</Typography>
              <Typography>323 Algun lugar</Typography>
              <Typography>323 Algun lugar</Typography>
              <Typography>323 Algun lugar</Typography>
              <Typography>323 Algun lugar</Typography>

              <Divider sx={{ my: 1 }}></Divider>

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" legacyBehavior>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <OrdenSummary></OrdenSummary>

              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
                
                <Chip
                  sx={{ my: 2 }}
                  label="Orden ya fue pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined></CreditScoreOutlined>}
                ></Chip>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
