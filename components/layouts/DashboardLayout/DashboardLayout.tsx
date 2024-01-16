import React from "react";
import dynamic from "next/dynamic";
import { Box, Container, makeStyles, Theme } from "@material-ui/core";

const SideDrawer = dynamic(import("../SideDrawer"));

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    "& .wrapper": {
      width: "100%",
      height: "100%",
    },
  },
  content: {
    flexGrow: 1,
    padding: "50px 0 30px",
    minHeight: "calc(100vh - 123px)",
    marginTop: 80,
    overflow: "hidden",
    "& .paper": {
      // borderRadius: "10px",
      // boxShadow: "0 3px 6px rgba(0,0,0,0.18)",
      // padding: "2rem 0",
      // backgroundColor: "#fff",
      // margin: "0 2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 70,
      padding: "30px 0 30px",
    },
  },
}));

const DashboardLayout = (props: any) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SideDrawer />
      <Box className="wrapper">
        <main className={classes.content}>
          <Container maxWidth="lg">{children}</Container>
        </main>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
