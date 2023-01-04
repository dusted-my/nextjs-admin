import { Typography } from "@mui/material";
import * as React from "react";
import { DashboardLayout } from "../layouts";
import ProtectedLayout from "../layouts/ProtectedLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Typography variant="h1" fontSize="2rem" fontWeight="bold">
        Dashboard
      </Typography>
    </DashboardLayout>
  );
}
