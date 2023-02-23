import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const FullScreenLoading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
    >
      <CircularProgress thickness={2}></CircularProgress>
    </Box>
  );
};

export default FullScreenLoading;
