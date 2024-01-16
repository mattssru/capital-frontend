import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 .5rem 1.5rem rgba(0,0,0,.08)",
    minHeight: 60,
    display: "flex",
    alignItems: "center",
    "& .logo": {
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      color: theme.palette.secondary.main,
      "& img": {
        height: 30,
        marginRight: 10,
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box className="logo font_semi text_md">
          <img src="/images/logo.png" alt="" />
          SafeBSC Capital
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
