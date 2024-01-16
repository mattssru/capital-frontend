import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import { ButtonDefault } from "components/common/button";
import { DashboardLayout } from "components/layouts/DashboardLayout";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiStepper-root": {
      paddingLeft: 0,
      paddingRight: 0,
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#f1f2f4 !important",
    },
    "& .MuiFormHelperText-contained": {
      color: "red",
      marginTop: 5,
      textDecoration: "underline",
    },
    "& .inStep": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    "& label.label": {
      color: "rgba(0, 0, 0, 0.54)",
      fontSize: "1rem",
      lineHeight: "1.1rem",
      fontFamily: "Prompt-Medium",
      transform: "none !important",
      position: "relative",
      marginBottom: 8,
      "& span": {
        color: "red",
        paddingLeft: 5,
      },
    },
    "& .radioGroup": {
      flexDirection: "row",
      [theme.breakpoints.down("xs")]: { flexDirection: "column" },
    },
    "& .form": {
      width: "100%",
    },
  },
}));
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#11b981",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#11b981",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

function getSteps() {
  return [
    "ยืนยันอีเมล",
    "ข้อมูลทั่วไป",
    "ข้อมูลยืนยันตัวตน",
    "ประเมิณความเสี่ยง",
    "FATCA",
    "บัญชีธนาคาร",
    "ข้อตกลงสัญญา",
  ];
}

const InfoPage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return stepOne();
      case 1:
        return stepTwo();
      case 2:
        return stepThree();
      case 3:
        return stepFour();
      case 4:
        return stepFive();
      case 5:
        return stepSix();
      case 6:
        return stepSeven();
      default:
        return "Unknown stepIndex";
    }
  }
  const stepOne = () => {
    return <form></form>;
  };
  const stepTwo = () => {
    return (
      <>
        <Typography className="text_lg" gutterBottom>
          Verification / ข้อมูลส่วนตัว
        </Typography>
        <Typography className="text_sm mb_2">
          ข้อมูลส่วนตัว ( โปรดกรอกข้อมูลให้ตรงกับบัตรประชาชน )
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={4} xs={12}>
            <TextField label="ชื่อ (TH)" variant="outlined" required />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField label="ชื่อกลาง (TH)" variant="outlined" />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField label="นามสกุล (TH)" variant="outlined" required />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField label="ชื่อ (ENG)" variant="outlined" required />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField label="ชื่อกลาง (END)" variant="outlined" />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField label="นามสกุล (ENG)" variant="outlined" required />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField label="เลขบัตรประชาชน" variant="outlined" required />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              label="หมายเลขหลังบัตรประชาชน (Laser ID)"
              placeholder="วว/ดด/ปปปป"
              variant="outlined"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              label="วันหมดอายุบัตรประชาชน วัน / เดือน / ปี (ค.ศ.)"
              placeholder="วว/ดด/ปปปป"
              variant="outlined"
              inputMode="numeric"
              helperText="ตัวอย่าง : 22/08/2027"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              label="วัน / เดือน / ปี (ค.ศ.) เกิด"
              placeholder="วว/ดด/ปปปป"
              variant="outlined"
              inputMode="numeric"
              helperText="ตัวอย่าง : 25/05/1985"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="สัญชาติ"
              variant="outlined"
              required
              select
              defaultValue="0"
              SelectProps={{
                native: true,
              }}
            >
              <option value="0" disabled>
                เลือกสัญชาติ
              </option>
              <option value="">ไทย</option>
              <option value="">กรีซ</option>
            </TextField>
          </Grid>
          <Grid item sm={6} xs={12}>
            <label className="label">
              สถานภาพสมรส
              <span>*</span>
            </label>
            <RadioGroup className="radioGroup" defaultValue="1">
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="โสด"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="สมรส"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="หม้าย"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="หย่า"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" />}
                label="แยกกันอยู่"
              />
            </RadioGroup>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField label="หมายเลขโทรศัพท์" variant="outlined" required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ที่อยู่ตามบัตรประชาชน (บ้านเลขที่ / อาคาร / หมู่บ้าน / ซอย ถนน)"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              label="ประเทศ (ของที่อยู่ตามบัตรประชาชน)"
              variant="outlined"
              required
              select
              defaultValue="0"
              SelectProps={{
                native: true,
              }}
            >
              <option value="0" disabled>
                เลือกประเทศ
              </option>
              <option value="">ไทย</option>
              <option value="">กรีซ</option>
            </TextField>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField label="เมือง/เขต" variant="outlined" required />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField label="รัฐ/จังหวัด" variant="outlined" required />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField label="รหัสไปรษณีย์" variant="outlined" required />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography className="font_semi text_md mb_2">อาชีพ</Typography>
            <TextField
              label="ประเภทอาชีพ"
              variant="outlined"
              required
              select
              defaultValue="0"
              SelectProps={{
                native: true,
              }}
            >
              <option value="0" disabled>
                เลือกอาชีพ
              </option>
              <option value="">ไทย</option>
              <option value="">กรีซ</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ชื่อบริษัท / ผู้จ้างงาน / หน่วยงานรัฐ ( ไม่มีให้ใส่ - )"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ประเทศแหล่งที่มาของเงินได้"
              variant="outlined"
              required
              select
              defaultValue="0"
              SelectProps={{
                native: true,
              }}
            >
              <option value="0" disabled>
                เลือก
              </option>
              <option value="1">ไทย</option>
              <option value="2">กรีซ</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ประเภทของสินทรัพย์ที่คิดว่าจะนำมาลงทุน"
              placeholder="เลือก"
              variant="outlined"
              required
              select
              defaultValue="0"
              SelectProps={{
                native: true,
              }}
            >
              <option value="0" disabled>
                เลือก
              </option>
              <option value="1">ไทย</option>
              <option value="2">กรีซ</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ประเภทของสินทรัพย์ที่คิดว่าจะนำมาลงทุน"
              placeholder="เลือก"
              variant="outlined"
              required
              select
              defaultValue="0"
              SelectProps={{
                native: true,
              }}
            >
              <option value="0" disabled>
                เลือก
              </option>
              <option value="1">ไทย</option>
              <option value="2">กรีซ</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              รายได้เฉลี่ยต่อเดือน
              <span>*</span>
            </label>
            <RadioGroup
              className="radioGroup"
              defaultValue="1"
              style={{ flexDirection: "column" }}
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) มากกว่า 500,000 บาทขึ้นไป"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) 100,000 - 499,999 บาท"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) 20,000 - 99,999 บาท"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) น้อยกว่า 20,000 บาท"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" />}
                label="อื่นๆ"
              />
            </RadioGroup>
            <TextField
              placeholder="โปรดระบุถ้าเลือกอื่นๆ"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              สัดส่วนเงินได้ระหว่างภายในประเทศที่ตนอาศัยอยู่และภายนอกประเทศเป็นจำนวนเท่าใด
              <span>*</span>
            </label>
            <RadioGroup
              className="radioGroup"
              defaultValue="1"
              style={{ flexDirection: "column" }}
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) นอกประเทศน้อยกว่า 20%"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) นอกประเทศมากกว่า 20% แต่น้อยกว่า 50%"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) นอกประเทศมากกว่า 50% แต่น้อยกว่า 80%"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) นอกประเทศมากกว่า 80% ขึ้นไป"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" />}
                label="อื่นๆ"
              />
            </RadioGroup>
            <TextField
              placeholder="โปรดระบุถ้าเลือกอื่นๆ"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="แหล่งที่มาของเงินได้"
              placeholder="เลือก"
              variant="outlined"
              required
              select
              defaultValue="0"
              SelectProps={{
                native: true,
              }}
            >
              <option value="0" disabled>
                เลือก
              </option>
              <option value="1">ไทย</option>
              <option value="2">กรีซ</option>
            </TextField>
          </Grid>
        </Grid>
      </>
    );
  };
  const stepThree = () => {
    return <Box>3</Box>;
  };
  const stepFour = () => {
    return (
      <>
        <Typography className="text_lg mb_2" gutterBottom>
          Verification / ความเสี่ยง
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <label className="label">
              ปัจจุบันท่านอายุเท่าใด?
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) มากกว่า 55 ปี"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) 45-55 ปี"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) 30-44 ปี"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) น้อยกว่า 30 ปี"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ระดับการศึกษา?
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) ต่ำกว่าปริญญาตรี"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) ปริญญาตรี"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) ปริญญาโท"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) สูงกว่าปริญญาโท"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ปัจจุบันท่านมีภาระทางการเงินและค่าใช้จ่ายประจำ เช่น ค่าผ่อนบ้าน รถ
              ค่าใช้จ่ายส่วนตัว และค่าเลี้ยงดูครอบครัว เป็นสัดส่วนเท่าใด
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) มากกว่าร้อยละ 75 ของรายได้ทั้งหมด"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) ตั้งแต่ร้อยละ 50 แต่ไม่เกินร้อยละ 75 ของรายได้ทั้งหมด"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) ตั้งแต่ร้อยละ 25 แต่ไม่เกินร้อยละ 50 ของรายได้ทั้งหมด"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) น้อยกว่าร้อยละ 25 ของรายได้ทั้งหมด"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ท่านมีสถานภาพทางการเงินในปัจจุบันอย่างไร?
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) มีทรัพย์สินน้อยกว่าหนี้สิน"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) มีทรัพย์สินเท่ากับหนี้สิน"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) มีทรัพย์สินมากกว่าหนี้สิน"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) มีหนี้สินน้อยมากเมื่อเปรียบเทียบกับมูลค่าทรัพย์สิน หรือไม่มีหนี้สินเลย"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ปริมาณสินทรัพย์ทั้งหมดที่ลูกค้าเป็นเจ้าของ<span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) น้อยกว่า 1,000,000 บาท"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) 1,000,000 - 5,000,000 บาท"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) 5,000,000 - 10,000,000 บาท"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) มากกว่า 10,000,000 บาทขึ้นไป"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              มูลค่าเงินออมและสินทรัพย์ที่มีไว้เพื่อการลงทุนในหลักทรัพย์ทั้งหมด
              (หลักทรัพย์ หมายถึง หน่วยลงทุน หุ้น หุ้นกู้ พันธบัตรรัฐบาล
              ตราสารอนุพันธ์ หรือเครื่องมือทางการเงินอื่นทำนองเดียวกัน)
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) น้อยกว่า 1,000,000 บาท"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) 1,000,000 - 5,000,000 บาท"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) 5,000,000 - 10,000,000 บาท"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) มากกว่า 10,000,000 บาทขึ้นไป"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              มูลค่าเงินออมและสินทรัพย์ที่มีไว้เพื่อการจัดสรรมทุนสินทรัพย์ดิจิทัล
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) น้อยกว่า 500,000 บาท"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) 500,000 - 10,000,000 บาท"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) 10,000,000 - 100,000,000 บาท"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) มากกว่า 100,000,000 บาทขึ้นไป"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              สัดส่วนระหว่างเงินลงทุนที่ประสงค์จะนำมาจัดสรรการลงทุนสินทรัพย์ดิจิทัลกับสินทรัพย์ทั้งหมด
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) ตั้งแต่ร้อยละ 80 ขึ้นไป"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) ตั้งแต่ร้อยละ 40 แต่ไม่เกินร้อยละ 80"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) ตั้งแต่ร้อยละ 10 แต่ไม่เกินร้อยละ 40"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) น้อยกว่าร้อยละ 10"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ท่านมีประสบการณ์การลงทุนในหลักทรัพย์ หรือไม่ (หลักทรัพย์ หมายถึง
              หน่วยลงทุน หุ้น หุ้นกู้ พันธบัตรรัฐบาล ตราสารอนุพันธ์
              หรือเครื่องมือทางการเงินอื่นทำนองเดียวกัน)
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) ไม่มีประสบการณ์เลย"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) มีประสบการณ์ตั้งแต่ 1 ปี แต่ไม่เกิน 3 ปี"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) มีประสบการณ์ตั้งแต่ 3 ปี แต่ไม่เกิน 5 ปี"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) มีประสบการณ์ตั้งแต่ 5 ปีขึ้นไป"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ท่านมีความรู้ความเข้าใจเกี่ยวกับการลงทุน
              คุณลักษณะและความเสี่ยงของสินทรัพย์ดิจิทัล
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) ไม่มีความรู้ในเรื่องสินทรัพย์ดิจิทัล"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) มีความรู้เบื้องต้นเกี่ยวกับสินทรัพย์ดิจิทัล"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) มีความรู้เกี่ยวกับสินทรัพย์ดิจิทัลพอประมาณ"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) ความรู้ความเข้าใจเกี่ยวกับสินทรัพย์ดิจิทัลเป็นอย่างดี"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ท่านเคยมีประสบการณ์การลงทุนในสินทรัพย์ดิจิทัล หรือไม่
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) ไม่มีประสบการณ์เลย"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) มีประสบการณ์ไม่เกิน 1 ปี"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) มีประสบการณ์ตั้งแต่ 1 ปี แต่ไม่เกิน 3 ปี"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) มีประสบการณ์ตั้งแต่ 3 ปีขึ้นไป"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              วัตถุประสงค์หลักในการลงทุนของท่านคือ
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) เน้นเงินต้นต้องปลอดภัยและได้รับผลตอบแทนสม่ำเสมอแต่ต่ำได้"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) เน้นโอกาสได้รับผลตอบแทนที่สม่ำเสมอแต่อาจเสี่ยงที่จะสูญเสียเงินต้นได้บ้าง"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) เน้นโอกาสได้รับผลตอบแทนที่สูงขึ้นแต่อาจเสี่ยงที่จะสูญเสียเงินต้นได้มากขึ้น"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) เน้นผลตอบแทนสูงสุดในระยะยาวแต่อาจเสี่ยงที่จะสูญเงินต้นส่วนใหญ่ได้"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ระยะเวลาที่ท่านคาดว่ากิจการจะไม่มีความจำเป็นต้องใช้เงินลงทุนนี้
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) ไม่เกิน 1 ปี"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) 1-3 ปี"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) 3-5 ปี"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) มากกว่า 5 ปี"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ถ้าท่านเลือกลงทุนในทรัพย์สินที่มีโอกาสได้รับผลตอบแทนมากแต่มีโอกาสขาดทุนสูงด้วยเช่นกันท่านจะรู้สึกอย่างไร
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) กังวลและตื่นตระหนกกลัวขาดทุน"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) ไม่สบายใจแต่พอเข้าใจได้บ้าง"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) เข้าใจและรับความผันผวนได้ในระดับหนึ่ง"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) ไม่กังวลกับโอกาสขาดทุนสูงและหวังกับผลตอบแทนที่อาจจะได้รับสูงขึ้น"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ระดับความเสี่ยงของการลงทุนที่ยอมรับได้
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) รับความเสี่ยงไม่ได้"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) รับความเสี่ยงได้พอควร"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) รับความเสี่ยงได้สูง"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) รับความเสี่ยงได้สูงมาก"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              ท่านคิดว่าท่านยอมรับผลขาดทุนจากการลงทุนในครั้งหนึ่งได้มากน้อยเพียงใด
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) ไม่สามารถรับการขาดทุนได้เลย"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) 5% หรือน้อยกว่า"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) มากกว่า 5-30%"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) มากกว่า 30% ขึ้นไป"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              นอกเหนือจากความเสี่ยงในการลงทุนแล้ว
              ท่านสามารถรับความเสี่ยงด้านอัตราแลกเปลี่ยนได้เพียงใด
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) ไม่สามารถตัดสินใจได้เพราะไม่มีความเข้าใจในเรื่องดังกล่าวมากพอ"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) ไม่สามารถยอมรับความเสี่ยงจากสถานการณ์ดังกล่าวได้"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) ยอมรับความเสี่ยงจากสถานการณ์ดังกล่าวได้บางส่วน"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) สามารถยอมรับความเสี่ยงจากสถานการณ์ดังกล่าวได้"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <label className="label">
              หากปีที่แล้วท่านลงทุนไป 1,000,000 บาท
              ปีนี้ท่านพบว่ามูลค่าเงินลงทุนลดลงเหลือ 850,000 บาท ท่านจะทำอย่างไร
              <span>*</span>
            </label>
            <RadioGroup defaultValue="1" style={{ flexDirection: "column" }}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="(1) ตกใจ และต้องการขายการลงทุนที่เหลือทั้งหมด"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="(2) กังวล และปรับเปลี่ยนการลงทุนบางส่วนไปในสินทรัพย์ที่เสี่ยงน้อยลง"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="(3) อดทนถือต่อไปได้ และรอผลตอบแทนปรับตัวกลับมา"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="(4) ยังมั่นใจ เพราะเข้าใจว่าต้องลงทุนระยะยาว และจะเพิ่มเงินลงทุนในแบบเดิมเพื่อเฉลี่ยต้นทุน"
              />
            </RadioGroup>
          </Grid>
        </Grid>
      </>
    );
  };
  const stepFive = () => {
    return <Box>5</Box>;
  };
  const stepSix = () => {
    return <Box>6</Box>;
  };
  const stepSeven = () => {
    return <Box>7</Box>;
  };
  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Stepper
          activeStep={activeStep}
          connector={<QontoConnector />}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Box className="inStep">All steps completed</Box>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <form className="form">
              <Box className="inStep">{getStepContent(activeStep)}</Box>
              <ButtonDefault
                title={activeStep === steps.length - 1 ? "Finish" : "บันทึก"}
                color="primary"
                onClick={handleNext}
                maxwidth="300px"
                maxwidthxs="100%"
                margin="50px auto 0"
              />
            </form>
          )}
        </div>
      </Box>
    </DashboardLayout>
  );
};

export default InfoPage;
