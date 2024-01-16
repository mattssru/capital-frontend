import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: 60,
    borderRadius: 8,
    padding: "0 5rem",
    backgroundColor: "#f1f2f4",
    justifyContent: "space-between",
    marginBottom: "15px",
    [theme.breakpoints.down("xs")]: {
      padding: "0 1rem",
    },
  },
}));

const BoxVerify = (props: any) => {
  const classes = useStyles();
  return <Box className={classes.root}>{props.children}</Box>;
};

export default BoxVerify;
