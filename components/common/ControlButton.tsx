import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    height: "100%",
    position: "relative",
    zIndex: 2,
    justifyContent: (props: any) => props.justifyContent || "center",
    margin: (props: any) => props.marginresponsive || "0 -15px",
    alignItems: (props: any) => props.alignitems,
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
    "& button , a": {
      margin: (props: any) => props.margin || "0 15px",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
      },
    },
  },
}));

const ControlButton = (props: any) => {
  const { root } = useStyles(props);
  const { children } = props;
  return <Box className={`${root}`}>{children}</Box>;
};

export default ControlButton;
