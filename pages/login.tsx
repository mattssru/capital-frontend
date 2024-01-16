import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { ButtonDefault } from "components/common/button";
import Link from "components/Link";
import React from "react";
import prefix from "utils/path";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: "linear-gradient(to bottom, #11b981, #15aac2)",
    minHeight: "100vh",
    position: "relative",
    "&::before": {
      content: '""',
      position: "fixed",
      left: "-5%",
      bottom: "40%",
      right: 0,
      width: "125%",
      height: "100%",
      background: "#11b981",
      transform: " rotate(15deg)",
      zIndex: -1,
      [theme.breakpoints.down("xs")]: {
        transform: "none",
        width: "100%",
        height: "100%",
        bottom: 0,
        left: 0,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "30px 0",
    },
    "& .header": {
      height: "10vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
        marginBottom: 20,
      },
      "& .logo": {
        display: "flex",
        alignItems: "center",
        color: "#fff",
        "& img": {
          height: 45,
          marginRight: 10,
        },
      },
    },
    "& .body": {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#f1f2f4 !important",
    },

    "& .form": {
      maxWidth: 600,
      boxShadow: "0 3px 6px rgba(0,0,0,0.18)",
      padding: "30px 25px",
      borderRadius: 10,
      margin: "0 auto",
      textAlign: "center",
      backgroundColor: "#fff",
    },
    "& .title": {
      position: "relative",
      display: "inline-flex",
      justifyContent: "center",
      color: theme.palette.primary.main,
      fontSize: 30,
      lineHeight: "42px",
      paddingBottom: 6,
      marginBottom: 30,
    },
    "& .btnLogin": {
      width: 40,
      height: 40,
      boxShadow: "0px 2px 10px rgb(0 0 0 / 20%)",
      padding: 8,
      borderRadius: "100%",
      margin: "0 10px",
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="header">
        <Container maxWidth="xl">
          <Link href="/" className="logo font_semi text_lg">
            <img src={`${prefix}/images/logo.png`} alt="" />
            SafeBSC Capital
          </Link>
        </Container>
      </Box>
      <Box className="body">
        <Container maxWidth="xl">
          <Box className="form">
            <Typography className="title" variant="h2" align="center">
              LOGIN
            </Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    placeholder="E-mail"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Password"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <ButtonDefault
                title="Login"
                color="primary"
                maxwidth="250px"
                maxwidthxs="100%"
                margin="25px auto 20px"
              />
              <Typography className="text_sm mb_1 font_semi">
                Log in with one of these methods
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                }}
              >
                <IconButton className="btnLogin">
                  <img src={`${prefix}/images/icon_google.svg`} alt="" />
                </IconButton>
                <IconButton className="btnLogin">
                  <img src={`${prefix}/images/icon_facebook.png`} alt="" />
                </IconButton>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LoginPage;
