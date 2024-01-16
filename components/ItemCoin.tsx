import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 20,
    "&:last-child": {
      marginBottom: 0,
    },
    "& img": {
      width: 40,
      height: 40,
      marginRight: 10,
      [theme.breakpoints.down("xs")]: {
        // width: 30,
        // height: 30,
      },
    },
  },
}));

const ItemCoin = (props: any) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Box display="flex" alignItems="center">
        <img src={props.image} alt="" />
        <Box>
          <Typography className="text_sm">{props.name}</Typography>
          <Typography className="text_xs">{props.fullName}</Typography>
        </Box>
      </Box>
      <Typography className="text_lg font_semi">{props.percentage}%</Typography>
    </Box>
  );
};

export default ItemCoin;
