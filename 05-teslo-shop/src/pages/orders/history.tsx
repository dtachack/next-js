import { ShopLayout } from "@/components/layouts";
import { Description } from "@mui/icons-material";
import { Chip, Grid, Typography, Link } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React from "react";
import NextLink from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Nombre Completo", width: 300 },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestra información si está pagada la orden o no",
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined"></Chip>
      ) : (
        <Chip color="error" label="No Pagada" variant="outlined"></Chip>
      );
    },
  },
  {
    field: "orden",
    headerName: "Ver orden",
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams<any>) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
          <Link underline="always">Ver orden</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, paid: true, fullname: "Fernando Niño 1" },
  { id: 2, paid: false, fullname: "Fernando Niño 2" },
  { id: 3, paid: true, fullname: "Fernando Niño 3" },
  { id: 4, paid: true, fullname: "Fernando Niño 4" },
  { id: 5, paid: false, fullname: "Fernando Niño 5" },
  { id: 6, paid: true, fullname: "Fernando Niño 6" },
  { id: 7, paid: true, fullname: "Fernando Niño 7" },
  { id: 8, paid: false, fullname: "Fernando Niño 8" },
  { id: 9, paid: true, fullname: "Fernando Niño 9" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      pageDescription="Historial de ordenes del cliente"
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          ></DataGrid>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
