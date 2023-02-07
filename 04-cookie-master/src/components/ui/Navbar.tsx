import { MoneyOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MoneyOutlined></MoneyOutlined>
        </IconButton>

        <Link href="/">
          <Typography variant="h6" color="white">
            CookieMaster
          </Typography>
        </Link>

        <div style={{ flex: 1 }}></div>

        <Link href="/theme-changer">
          <Typography variant="h6" color="white">
            Cambiar Tema
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
