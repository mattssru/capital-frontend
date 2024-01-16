import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .imgCard": {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "block",
      paddingTop: "50%",
      "& img": {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .link:hover": {
      color: theme.palette.primary.main,
    },
    "& .nameNews": {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 7,
      color: "#fff",
      height: 25,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 80,
      padding: "0 7px",
    },
  },
}));

const CardNews = (props: any) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <Link href={props.href} className="imgCard">
            <img src={props.image} alt="" />
          </Link>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Link
            href={props.href}
            target="_blank"
            className="link d_inlineblock mb_1 text_lg"
          >
            {props.title}
          </Link>
          <Typography className="des text_sm mb_1" style={{ color: "#777" }}>
            {props.description}
          </Typography>
          <Box className="d_flex align_center">
            <Box className="nameNews text_xs mr_1">{props.nameNews}</Box>
            <Box className="d_flex">
              <Typography className="text_xs" style={{ paddingRight: 5 }}>
                ข่าว
              </Typography>
              |
              <Typography className="text_xs" style={{ paddingLeft: 5 }}>
                28/4/2556
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardNews;
