import NextLink from "next/link";

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import { Box } from "@mui/material";
import { SearchOutlined, ShoppingCart } from "@mui/icons-material";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link
            underline="always"
            component={"span"}
            display="flex"
            alignItems="center"
          >
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex="1"></Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/men" passHref legacyBehavior>
            <Link>
              <Button
                variant="contained"
                style={{
                  color: asPath === "/category/men" ? "blue" : "info",
                }}
              >
                Hombres
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/category/women" passHref legacyBehavior>
            <Link>
              <Button
                style={{
                  color: asPath === "/category/women" ? "blue" : "info",
                }}
              >
                Mujeres
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/category/kid" passHref legacyBehavior>
            <Link>
              <Button
                style={{
                  color: asPath === "/category/kid" ? "blue" : "info",
                }}
              >
                Niños
              </Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex="1"></Box>

        <IconButton>
          <SearchOutlined></SearchOutlined>
        </IconButton>

        <NextLink href="/cart" legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart></ShoppingCart>
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
