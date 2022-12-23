import {
  Assignment,
  BarChart,
  ChevronLeft,
  Dashboard,
  Logout,
  Menu,
  People,
} from "@mui/icons-material";
import {
  AppBar,
  AppBarProps,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function DashboardLayout(props: Props) {
  const { children } = props;

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CustomAppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            px: "24px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Admin Dashboard
          </Typography>
          <Link href="/login">
          <IconButton color="inherit">
              <Logout />
          </IconButton>
          Logout
          </Link>
        </Toolbar>
      </CustomAppBar>
      <CustomDrawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft />
          </IconButton>
        </Toolbar>
        <Divider />
        <Box sx={{ margin: "1rem auto" }}>
          <Image src="/logo.png" width="100" height="32" alt="Dusted Logo" />
        </Box>
        <List component="nav">
          {links.map((link) => (
            <Link href={`/${link.href}`} key={link.href}>
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </CustomDrawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          padding: "2rem",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

const links = [
  {
    label: "Dashboard",
    href: " ",
    icon: <Dashboard />,
  },
  {
    label: "Users",
    href: "users",
    icon: <People />,
  },
  {
    label: "Contracts",
    href: "contracts",
    icon: <Assignment />,
  },
  {
    label: "Reports",
    href: "reports",
    icon: <BarChart />,
  },
];

const drawerWidth: number = 240;

interface CustomAppBarProps extends AppBarProps {
  open?: boolean;
}
const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<CustomAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up("sm")]: {
        width: 0,
      },
    }),
  },
}));
