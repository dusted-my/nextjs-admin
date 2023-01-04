import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}
const ProtectedLayout = (props: Props) => {
  const { children } = props;

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  switch (status) {
    case "authenticated":
      return <>{children}</>;

    default:
      return (
        <Box
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      );
  }
};

export default ProtectedLayout;
