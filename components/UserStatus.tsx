import { Close, Done } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import { IUser } from "../interface";
import { updateUserStatus } from "../mutations";

interface Props {
  user: IUser;
}
const UserStatus = (props: Props) => {
  const { user } = props;
  const router = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateUserStatus,
    onSuccess: () => router.reload(),
  });

  const handleApprove = () => mutate({ uid: user.uid, approved: true });
  const handleDecline = () => mutate({ uid: user.uid, approved: false });

  return user.status === "active" ? (
    <Box>
      <Chip label="Active" />
    </Box>
  ) : isLoading ? (
    <CircularProgress size={24} />
  ) : (
    <Stack direction="row" spacing={1} alignItems="center">
      <Chip label="Pending" />
      <Tooltip title="Decline">
        <IconButton color="error" onClick={handleDecline}>
          <Close />
        </IconButton>
      </Tooltip>
      <Tooltip title="Approve">
        <IconButton color="success" onClick={handleApprove}>
          <Done />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default UserStatus;
