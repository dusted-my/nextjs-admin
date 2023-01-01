import { Typography } from "@mui/material";
import * as React from "react";
import { DashboardLayout } from "../layouts";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

/**
 * NOTE: Everytime you create a new page, import DashboardLayout and wrap and everything in
 * the DashboardLayout like the example below
 */
export default function Dashboard() {
  const { status, data } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [status]);

  if (status === "authenticated") 
  return (
    <DashboardLayout>
      <div>
        This page is Protected for special people. like{"\n"}
        {JSON.stringify(data.user, null, 2)}
      </div>
      <Typography variant="h1" fontSize="2rem" fontWeight="bold">
        Dashboard
      </Typography>
      
    </DashboardLayout>

  );
  return <div>You should probably to login to view this page.</div>;
}