import { DashboardLayout } from "../layouts";
import * as React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Box, Chip, CircularProgress, Typography } from "@mui/material";
import { getContracts } from "../queries/contracts";
import { useQuery } from "react-query";
import { IContract } from "../interface";

export default function Contracts() {
  const { data, isLoading } = useQuery({
    queryKey: "contracts",
    queryFn: getContracts,
  });

  return (
    <DashboardLayout title="Contracts">
      <Box
        sx={{
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "#f8bbd0",
          },
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : data ? (
          <DataGrid
            rows={data}
            columns={columns}
            autoHeight={true}
            getRowId={(row: IContract) => row.contractId}
          />
        ) : (
          <Typography>No contracts</Typography>
        )}
      </Box>
    </DashboardLayout>
  );
}

const columns: GridColDef[] = [
  {
    field: "address",
    headerName: "Address",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 350,
  },
  {
    field: "notes",
    headerName: "Notes",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 400,
  },
  {
    field: "paymentStatus",
    headerName: "Payment Status",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 150,
  },
  {
    field: "total",
    headerName: "Total Price (RM)",
    align: "right",
    headerClassName: "super-app-theme--header",
    width: 200,
    renderCell: (params: GridRenderCellParams<IContract["total"]>) =>
      `RM ${params.value?.toFixed(2)}`,
  },
  {
    field: "serviceRequired",
    headerName: "Service",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 100,
    renderCell: (
      params: GridRenderCellParams<IContract["serviceRequired"]>
    ) => <Chip label={params.value} sx={{ textTransform: "capitalize" }} />,
  },
  {
    field: "cleanerDoc",
    headerName: "Cleaner Doc",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 300,
  },
  {
    field: "clientDoc",
    headerName: "Client Doc",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 300,
  },
  {
    field: "status",
    headerName: "status",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 150,
  },
  {
    field: "startAt",
    headerName: "Starts At",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
    renderCell: (params: GridRenderCellParams<IContract["startAt"]>) =>
      params.value?.toDate().toISOString(),
  },
  {
    field: "endAt",
    headerName: "Ends At",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
    renderCell: (params: GridRenderCellParams<IContract["endAt"]>) =>
      params.value?.toDate().toISOString(),
  },
  {
    field: "createdAt",
    headerName: "Created At",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
    renderCell: (params: GridRenderCellParams<IContract["createdAt"]>) =>
      params.value?.toDate().toISOString(),
  },
  {
    field: "updatedAt",
    headerName: "Created At",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
    renderCell: (params: GridRenderCellParams<IContract["updatedAt"]>) =>
      params.value?.toDate().toISOString(),
  },
];
