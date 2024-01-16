import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import Link from "components/Link";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { LayoutProfile } from "components/layouts";
import CreateIcon from "@material-ui/icons/Create";
import { DashboardLayout } from "components/layouts/DashboardLayout";
import prefix from "utils/path";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .formAccount": {
      backgroundColor: "#f1f2f4",
      borderRadius: 10,
    },
    "& .listForm": {
      padding: "2.5rem",
      borderBottom: "1px solid #c2c3cc",
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        padding: "1.8rem",
      },
      "&:last-child": {
        borderBottom: "none",
      },
      "& .font_semi": {
        marginBottom: 10,
      },
    },
  },
}));

const SecurityPage = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Link
          href={`${prefix}/dashboard`}
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
          <Box className="listForm">
            <Typography variant="h3">ความปลอดภัย</Typography>
          </Box>
          <Box className="listForm">
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Box className="font_semi">เปลี่ยนรหัสผ่าน</Box>
                <Typography component="p" className="color_gray">
                  เปลี่ยนหรือแก้ไขรหัสผ่าน
                </Typography>
              </Grid>
              <Grid item sm={6} xs={12} className="d_flex align_center">
                <Box className="d_flex justify_between align_center w_100">
                  <Typography component="p" className="color_gray">
                    อัพเดทล่าสุด 2022-04-18 12:36:42
                  </Typography>
                  <Link href="/dashboard/account/security/password">
                    <CreateIcon style={{ color: "#a3a4ba" }} />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="listForm">
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Box className="font_semi">ยืนยันอีเมล</Box>
                <Typography component="p" className="color_gray">
                  อีเมลที่ถูกยืนยันแล้ว
                  ใช้เพื่อส่งรหัสเข้าสู่ระบบเมื่อมีการตรวจพบกิจกรรมที่น่าสงสัย,
                  เพื่อเตือนให้คุณทราบถึงรหัสบัญชี
                  และส่งการแจ้งเตือนเมื่อคุณได้รับเงิน
                </Typography>
              </Grid>
              <Grid item sm={6} xs={12} className="d_flex align_center">
                <Box className="d_flex justify_between align_center">
                  <Typography component="p" className="color_gray">
                    ยืนยันอีเมลด้วย mattssru@gmail.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="listForm">
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Box className="font_semi">SMS AUTHENTICATION</Box>
                <Typography component="p" className="color_gray">
                  เมื่อเปิดการใช้งาน SMS authentication
                  คุณจะสามารถยืนยันการทำธุรกรรมฝาก ถอน เทรด ได้ ผ่าน SMS
                  เพื่อเพิ่มความปลอดภัยในการใช้งานมากยิ่งขึ้น
                </Typography>
              </Grid>
              <Grid item sm={6} xs={12} className="d_flex align_center">
                <Box className="d_flex justify_between align_center w_100">
                  <Typography component="p" className="color_gray">
                    ไม่มีการเปิดใช้งาน
                  </Typography>
                  <Link href="/dashboard/account/security/sms">
                    <CreateIcon style={{ color: "#a3a4ba" }} />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="listForm">
            <Grid container spacing={4}>
              <Grid item sm={6} xs={12}>
                <Box className="font_semi">2-FACTOR AUTHENTICATION</Box>
                <Typography component="p" className="color_gray">
                  เมื่อเปิดการใช้งาน Google authentication
                  คุณจะสามารถดำเนินการทำธุรกรรมฝาก ถอน เทรด ได้
                </Typography>
              </Grid>
              <Grid item sm={6} xs={12} className="d_flex align_center">
                <Box className="d_flex justify_between align_center w_100">
                  <Typography component="p" className="color_gray">
                    ไม่มีการเปิดใช้งาน
                  </Typography>
                  <Link href="/dashboard/account/security/2fa">
                    <CreateIcon style={{ color: "#a3a4ba" }} />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default SecurityPage;
