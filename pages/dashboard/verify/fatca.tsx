import { Box, makeStyles, Typography } from "@material-ui/core";
import { DashboardLayout } from "components/layouts/DashboardLayout";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    "& .sterpper": {
      display: "flex",
      "& .itemStepper": {
        position: "relative",
        textAlign: "center",
        flex: 1,
        "& .number": {
          width: 35,
          height: 35,
          borderRadius: "100%",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 10px",
        },
        "& .lineStepper": {
          position: "absolute",
          width: "100%",
          height: 4,
          top: 15,
          left: "50%",
          zIndex: -1,
          opacity: 0.5,
        },
      },
    },
  },
}));

const FatcaPage = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Box className="sterpper">
          <Box className="itemStepper">
            <Box className="lineStepper bg_primary"></Box>
            <span className="number d_flex bg_primary color_white font_semi">
              1
            </span>
            <Typography>ยืนยันอีเมล</Typography>
          </Box>
          <Box className="itemStepper">
            <Box className="lineStepper bg_primary"></Box>
            <span className="number d_flex bg_primary color_white font_semi">
              2
            </span>
            <Typography>ข้อมูลทั่วไป</Typography>
          </Box>
          <Box className="itemStepper">
            <Box className="lineStepper bg_primary"></Box>
            <span className="number d_flex bg_primary color_white font_semi">
              3
            </span>
            <Typography>ข้อมูลยืนยันตัวตน</Typography>
          </Box>
          <Box className="itemStepper">
            <Box className="lineStepper bg_primary"></Box>
            <span className="number d_flex bg_primary color_white font_semi">
              4
            </span>
            <Typography>ประเมินความเสี่ยง</Typography>
          </Box>
          <Box className="itemStepper">
            <Box className="lineStepper bg_primary"></Box>
            <span className="number d_flex bg_primary color_white font_semi">
              5
            </span>
            <Typography>FATCA</Typography>
          </Box>
          <Box className="itemStepper">
            <Box className="lineStepper bg_gray"></Box>
            <span className="number d_flex bg_gray color_white font_semi">
              6
            </span>
            <Typography>บัญชีธนาคาร</Typography>
          </Box>
          <Box className="itemStepper">
            <span className="number d_flex bg_gray color_white font_semi">
              7
            </span>
            <Typography>ข้อตกลงสัญญา</Typography>
          </Box>
        </Box>
        <Typography className="text_lg" gutterBottom>
          Verification / ข้อมูลส่วนตัว
        </Typography>
      </Box>
    </DashboardLayout>
  );
};

export default FatcaPage;
