import { Typography } from "@mui/material";
import * as React from "react";
import { DashboardLayout } from "../layouts";

/**
 * NOTE: Everytime you create a new page, import DashboardLayout and wrap and everything in
 * the DashboardLayout like the example below
 */
export default function Dashboard() {
  return (
    <DashboardLayout>
      <Typography variant="h1" fontSize="2rem" fontWeight="bold">
        Dashboard
      </Typography>
    </DashboardLayout>
  );
}
