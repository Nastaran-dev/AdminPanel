"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Image from "next/image";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Public from "@mui/icons-material/Public";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BarChartIcon from "@mui/icons-material/BarChart";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import CachedIcon from "@mui/icons-material/Cached";
import CameraFrontIcon from "@mui/icons-material/CameraFront";
import DnsIcon from "@mui/icons-material/Dns";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
const data = [
  { icon: <People />, label: "Dashboard" },
  { icon: <DnsIcon />, label: "Employees" },
  { icon: <PermMedia />, label: "Core Hr" },
  { icon: <Public />, label: "Finance" },
  { icon: <AutoStoriesIcon />, label: "Task" },
  { icon: <AvTimerIcon />, label: "Performance" },
  { icon: <PermMedia />, label: "Projects" },
  { icon: <BarChartIcon />, label: "Reports" },
  { icon: <BlurOnIcon />, label: "Manage Clients" },
  { icon: <Brightness5Icon />, label: "Blog" },
  { icon: <BusAlertIcon />, label: "Apps" },
  { icon: <CachedIcon />, label: "Profile" },
  { icon: <CameraFrontIcon />, label: "Account" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});
export default function CustomizedList() {
  const theme = useTheme();
  const Islaptop = useMediaQuery(theme.breakpoints.up("md"));
  const [showIcon, setShowicon] = useState(Islaptop);
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
  Islaptop && setShowicon(Islaptop);
  }, [Islaptop]);

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "#fff" },
            background: { paper: "#15181d" },
          },
        })}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "999",
            padding: { xs:"10px", md: "60px 220px" },
          }}
        >
          <DoubleArrowIcon
            sx={{ color: "gray" }}
            onClick={() => {
              setShowicon(!showIcon);
            }}
          />
        </Box>
        {showIcon && (
          <Paper elevation={0}  sx={{ maxWidth: 256 }}>
            <FireNav component="nav" disablePadding>
              <ListItemButton component="a" href="#customized-list">
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, py: 2 }}
                >
                  <Image
                    src="/images/logo.svg"
                    width={50}
                    height={50}
                    alt="logo"
                  ></Image>
                  <ListItemText
                    primary="HexaBox"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "h5",
                    }}
                  />
                </Box>
              </ListItemButton>
              <Divider />
              <ListItem component="div" disablePadding>
                <ListItemButton
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      height: "100%",
                    }}
                  >
                    <Home color="primary" />
                    <ListItemText primary="Project overview" />
                  </ListItemIcon>
                </ListItemButton>
                <Tooltip title="Project Settings">
                  <IconButton
                    size="large"
                    
                  >
                    <Settings />
                    <ArrowRight
                      sx={{ position: "absolute", right: 4, opacity: 0 }}
                    />
                  </IconButton>
                </Tooltip>
              </ListItem>
              <Divider />
              <Box>
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpen(!open)}
                >
                  <ListItemText
                    primary="YOUR COMPANY"
                    primaryTypographyProps={{
                      fontSize: 15,
                      lineHeight: "20px",
                      mb: "2px",
                    }}
                    secondary="Authentication, Firestore Database"
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 16,
                      lineHeight: "16px",
                      color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                    }}
                    sx={{ my: 0 }}
                  />
                </ListItemButton>
                {open &&
                  data.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{ py: 0, minHeight: 55, color: "white" }}
                    >
                      <ListItemIcon sx={{ color: "#969fb5" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 15,
                        }}
                        
                      />
                    </ListItemButton>
                  ))}
                <Box
                  sx={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "5px 10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      backgroundColor: "#08a36b",
                      color: "white",
                    }}
                    endIcon={<ArrowForwardIcon />}
                    disableElevation
                  >
                    Disable elevation
                  </Button>
                </Box>
              </Box>
            </FireNav>
          </Paper>
        )}
      </ThemeProvider>
    </Box>
  );
}
