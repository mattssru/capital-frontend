import {
  Box,
  Grid,
  Hidden,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Link from "components/Link";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { LayoutProfile } from "components/layouts";
import { ButtonDefault } from "components/common/button";
import { DashboardLayout } from "components/layouts/DashboardLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .linkAccount": {
      marginRight: 40,
    },
    "& .formAccount": {
      backgroundColor: "#f1f2f4",
      padding: "30px 20px",
      borderRadius: 10,
      [theme.breakpoints.down("xs")]: {
        padding: "30px 15px",
      },
    },
    "& .btnForm": {
      display: "flex",
      alignItems: "flex-end",
      height: "100%",
    },
  },
}));

const index = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Link
          href="/dashboard"
          className="d_inlineflex align_center text_sm mb_2"
        >
          <ArrowBackIosIcon style={{ marginRight: 10 }} fontSize="small" />
          ภาพรวม
        </Link>
        <Typography variant="h2" className="mb_2">
          ตั้งค่า
        </Typography>
        <LayoutProfile />
        <Box className="formAccount">
          <form>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  variant="outlined"
                  label="อีเมล"
                  placeholder="อีเมล"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Hidden xsDown>
                <Grid item sm={6} xs={12}></Grid>
              </Hidden>
              <Grid item sm={6} xs={12}>
                <TextField
                  variant="outlined"
                  label="ชื่อโปรไฟล์"
                  placeholder="ชื่อโปรไฟล์"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box className="btnForm">
                  <ButtonDefault
                    title="เปลี่ยนชื่อ"
                    color="primary"
                    maxwidth="110px"
                    maxwidthxs="100%"
                  />
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  variant="outlined"
                  label="ชื่อบัญชีธนาคาร"
                  value=""
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box className="btnForm">
                  <ButtonDefault
                    title="เปลี่ยนบัญชี"
                    color="primary"
                    maxwidth="110px"
                    maxwidthxs="100%"
                  />
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default index;
