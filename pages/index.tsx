import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  useTheme,
} from "@mui/material";
import {
  ArcElement,
  CategoryScale,
  Chart,
  ChartData,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import dayjs from "dayjs";
import * as React from "react";
import { useMemo } from "react";
import { Line, Pie } from "react-chartjs-2";
import { useQuery } from "react-query";
import { DashboardLayout } from "../layouts";
import { getUsers } from "../queries";
import { getContracts } from "../queries/contracts";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const theme = useTheme();

  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: "users",
    queryFn: getUsers,
    refetchOnWindowFocus: false,
  });
  const usersData: ChartData<"pie", number[], string> = useMemo(() => {
    return {
      responsive: true,
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

  const { data: contracts, isLoading: isLoadingContracts } = useQuery({
    queryKey: "contracts",
    queryFn: getContracts,
    refetchOnWindowFocus: false,
  });
  const labels = useMemo(
    () => [
      dayjs().subtract(4, "months").format("MMM"),
      dayjs().subtract(3, "months").format("MMM"),
      dayjs().subtract(2, "months").format("MMM"),
      dayjs().subtract(1, "months").format("MMM"),
      dayjs().format("MMM"),
    ],
    []
  );
  const contractsData = useMemo(() => {
    const contractCounts = [0, 0, 0, 0, 0];
    const completedCounts = [0, 0, 0, 0, 0];
    const now = dayjs();
    contracts?.forEach((contract) => {
      const diff = now.diff(dayjs(contract.createdAt.toDate()), "months");
      if (diff > 4) return;

      const i = 4 - diff;
      contractCounts[i]++;
      if (contract.status !== "client_done") return;
      completedCounts[i]++;
    });
    return {
      labels,
      datasets: [
        {
          data: contractCounts,
          label: "Contracts Created",
          borderColor: theme.palette.error.main,
          backgroundColor: theme.palette.error.light,
        },
        {
          data: completedCounts,
          label: "Contracts Completed",
          borderColor: theme.palette.success.main,
          backgroundColor: theme.palette.success.main,
        },
      ],
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contracts]);

  return (
    <DashboardLayout title="Dashboard">
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Pie Chart of Users" />
            <CardContent>
              {isLoadingUsers ? <CircularProgress /> : <Pie data={usersData} />}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="No. of Contracts" />
            <CardContent>
              {isLoadingContracts ? (
                <CircularProgress />
              ) : (
                <Line options={noOfCleanersOptions} data={contractsData} />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

const noOfCleanersOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};
