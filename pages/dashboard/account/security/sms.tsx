import {
  Box,
  Grid,
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

const SmsPage = () => {
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
              SMS AUTHENTICATION
            </Typography>
          </Box>
          <form>
            <Box className="listForm">
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="ใส่เบอร์โทรศัพท์ หลังจากนั้นกดเปิดการใช้งาน"
                    variant="outlined"
                    placeholder="Enter phone number"
                    helperText="โปรดใส่เบอร์โทรศัพท์ของตนเองเท่านั้น"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
              <ButtonDefault
                title="เปิดใช้งาน SMS Authentication"
                color="primary"
                maxwidth="300px"
                maxwidths="100%"
                margin="30px 0 0 0"
              />
            </Box>
          </form>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default SmsPage;
