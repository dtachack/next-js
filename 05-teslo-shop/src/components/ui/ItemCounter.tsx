import { AddCircleOutline, RemoveCircle } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

export const ItemCounter: FC<Props> = () => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton>
        <RemoveCircle></RemoveCircle>
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}> 1 </Typography>
      <IconButton>
        <AddCircleOutline></AddCircleOutline>
      </IconButton>
    </Box>
  );
};
