import { DashboardLayout } from "../layouts";
import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Image from "mui-image";

const rows: GridRowsProp = [
  {
    id: 1,
    col1: "The app is slowwww..",
    col2: "https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg",
    col3: "The moment I open the app after closing at the background, it takes more than 5 seconds to load!!!",
    col4: "/users/..",
    col5: "Active",
    col6: "15 March 2022 at 10:35:55 UTC+8",
    col7: "15 March 2022 at 10:35:55 UTC+8",
  },
  {
    id: 2,
    col1: "Cleaner occasionally cancel.",
    col2: "https://thumb.ac-illust.com/1b/1b1466b60af617ceaf53924063ae6aaf_t.jpeg",
    col3: "The cleaner suddenly cancel the service without any reason, so I need to find another cleaner again!!",
    col4: "/users/..",
    col5: "Active",
    col6: "4 December 2022 at 12:04:25 UTC+8",
    col7: "4 December 2022 at 12:04:25 UTC+8",
  },
];

const columns: GridColDef[] = [
  {
    field: "col1",
    headerName: "title",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 250,
  },
  {
    field: "col2",
    headerName: "images",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 150,
    renderCell: (params) => (
      <Image src={params.value} width={50} height={50} alt="img" />
    ),
  },
  {
    field: "col3",
    headerName: "message",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 750,
  },
  {
    field: "col4",
    headerName: "userDoc",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 150,
  },
  {
    field: "col5",
    headerName: "status",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 100,
  },
  {
    field: "col6",
    headerName: "createdAt",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
  },
  {
    field: "col7",
    headerName: "updatedAt",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
  },
];

export default function Reports() {
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
        <DataGrid rows={rows} columns={columns} autoHeight={true} />
      </Box>
    </DashboardLayout>
  );
}
