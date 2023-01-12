import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  useTheme,
} from "@mui/material";
import { ArcElement, Chart, ChartData, Legend, Tooltip } from "chart.js";
import * as React from "react";
import { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { useQuery } from "react-query";
import { DashboardLayout } from "../layouts";
import { getUsers } from "../queries";

Chart.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const theme = useTheme();

  const { data: users, isLoading } = useQuery({
    queryKey: "users",
    queryFn: getUsers,
  });

  const pieData: ChartData<"pie", number[], string> = useMemo(() => {
    return {
      labels: ["Cleaners", "Customers"],
      datasets: [
        {
          label: "# of users",
          data: [
            users?.filter((user) => user.isCleaner).length,
            users?.filter((user) => !user.isCleaner).length,
          ],
          backgroundColor: [
            theme.palette.info.light,
            theme.palette.success.light,
          ],
        },
      ],
    } as ChartData<"pie", number[], string>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  return (
    <DashboardLayout title="Dashboard">
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Pie Chart of Users" />
            <CardContent>
              {isLoading && !pieData ? (
                <CircularProgress />
              ) : (
                <Pie data={pieData} />
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="No. of Contracts" />
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
