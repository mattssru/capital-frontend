import {
  Box,
  Grid,
  Hidden,
  makeStyles,
  TextField,
  Typography,
  Theme,
} from "@material-ui/core";
import Link from "components/Link";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { LayoutProfile } from "components/layouts";
import { ButtonDefault } from "components/common/button";
import { DashboardLayout } from "components/layouts/DashboardLayout";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .formAccount": {
      backgroundColor: "#f1f2f4",
      borderRadius: 10,
    },
    "& .listForm": {
      padding: "2rem 2.5rem",
      borderBottom: "1px solid #c2c3cc",
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        padding: "1.8rem",
      },
      "&:last-child": {
        borderBottom: "none",
      },
    },
  },
}));

const PasswordPage = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Link
          href="/dashboard/account/security"
          className="d_inlineflex align_center text_sm mb_2"
        >
          <ArrowBackIosIcon style={{ marginRight: 10 }} fontSize="small" />
          ความปลอดภัย
        </Link>
        <Typography variant="h2" className="mb_2">
          ตั้งค่า
        </Typography>
        <LayoutProfile />
        <Box className="formAccount">
          <Box className="listForm">
            <Typography variant="h3">ความปลอดภัย</Typography>
            <Typography className="text_md color_gray">
              อัพเดตรหัสผ่าน
            </Typography>
          </Box>
          <form>
            <Box className="listForm">
              <Typography component="p" className="text_sm font_semi mb_1">
                ตั้งรหัสผ่าน
              </Typography>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="รหัสผ่านใหม่"
                    type="password"
                    variant="outlined"
                    defaultValue="1234567890123456"
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
                    label="ยืนยันรหัสผ่านใหม่"
                    type="password"
                    variant="outlined"
                    defaultValue="1234567890123456"
                    helperText="การยืนยันจะถูกส่งไปยังอีเมลของคุณ"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Hidden xsDown>
                  <Grid item sm={6} xs={12}></Grid>
                </Hidden>
              </Grid>
              <ButtonDefault
                title="เปลี่ยนรหัสผ่าน"
                color="primary"
                maxwidth="300px"
                maxwidthxs="100%"
                margin="30px 0 0 0"
              />
            </Box>
          </form>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default PasswordPage;
