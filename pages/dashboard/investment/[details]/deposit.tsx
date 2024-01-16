import {
  Box,
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { DashboardLayout } from "components/layouts/DashboardLayout";
import React from "react";
import { IconFavorite } from "components/common/icon";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { ButtonDefault } from "components/common/button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .boxTop": {
      position: "relative",
      backgroundColor: "#f1f2f4",
      padding: "2rem",
      borderRadius: ".75rem",
      marginBottom: 60,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 30,
      },
      "& .xsLeft": {
        [theme.breakpoints.down("xs")]: {
          textAlign: "left",
        },
      },
      "& .favorite": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #b3d832, #11b981)",
        // backgroundColor: theme.palette.secondary.main,
        maxWidth: 150,
        width: "100%",
        height: 40,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        position: "absolute",
        top: 0,
        right: "2rem",
        "& svg": {
          marginRight: 5,
        },
        "& .boxPrice": {
          display: "flex",
          justifyContent: "space-between",
        },
      },
    },
    "& .MuiOutlinedInput-root, .MuiSelect-outlined.MuiSelect-outlined": {
      backgroundColor: "#f1f2f4 !important",
    },
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      paddingTop: 0,
      paddingBottom: 0,
      display: "flex",
      alignItems: "center",
      height: 45,
      color: "rgba(0, 0, 0, 0.35)",
      fontWieght: 600,
    },
    "& .titleBototm": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
  },
}));

const currencies = [
  {
    value: "BATH",
    label: "บาท",
  },
  {
    value: "USD",
    label: "USDT",
  },
];

const DepositPage = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("BATH");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Box className="boxTop">
          <Box className="favorite text_xs color_white">
            <IconFavorite /> กลยุทธ์ยอดนิยม
          </Box>
          <Box
            display="flex"
            alignItems="center"
            className="nameCoin mt_2 mb_2"
          >
            <img
              src="/images/bitcoin.png"
              alt=""
              style={{ maxWidth: "100%", height: 60, marginRight: 15 }}
            />
            <Box>
              <Typography variant="h2" color="secondary">
                กลยุทธ์ SAFEBSC-BLOCKCHAIN
              </Typography>
              <Typography className="text_xs" style={{ marginTop: 5 }}>
                กลยุทธ์ที่ลงทุนในกลุ่ม Blockchain พร้อมการ Rebalance
                อัตโนมัติเพื่อประสิทธิภาพสูงสุด
              </Typography>
            </Box>
          </Box>
          <Typography className="font_semi text_lg mb_1">
            การลงทุนปัจจุบันของคุณ
          </Typography>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item sm={8} xs={12}>
              <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
                  <Typography className="text_xs">มูลค่าปัจจุบัน</Typography>
                  <Typography className="text_sm" style={{ color: "#555" }}>
                    -
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Typography className="text_xs">จำนวนการลงทุน</Typography>
                  <Typography className="text_sm" style={{ color: "#555" }}>
                    -
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Typography className="text_xs">การเปลี่ยนแปลง</Typography>
                  <Typography className="text_sm" style={{ color: "#555" }}>
                    -
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography className="font_semi text_sm text_right xsLeft">
                NAV
              </Typography>
              <Typography className="font_semi text_xl text_right xsLeft">
                8.03 บาท
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography className="text_xl mb_1">การชำระเงิน</Typography>
        <Typography className="text_md d_flex align_center mb_1">
          <AccountBalanceIcon
            color="secondary"
            style={{ marginRight: 15, fontSize: 38 }}
          />
          ชำระผ่านการโอนจากธนาคาร
        </Typography>
        <Typography className="font_semi text_md d_flex align_center mb_2">
          <img
            src="/images/scb_logo.svg"
            alt=""
            style={{ marginRight: 15, borderRadius: "100%", width: 40 }}
          />
          ธนาคารไทยพาณิชย์
        </Typography>
        <Typography className="text_md">
          เลขที่บัญชี :{` `}
          <Typography color="primary" component="span" className="font_semi">
            123-456789-0
          </Typography>
        </Typography>
        <Typography className="text_md">
          ชื่อไทย : บริษัท เซฟบีเอสซี จำกัด
        </Typography>
        <Typography className="text_md mb_1">
          ชื่ออังกฤษ : SafeBsc Co., Ltd
        </Typography>
        <Typography
          className="color_warning"
          style={{ textDecoration: "underline", marginBottom: 5 }}
        >
          คำเตือน
        </Typography>
        <Typography className="mb_2">
          ชื่อบัญชีกับบัตรประชาชนต้องตรงกัน
          หากไม่ตรงบริษัทขอสงวนสิทธิ์ในการปฎิเสธรายการ
        </Typography>
        <Box className="titleBototm mb_2">
          <Typography
            className="font_semi text_xl"
            color="primary"
            gutterBottom
          >
            ซื้อกลยุทธ์การลงทุน
          </Typography>
          <Typography className="text_sm font_semi">
            ค่าธรรมเนียมในการซื้อ: 1.50 %
          </Typography>
        </Box>
        <form>
          <Grid container spacing={3} className="mb_2">
            <Grid item sm={6} xs={12}>
              <TextField
                id="outlined-select-currency"
                select
                label="สกุลเงิน"
                value={currency}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {currency === "BATH" ? (
                        <img
                          src="/images/icon_thai_bath.png"
                          alt=""
                          style={{ height: 28 }}
                        />
                      ) : (
                        <img
                          src="/images/icon_dollar.png"
                          alt=""
                          style={{ height: 31 }}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                label="จำนวน (บาท)"
                placeholder="0.00"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item sm={6} xs={12}></Grid>
            <Grid item sm={6} xs={12}>
              <Typography
                className="text_sm"
                style={{ textDecoration: "underline" }}
                gutterBottom
              >
                หมายเหตุ
              </Typography>
              <Typography className="text_xs">
                1. หากท่านซื้อขายในช่วงก่อนเวลา 14.00 น.
                ท่านจะได้รับการทำรายการในราคาของวันนั้น (วันที่ T)
                หากท่านยืนยันการซื้อขายหลัง 14.00 น. เป็นต้นไป
                ท่านจะได้รับการทำรายการในราคาของวันทำการถัดไป (วันที่ T+1)
              </Typography>
            </Grid>
          </Grid>
          <ButtonDefault
            title="ยืนยัน"
            color="primary"
            maxwidth="300px"
            margin="0 auto"
            maxwidthxs="100%"
          />
        </form>
      </Box>
    </DashboardLayout>
  );
};

export default DepositPage;
