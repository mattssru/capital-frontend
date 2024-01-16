import { Box, Button, Link, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BoxVerify from "components/BoxVerify";
import router from "next/router";
import { DashboardLayout } from "components/layouts/DashboardLayout";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .introVerify": {
      display: "flex",
      alignItems: "flex-start",
      paddingBottom: 20,
      marginBottom: 40,
      borderBottom: "1px solid #000",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
      "& .imageVerify": {
        marginRight: 50,
        maxWidth: 300,
        height: "100%",
        [theme.breakpoints.down("xs")]: {
          margin: "0 auto 20px",
        },
        "& img": {
          maxWidth: "100%",
        },
      },
      "& .detailIntro": {
        flex: "1 1 0%",
        [theme.breakpoints.down("xs")]: {
          textAlign: "center",
          maxWidth: "100%",
        },
        "& p": {
          lineHeight: "1.6rem",
          margin: "20px 0",
          [theme.breakpoints.down("xs")]: {
            margin: "10px 0",
          },
          "& br": {
            [theme.breakpoints.down("xs")]: {
              display: "none",
            },
          },
        },
        "& a": {
          marginLeft: 10,
          color: "#11b981",
          textDecoration: "underline !important",
        },
      },
    },
  },
}));

const VerifyPage = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Box className="introVerify" sx={{ padding: { xs: 0, lg: "0 5rem" } }}>
          <Box className="imageVerify">
            <img src="/images/verify.svg" alt="" />
          </Box>
          <Box className="detailIntro">
            <Typography variant="h1">ดำเนินการยืนยันตัวตน</Typography>
            <p>
              คุณสามารถติดตามวามคืบหน้าในการยืนยันตัวตนได้ที่นี่
              <br />
              หลังจากทุกส่วนด้านล่างเสร็จสมบูรณ์
              และมีการจัดเตรียมเอกสารทั้งหมดแล้ว
              <br />
              ทีมปฏิบัติตามกฎระเบียบจะเริ่มตรวจสอบข้อมูลของคุณ
              และอนุมัติบัญชีของคุณ
            </p>
            <p>
              หากมีข้อสงสัยโปรดติดต่อ
              <Link href="/">safebsc@admin.com</Link>
            </p>
          </Box>
        </Box>
        <BoxVerify>
          <Box display="flex" alignItems="center">
            <MailOutlineIcon style={{ marginRight: 10 }} />
            1. ยืนยันอีเมล
          </Box>
          <Button
            variant="contained"
            color="primary"
            style={{ pointerEvents: "none" }}
          >
            เรียบร้อย
          </Button>
        </BoxVerify>
        <BoxVerify>
          <Box display="flex" alignItems="center">
            <MailOutlineIcon style={{ marginRight: 10 }} />
            2. ข้อมูลทั่วไป
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              router.push("/dashboard/verify/info");
            }}
          >
            กรอกข้อมูล
          </Button>
        </BoxVerify>
        <BoxVerify>
          <Box display="flex" alignItems="center">
            <MailOutlineIcon style={{ marginRight: 10 }} />
            3. ข้อมูลยืนยันตัวตน
          </Box>
          <Button variant="contained" color="primary" disabled>
            กรอกข้อมูล
          </Button>
        </BoxVerify>
        <BoxVerify>
          <Box display="flex" alignItems="center">
            <MailOutlineIcon style={{ marginRight: 10 }} />
            4. ประเมินความเสี่ยง
          </Box>
          <Button variant="contained" color="primary" disabled>
            กรอกข้อมูล
          </Button>
        </BoxVerify>
        <BoxVerify>
          <Box display="flex" alignItems="center">
            <MailOutlineIcon style={{ marginRight: 10 }} />
            5. FATCA
          </Box>
          <Button variant="contained" color="primary" disabled>
            กรอกข้อมูล
          </Button>
        </BoxVerify>
        <BoxVerify>
          <Box display="flex" alignItems="center">
            <MailOutlineIcon style={{ marginRight: 10 }} />
            6. บัญชีธนาคาร
          </Box>
          <Button variant="contained" color="primary" disabled>
            กรอกข้อมูล
          </Button>
        </BoxVerify>
        <BoxVerify>
          <Box display="flex" alignItems="center">
            <MailOutlineIcon style={{ marginRight: 10 }} />
            7. ข้อตกลงสัญญา
          </Box>
          <Button variant="contained" color="primary" disabled>
            กรอกข้อมูล
          </Button>
        </BoxVerify>
      </Box>
    </DashboardLayout>
  );
};

export default VerifyPage;
