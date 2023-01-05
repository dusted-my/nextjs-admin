import { DashboardLayout } from "../layouts";
import * as React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Box, Chip, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getReports } from "../queries/reports";
import { IReport } from "../interface";

export default function Reports() {
  const { data, isLoading } = useQuery({
    queryKey: "report",
    queryFn: getReports,
  });

  return (
    <DashboardLayout>
      <Box
        sx={{
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "#f0f4c3",
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
            getRowId={(row: IReport) => row.reportId}
          />
        ) : (
          <Typography>No reports</Typography>
        )}
      </Box>
    </DashboardLayout>
  );
}

const columns: GridColDef[] = [
  {
    field: "message",
    headerName: "Message",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 750,
  },
  {
    field: "issues",
    headerName: "Issues",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 250,
    renderCell: (params: GridRenderCellParams<IReport["issues"], IReport>) =>
      params.value?.map((issue) => (
        <Chip
          label={issue}
          key={`${params.row.cleanerDoc}-${issue}`}
          sx={{ textTransform: "capitalize" }}
        />
      )),
  },
  {
    field: "cleanerDoc",
    headerName: "Cleaner Doc",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 300,
  },
  {
    field: "userDoc",
    headerName: "User Doc",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 300,
  },
  {
    field: "status",
    headerName: "Status",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
    renderCell: (params: GridRenderCellParams<IReport["createdAt"]>) =>
      params.value?.toDate().toISOString(),
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
    renderCell: (params: GridRenderCellParams<IReport["updatedAt"]>) =>
      params.value?.toDate().toISOString(),
  },
];
