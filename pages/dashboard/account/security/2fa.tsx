import {
  Box,
  makeStyles,
  TextField,
  Theme,
  Typography,
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
      "& .MuiFormControl-root .MuiFormHelperText-contained": {
        color: "red",
      },
    },
    "& .qrCode": {
      textAlign: "center",
      maxWidth: 177,
      height: 177,
      margin: "20px auto 20px",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
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

const TwofaPage = () => {
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
              2-FACTOR-AUTHENTICATION
            </Typography>
          </Box>
          <form>
            <Box className="listForm">
              <Typography component="p" className="color_gray">
                เปิดแอปเพื่อสแกน QR CODE และเก็บรหัสสำรองสแกน QR CODE ในแอป
                GOOGLE AUTHENTICATOR
              </Typography>
              <Box className="qrCode">
                <img src="/images/qrcode.png" alt="" />
              </Box>
              <Typography component="p" className="color_gray mb_1">
                หากคุณไม่สามารถสแกนโค้ด QR
                โปรดป้อนคีย์ด้านล่างนี้ด้วยตนเองลงในแอป
              </Typography>
              <TextField
                variant="outlined"
                value="PJEWE2QWSAPWBL47RV4XZUMFFJI7CYEH"
                helperText="โปรดเก็บคีย์นี้ไว้บนกระดาษ คีย์นี้จะช่วยให้คุณสามารถกู้คืน 2-FACTOR-AUTHENTICATION ได้ในกรณีที่โทรศัพท์สูญหาย"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <ButtonDefault
                title="เปิดใช้งาน 2FA"
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

export default TwofaPage;
