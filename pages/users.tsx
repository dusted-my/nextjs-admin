import { DashboardLayout } from "../layouts";
import * as React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Chip, CircularProgress, Rating, Typography } from "@mui/material";
import Image from "mui-image";
import { useQuery } from "react-query";
import { IUser } from "../interface";
import { getUsers } from "../queries";
import UserStatus from "../components/UserStatus";

export default function Users() {
  const { data, isLoading } = useQuery({
    queryKey: "users",
    queryFn: getUsers,
  });

  return (
    <DashboardLayout>
      <Box
        sx={{
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "#d1c4e9",
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
            getRowId={(row: IUser) => row.uid}
          />
        ) : (
          <Typography>No users</Typography>
        )}
      </Box>
    </DashboardLayout>
  );
}

const columns: GridColDef[] = [
  {
    field: "imageUrl",
    align: "center",
    headerName: "Profile Picture",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 150,
    renderCell: (params) => (
      <Image src={params.value} width={50} height={50} alt="Profile pic" />
    ),
  },
  {
    field: "fullName",
    headerName: "Full Name",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 250,
  },
  {
    field: "email",
    headerName: "Email Address",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 180,
  },
  {
    field: "isCleaner",
    align: "center",
    headerName: "User Type",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 150,
    renderCell: (params: GridRenderCellParams<IUser["isCleaner"]>) =>
      params.value === true ? (
        <Chip variant="outlined" label="Cleaner" color="success" />
      ) : (
        <Chip variant="outlined" label="Customer" color="info" />
      ),
  },
  {
    field: "address",
    headerName: "Address",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 350,
  },
  {
    field: "nric",
    align: "center",
    headerName: "NRIC",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 120,
  },
  {
    field: "nricFrontImageUrl",
    align: "center",
    headerName: "NRIC Front",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 150,
    renderCell: (params) => (
      <Image src={params.value} width={50} height={50} alt="NRIC Front" />
    ),
  },
  {
    field: "nricBackImageUrl",
    align: "center",
    headerName: "NRIC Back",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 150,
    renderCell: (params) => (
      <Image src={params.value} width={50} height={50} alt="NRIC Back" />
    ),
  },
  {
    field: "services",
    headerName: "Services",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 450,
    renderCell: (params: GridRenderCellParams<IUser["services"], IUser>) =>
      params.value?.map((service) => (
        <Chip key={`${params.row.uid}-${service}`} label={service} />
      )),
  },
  {
    field: "stars",
    align: "center",
    headerName: "Stars",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 150,
    renderCell: (params: GridRenderCellParams<IUser["stars"]>) => (
      <Rating name="read-only" value={params.value} readOnly />
    ),
  },
  {
    field: "status",
    align: "center",
    headerName: "Status",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 200,
    renderCell: (params: GridRenderCellParams<IUser["status"], IUser>) => (
      <UserStatus user={params.row} />
    ),
  },
  {
    field: "createdAt",
    headerName: "Created At",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
    renderCell: (params: GridRenderCellParams<IUser["createdAt"]>) =>
      params.value?.toDate().toISOString(),
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    width: 280,
    renderCell: (params: GridRenderCellParams<IUser["updatedAt"]>) =>
      params.value?.toDate().toISOString(),
  },
];
