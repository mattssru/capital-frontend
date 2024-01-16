import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from ".";

const useStyles = makeStyles(() => ({
  root: {
    padding: "1.25rem",
    height: 170,
    borderRadius: 12,
    display: "block",
    background: "linear-gradient(to right, #183b7e, #0fa49c)",
  },
}));

const CardBlockChain = (props: any) => {
  const classes = useStyles();
  return (
    <Link
      href={{
        pathname: "/dashboard/investment/[details]",
        query: { details: props.href },
      }}
      className={classes.root}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        className="h_100"
      >
        <Box className="">
          <Typography className="text_md color_white">{props.name}</Typography>
          <Typography className="text_md color_white">
            {props.roi > 0 ? `+${props.roi}` : props.roi}%
          </Typography>
        </Box>
        <Box className="">
          <Typography className="text_xs color_white" style={{ maxWidth: 320 }}>
            {props.description}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default CardBlockChain;
