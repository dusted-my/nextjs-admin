import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { FormEventHandler } from "react";
import Router, { useRouter } from "next/router";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === "authenticated") router.replace("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const [userInfo, setUserInfo] = React.useState({ email: "", password: "" });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    // validate your userinfo
    event.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (res?.status !== 200) return;
    Router.push("/");
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "70vh", mt: "15vh", justifyContent: "center" }}
    >
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Image src="/clean.png" width="580" height="580" alt="Dusted Logo" />
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            backgroundPosition: "center",
          }}
        >
          {/* NOTE: Use Image from 'next/image' to create images, don't forget to add "alt" */}
          <Image src="/logo.png" width="200" height="64" alt="Dusted Logo" />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                value={userInfo.email}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
                margin="normal"
                required
                fullWidth
                label="Email Address"
                type="email"
                placeholder="xxxxx@dusted.my"
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Lock sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <FormControl
                margin="normal"
                required
                fullWidth
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={userInfo.password}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, password: target.value })
                  }
                  label="Password"
                  placeholder="****************"
                />
              </FormControl>
            </Box>

            {/* NOTE: Use Link from 'next/link' instead of '@mui/material-ui' */}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
