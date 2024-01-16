import {
  AppBar,
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ButtonDefault } from "components/common/button";
import { IconFavorite, IconInvesment } from "components/common/icon";
import { ItemCoin, Link } from "components";
import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
// import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import SwipeableViews from "react-swipeable-views";
import { useRouter } from "next/router";
import { DashboardLayout } from "components/layouts/DashboardLayout";
import prefix from "utils/path";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .topPage": {
      "& a": {
        [theme.breakpoints.down("xs")]: {
          marginBottom: 15,
        },
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    "& .boxTop": {
      backgroundColor: "#f1f2f4",
      padding: "2rem",
      borderRadius: ".75rem",
      marginBottom: 60,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 30,
      },
      "& > button": {
        [theme.breakpoints.down("xs")]: {
          margin: "15px auto 0",
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
      },
      "& .price": {
        textAlign: "right",
        [theme.breakpoints.down("xs")]: {
          textAlign: "center",
        },
      },
      "& .nameCoin": {
        [theme.breakpoints.down("md")]: {
          alignItems: "flex-start",
        },
        [theme.breakpoints.down("xs")]: {
          display: "block",
          textAlign: "center",
        },
        "& img": {
          [theme.breakpoints.down("xs")]: {
            marginRight: "0 !important",
            marginBottom: 15,
          },
        },
        "& h2": {
          "& span": {
            paddingLeft: 10,
            [theme.breakpoints.down("xs")]: {
              display: "block",
              paddingLeft: 0,
            },
          },
        },
      },
    },
    "& .factSheet": {
      border: "1px solid #11b981",
      height: 50,
      maxWidth: 190,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      color: "#000",
      margin: "40px auto 40px",
      "& svg": {
        marginRight: 10,
      },
      "&:hover": {
        backgroundColor: "#888",
        color: "#fff",
        borderColor: "#888",
      },
    },
    "& .tabFunds": {
      borderBottom: "1px solid #ccc",
      paddingBottom: 10,
      marginBottom: 40,
      "& header": {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
      "& .MuiTabs-indicator": {
        display: "none",
      },
      "& .MuiTabs-flexContainer": {
        justifyContent: "space-between",
        "& .MuiTab-root.Mui-selected": {
          borderBottom: "2px solid #11b981",
          "& .MuiTab-wrapper": {
            color: "#000",
          },
        },
        "& .MuiTab-root": {
          fontSize: "110%",
          opacity: 1,
          "& .MuiTab-wrapper": {
            color: "#777",
          },
        },
      },
    },
    "& .graph": {
      margin: "40px 0",
      height: 450,
    },
    "& .noteBlockchain": {
      marginTop: 30,
      border: "1px solid #11b981",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      color: theme.palette.primary.main,
      height: 115,
      textAlign: "center",
    },
    "& .imageCoin": {
      margin: "30px auto 40px",
      maxWidth: 400,
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .listCoin": {
      maxWidth: 450,
      margin: "40px auto 0",
    },
    "& .boxDetails": {
      backgroundColor: "#f1f2f4",
      padding: "2rem 3rem",
      borderRadius: 12,
    },
    "& .boxLevel": {
      maxWidth: 950,
      margin: "0 auto 50px",
      overflowX: "auto",
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap",
      paddingTop: 20,
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        marginBottom: 30,
      },
      "& .itemLevel": {
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.5rem",
        maxWidth: 95,
        width: "100%",
        margin: 4,
      },
    },
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      // hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
      style={{ overflow: "hidden !important" }}
    >
      {value === index && <Box py={4}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: any) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}
const mockPrice = {
  price: "9.60",
  nav: -20,
  percentage: -4.93,
  date: "03/05/22",
};
const dataGraph = [
  {
    pv: 2400,
  },
  {
    pv: 1398,
  },
  {
    pv: 9800,
  },
  {
    pv: 3908,
  },
  {
    pv: 4800,
  },
  {
    pv: 3800,
  },
  {
    pv: 4300,
  },
];
const listCoin = [
  {
    image: `${prefix}/images/eth.png`,
    name: "ETH",
    fullName: "Ethereum",
    percentage: "25.00",
  },
  {
    image: `${prefix}/images/sol.png`,
    name: "SOL",
    fullName: "Solana",
    percentage: "12.50",
  },
  {
    image: `${prefix}/images/luna.png`,
    name: "LUNA",
    fullName: "Terra",
    percentage: "12.50",
  },
  {
    image: `${prefix}/images/avax.png`,
    name: "AVAX",
    fullName: "Avalanche",
    percentage: "12.50",
  },
  {
    image: `${prefix}/images/matic.png`,
    name: "MATIC",
    fullName: "Polygon",
    percentage: "12.50",
  },
  {
    image: `${prefix}/images/atom.png`,
    name: "ATOM",
    fullName: "Cosmos",
    percentage: "12.50",
  },
  {
    image: `${prefix}/images/algo.png`,
    name: "ALGO",
    fullName: "Algorand",
    percentage: "12.50",
  },
];

const DetailsPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const [tabs, setTabs] = React.useState(0);
  const { details } = router.query;
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setTabs(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setTabs(index);
  };

  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className="topPage"
        >
          <Link
            href="/dashboard/investment"
            className="d_inlineflex align_center text_sm"
          >
            <ArrowBackIosIcon style={{ marginRight: 10 }} fontSize="small" />
            รายการกลยุทธ์
          </Link>
          <ButtonDefault
            title="เปรียบเทียบกลยุทธ์"
            border="1px solid #11b981"
            bgcolor="#fff"
            bghover="#11b981"
            colorfont="#000"
            colorhover="#fff"
            startIcon={<IconInvesment />}
            maxwidth="170px"
            height="40px"
          />
        </Box>
        <Box className="boxTop mt_2" position="relative">
          <Box className="favorite text_xs color_white">
            <IconFavorite /> กลยุทธ์ยอดนิยม
          </Box>
          <Grid container spacing={3} className="mt_1">
            <Grid item lg={9} md={8} sm={7} xs={12}>
              <Box display="flex" alignItems="center" className="nameCoin">
                <img
                  src={`${prefix}/images/bitcoin.png`}
                  alt=""
                  style={{ maxWidth: "100%", height: 60, marginRight: 15 }}
                />
                <Box>
                  <Typography variant="h2" color="secondary">
                    SAFEBSC-BLOCKCHAIN
                  </Typography>
                  <Typography className="text_xs" style={{ marginTop: 5 }}>
                    กลยุทธ์ที่ลงทุนในกลุ่ม Blockchain พร้อมการ Rebalance
                    อัตโนมัติเพื่อประสิทธิภาพสูงสุด
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={5} xs={12}>
              <Box className="price">
                <Typography className="text_xl font_semi" color="secondary">
                  {mockPrice.nav > 0 ? (
                    <ArrowDropUpIcon
                      style={{
                        color: "#11b981",
                        fontSize: 30,
                        position: "relative",
                        top: 5,
                      }}
                    />
                  ) : (
                    <ArrowDropDownIcon
                      style={{
                        color: "#eb6244",
                        fontSize: 30,
                        position: "relative",
                        top: 5,
                      }}
                    />
                  )}
                  {mockPrice.price} บาท
                </Typography>
                <Typography
                  className={`text_xs font_semi ${
                    mockPrice.nav > 0 ? "color_secondary" : "color_warning"
                  }`}
                >
                  {mockPrice.nav > 0 ? `+${mockPrice.nav}` : mockPrice.nav}
                  {` ( ${
                    mockPrice.percentage > 0
                      ? `+${mockPrice.percentage}`
                      : mockPrice.percentage
                  }% )`}
                </Typography>
                <Typography className="color_gray" style={{ fontSize: 10 }}>
                  {mockPrice.date}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <ButtonDefault
            title="ลงทุนกลยุทธ์นี้"
            color="primary"
            maxwidth="200px"
            margin="20px 0 0 0"
            onClick={() => {
              router.push(`/dashboard/investment/${details}/deposit`);
            }}
          />
        </Box>
        <Grid container spacing={3} className="mb_2">
          <Grid item sm={9} xs={12}>
            <Typography variant="h3">
              สินทรัพย์ดิจิทัลและโอกาสการลงทุน
            </Typography>
            <Typography className="text_sm" style={{ marginTop: 10 }}>
              "SafeBsc Blockchain"
              เป็นนวัตกรรมที่คิดค้นขึ้นมาโดยนำข้อมูลบันทึกแบบเข้ารหัสไว้เป็นบล็อก
              ๆ (Block) และเชื่อมโยงข้อมูลระหว่างกันแบบห่วงโซ่ (Chain)
              ทำให้การทำธุรกรรมต่าง ๆ ไม่
              จำเป็นต้องผ่านตัวกลางในการส่งข้อมูลอีกต่อไป
              ในช่วงหลายปีที่ผ่านมานั้นเทคโนโลยีบล็อกเชนได้เติบโตอย่างมาก
              โดยเฉพาะในด้านการทำธุรกรรมทางการเงิน โครงสร้างพื้นฐานต่าง ๆ อย่าง
              Blockchain Platform และ Smart Contract Platform
              ทำให้การใช้งานและทำธุรกรรมบนบล็อกเชน ไม่ว่าจะเป็นการโอน การระดมทุน
              หรือการซื้อขายสินทรัพย์ดิจิทัล ทำได้ อย่างมีประสิทธิภาพ รวดเร็ว
              มีต้นทุนที่ต่ำลง และสิ่งสำคัญอย่างยิ่งคือความปลอดภัยของผู้ใช้งาน
              การทำธุรกรรมต่าง ๆ สามารถทำได้อย่างปลอดภัยและไร้ตัวกลาง ก็เพราะ
              Infrastructure ที่กล่าวมาข้างต้น
              มากไปกว่านั้นคือการพัฒนาของอุตสาหกรรมการเงินและสินทรัพย์ดิจิทัลในวันข้างหน้าก็จำเป็นอย่างยิ่งที่ต้องใช้สินทรัพย์ดิจิทัลที่เกี่ยวข้องกับ
              Platform ที่เป็นแกนหลักสาคัญของเทคโนโลยีบล็อกเชน
              SafeBsc-BLOCKCHAIN จึงเป็นทางเลือกการลงทุนในสินทรัพย์ดิจิทัลประเภท
              Blockchain Platform และ Smart Contract Platform อย่างเช่น
              เทคโนโลยี Layer 1, Layer 2 ที่เป็นรากฐาน หลักของ Blockchain
              ที่จะนำไปสู่การสร้างและพัฒนาของเทคโนโลยี Web3.0 และ Application
              กระจายศูนย์
              ซึ่งจะเปิดโอกาสให้กับผู้คนสามารถเข้ามามีส่วนร่วมได้มากขึ้น
              และทำให้
              การพัฒนาของบล็อกเชนเป็นไปได้อย่างมีประสิทธิภาพมากขึ้นในอนาคต
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              className="h_100"
            >
              <img
                src={`${prefix}/images/bitcoin.png`}
                alt=""
                style={{ maxWidth: "100%", height: 100 }}
              />
            </Box>
          </Grid>
        </Grid>
        {/* <Link
          href="https://drive.google.com/file/d/17YU-D7UvgC0OoLopEaYZzb0r7iEHOtFm/view"
          target="_blank"
          className="factSheet font_semi"
        >
          <ImportContactsIcon />
          Factsheet
        </Link> */}
        <Box className="tabFunds">
          <AppBar position="static">
            <Tabs
              value={tabs}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="off"
              aria-label="scrollable prevent tabs example"
            >
              <Tab label="ภาพรวมกลยุทธ์" {...a11yProps(0)} />
              <Tab label="สัดส่วนการลงทุน" {...a11yProps(1)} />
              <Tab label="ความเสี่ยงในกลยุทธ์" {...a11yProps(2)} />
              <Tab label="ค่าธรรมเนียม" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={tabs}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={tabs} index={0}>
              <Typography className="text_lg mb_1 font_semi color_primary">
                ข้อมูลกลยุทธ์
              </Typography>
              <Typography className="text_sm">
                บริษัทจะเน้นลงทุนในสินทรัพย์ดิจิทัลที่เป็นแกนหลักทั้งทางตรงและทางอ้อมของเทคโนโลยี
                Metaverse เต็มอัตรา (Fully Invested)
                โดยจะลงทุนในสินทรัพย์ดิจิทัลระดับสากลตาม มาตรฐาน และตาม
                Investment Framework ของบริษัทตามที่เห็นชอบให้ลงทุนได้ ได้แก่
                สินทรัพย์ดิจิทัลที่เกี่ยวข้องกับเทคโนโลยี Metaverse
                รวมไปถึงสินทรัพย์ดิจิทัลที่เกี่ยวข้องกับ Games, NFT และ
                Infrastructure ต่าง ๆ ใน ecosystem
                ที่เข้าหลักเกณฑ์ในการคัดเลือกซึ่งได้พิจารณาถึงมูลค่าสินทรัพย์ดิจิทัล
                (Market Capitalization), มีการยอมรับในอุตสาหกรรมปัจจุบัน
                และมีศักยภาพในการเติบโต ลักษณะของสินทรัพย์ดิจิทัล
                การควบคุมการกระจุกตัวของสินทรัพย์ดิจิทัล (Sector)
                โดยจำกัดกรอบของน้ำหนักการลงทุนในแต่ละสินทรัพย์ดิจิทัลอยู่ระหว่าง
                5-50% ของมูลค่าเงินทุน บริษัทฯ
                อาจมีการปรับเปลี่ยนรายชื่อสินทรัพย์ดิจิทัลได้
                โดยพิจารณาจากมูลค่าสินทรัพย์ดิจิทัล, การยอมรับในอุตสาหกรรม
                และศักยภาพในการเติบโตเป็นหลัก
              </Typography>
              <Box className="graph">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={dataGraph}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#82ca9d"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#82ca9d"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fillOpacity={1}
                      fill="url(#colorUv)"
                    />
                    <Area
                      type="monotone"
                      dataKey="pv"
                      stroke="#82ca9d"
                      fillOpacity={1}
                      fill="url(#colorPv)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
              <Grid container spacing={3} className="mb_2">
                <Grid item sm={6} xs={12}>
                  <Typography className="text_lg font_semi mb_1">
                    กลยุทธ์จัดการเงินทุนนี้เหมาะกับใคร
                  </Typography>
                  <ul style={{ listStyleType: "disc", marginLeft: 15 }}>
                    <li>ผู้ลงทุนที่ต้องการผลตอบแทนที่อยู่ในระดับสูง</li>
                    <li>
                      ผู้ลงทุนที่รับความผันผวนของตลาดสินทรัพย์ดิจิทัลได้ในระดับสูง
                    </li>
                  </ul>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_lg font_semi mb_1">
                    กลยุทธ์จัดการเงินทุนนี้ไม่เหมาะกับใคร
                  </Typography>
                  <ul style={{ listStyleType: "disc", marginLeft: 15 }}>
                    <li>
                      ผู้ลงทุนที่เน้นรักษาเงินต้นและต้องการ Drawdown ที่ต่ำ
                    </li>
                    <li>
                      ผู้ลงทุนที่ไม่สามารถรับความเสี่ยงจากอัตราแลกเปลี่ยนได้
                    </li>
                  </ul>
                  <Box className="noteBlockchain">
                    <Typography>
                      กลยุทธ์นี้เคยมีผลขาดทุนสูงสุด
                      <br /> (maximum drawdown)
                      <br /> ตั้งแต่จัดตั้งกลยุทธ์ คือ 0%
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography className="text_lg mb_1 font_semi color_primary">
                รายละเอียดกลยุทธ์
              </Typography>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    รูปแบบการบริหารจัดการเงินทุน
                  </Typography>
                  <Typography className="text_sm color_primary">
                    สะสมมูลค่า
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    ผู้ดูแลผลประโยชน์
                  </Typography>
                  <Typography className="text_sm">
                    บริษัท เซฟบีเอสซี จำกัด
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    วันที่เริ่มการจัดการเงินทุน
                  </Typography>
                  <Typography className="text_sm">1 กุมภาพันธ์ 2565</Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    ระยะเวลาการให้บริการ
                  </Typography>
                  <Typography className="text_sm">ไม่มีกำหนด</Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    วันทำการเพิ่มทุน / ลดทุน
                  </Typography>
                  <Typography className="text_sm">
                    ทุกวันทำการ (ตามปฎิทิน BOT)
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">เวลา</Typography>
                  <Typography className="text_sm">
                    ตลอดเวลา (Cut-Off 14:00)
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    มูลค่าขั้นต่ำการเพิ่มทุนครั้งแรก
                  </Typography>
                  <Typography className="text_sm">100,000 บาท</Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    มูลค่าขั้นต่ำการเพิ่มทุนครั้งถัดไป
                  </Typography>
                  <Typography className="text_sm">100,000 บาท</Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    มูลค่าขั้นต่ำการลดทุน
                  </Typography>
                  <Typography className="text_sm">ไม่มีขั้นต่ำ</Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    ระยะเวลาการเพิ่มทุน / ลดทุน
                  </Typography>
                  <Typography className="text_sm">T+2</Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography className="text_sm font_semi">
                    ผู้สนับสนุนการเพิ่มทุนหรือลดทุน
                  </Typography>
                  <Typography className="text_sm">
                    บริษัท เซฟบีเอสซี จำกัด
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tabs} index={1}>
              <Box className="imageCoin">
                <img src={`${prefix}/images/m_blockchain.png`} alt="" />
              </Box>
              <Typography className="text_sm" align="center" gutterBottom>
                สัดส่วนของสินทรัพย์
              </Typography>
              <Box className="listCoin">
                {listCoin.map((item: any, index: number) => {
                  return (
                    <ItemCoin
                      key={index}
                      image={item.image}
                      name={item.name}
                      fullName={item.fullName}
                      percentage={item.percentage}
                    />
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel value={tabs} index={2}>
              <Typography className="text_lg mb_2 font_semi color_secondary">
                ความเสี่ยงในกลยุทธ์จัดการเงินทุน
              </Typography>
              <Box className="boxLevel">
                <Box
                  className="itemLevel font_semi text_md"
                  sx={{ bgcolor: "#199f7f" }}
                ></Box>
                <Box
                  className="itemLevel font_semi text_md"
                  sx={{ bgcolor: "#43e6bf" }}
                ></Box>
                <Box
                  className="itemLevel font_semi text_md"
                  sx={{ bgcolor: "#94e6d2" }}
                ></Box>
                <Box
                  className="itemLevel font_semi text_md"
                  sx={{ bgcolor: "#c3ebe0" }}
                ></Box>
                <Box
                  className="itemLevel font_semi text_md"
                  sx={{ bgcolor: "#e2e08d" }}
                ></Box>
                <Box
                  className="itemLevel font_semi text_md"
                  sx={{ bgcolor: "#e2c18d" }}
                ></Box>
                <Box
                  className="itemLevel font_semi text_md"
                  sx={{ bgcolor: "#e28451" }}
                ></Box>
                <Box
                  className="itemLevel font_semi text_md"
                  sx={{ bgcolor: "#d24d2f" }}
                ></Box>
                <Box
                  className=""
                  sx={{
                    bgcolor: "#f1f2f4",
                    padding: "0.5rem",
                    borderRadius: "0.75rem",
                    maxWidth: 112,
                    width: "100%",
                    margin: { xs: "4px", lg: "-4px 4px" },
                  }}
                >
                  <Box
                    className="font_semi text_md w_100 itemLevel"
                    sx={{ bgcolor: "#ca1d1e", margin: "0 !important" }}
                  >
                    8
                  </Box>
                  <Typography
                    align="center"
                    className="font_semi text_sm"
                    style={{ marginTop: 5 }}
                  >
                    Safe-BLOCK
                  </Typography>
                </Box>
              </Box>
              <Typography className="text_sm mb_2">
                1. การจัดการเงินทุนในกลยุทธ์ Blockchain
                มิใช่การฝากเงินและมีความเสี่ยงของการจัดการเงินทุน
                ผู้ลงทุนอาจได้รับเงินทุนคืนมากกว่าหรือน้อยกว่าเงินลงทุนเริ่มแรก
                ดังนั้น
                ผู้ลงทุนควรลงทุนเมื่อเห็นว่าการจัดการเงินทุนในกลยุทธ์นี้เหมาะสมกับวัตถุประสงค์การลงทุนของผู้ลงทุนและผู้ลงทุนยอมรับความเสี่ยงที่อาจเกิดขึ้นจากการ
                จัดการเงินทุนได้
              </Typography>
              <Typography className="text_sm mb_2">
                2. กลยุทธ์ Blockchain
                มีการจัดการเงินทุนเฉพาะเจาะจงในสินทรัพย์ดิจิทัลที่มีมูลค่าตลาดอยู่ในระดับสูง
                แต่เมื่อเปรียบเทียบกับขนาดของตลาดทุนดั้งเดิมหรือ สินทรัพย์อื่น ๆ
                ยังถือว่ามีมูลค่าที่น้อยกว่ามาก
                ดังนั้นความผันผวนในเงินทุนของท่านจะอยู่ในระดับสูงที่สุด
                ผู้ลงทุนควรระมัดระวังจำนวนเงินลงทุนที่จะจัดสรรเข้า
                มายังกลยุทธ์นี้
              </Typography>
              <Typography className="text_sm mb_2">
                3. กลยุทธ์ Blockchain
                เป็นกลยุทธ์จัดการเงินทุนที่อ้างอิงสกุลเงินดอลลาร์สหรัฐเป็นหลัก
                นอกจากความเสี่ยงของความผันผวนของตลาดสินทรัพย์ดิจิทัล
                ที่อยู่ในระดับสูงที่สุดแล้ว
                ผู้ลงทุนอาจมีความเสี่ยงและความผันผวนจากอัตราแลกเปลี่ยนระหว่างค่าเงินบาทและค่าเงินดอลลาร์สหรัฐ
                ดังนั้นผู้ลงทุนจึงควร
                พิจารณาการกระจายความเสี่ยงของพอร์ตการลงทุนโดยรวมของตนเอง
                เพื่อลดความผันผวนและความเสี่ยงในการลงทุน
              </Typography>
              <Typography className="text_sm mb_2">
                4.
                ตลาดแลกเปลี่ยนสินทรัพย์ดิจิทัลไม่มีวันหยุดทาการแต่เนื่องจากบริษัทมีวันหยุดตามธนาคารแห่งประเทศ
                ไทย ผู้ลงทุนอาจจะไม่สามารถทารายการได้ในวันหยุด
                แต่ทั้งนี้หากเป็นช่วงที่ตลาดมีความอ่อนไหวค่อนข้างมาก
                บริษัทจะพิจารณาเป็นรายกรณีไป
              </Typography>
              <Typography className="text_lg mb_2 font_semi color_primary">
                การบริหารความเสี่ยงของบริษัท
              </Typography>
              <Typography className="text_sm mb_1">
                บริษัทเข้าใจถึงความเสี่ยงต่าง ๆ
                ในการจัดการเงินทุนในสินทรัพย์ดิจิทัลเป็นอย่างดี
                ดังนั้นบริษัทจึงจัดทามาตรฐานการคัดกรองสินทรัพย์ดิจิทัลถึง 2 ขั้น
                โดยสินทรัพย์ ดิจิทัลที่บริษัทจะจัดสรรในกลยุทธ์ต่าง ๆ
                จะต้องผ่านเกณฑ์ทั้ง 2 ขั้นก่อน ดังนี้
              </Typography>
              <Typography className="text_sm mb_1">
                <strong>ขั้นแรก</strong> SafeBsc Capital
                มีระบบควบคุมความเสี่ยงก่อนจัดสรรเงินทุนไปลงทุนในสินทรัพย์ดิจิทัลต่าง
                ๆ โดยสินทรัพย์ดิจิทัลนั้นจะต้องผ่านมาตรฐาน Investment Framework
                ของบริษัทที่มีเกณฑ์กลั่นกรองอย่างเข้มงวด เช่น
                การตรวจสอบมูลค่าตลาดของสินทรัพย์ (Market Capitalization) หรือ
                ปริมาณ การซื้อขาย (Volume) ของสินทรัพย์นั้น ๆ ,
                จำนวนตลาดที่รองรับการซื้อขายและประเภทของตลาดซื้อขาย (Exchange
                Availability) หรือ อายุของเหรียญ (Age of Token) และอื่น ๆ
                อีกมากมาย
              </Typography>
              <Typography className="text_sm">
                <strong>ขั้นที่สอง</strong>{" "}
                สินทรัพย์ดิจิทัลที่บริษัทจะจัดสรรเงินทุนตามกลยุทธ์จะต้องเข้าสู่การหารือและพิจารณาเป็นขั้นตอนถัดไป
                โดยจะต้องได้รับการอนุมัติจากทาง Investment Committee
                ของบริษัทก่อนที่จะจัดสรรเงินทุนเข้าไป
              </Typography>
            </TabPanel>
            <TabPanel value={tabs} index={3}>
              <Typography className="text_lg mb_2 font_semi color_primary">
                ข้อมูลและรายละเอียดการให้บริการ
              </Typography>
              <Box className="boxDetails">
                <Grid container spacing={4} justifyContent="center">
                  <Grid item sm={4} xs={12}>
                    <Typography
                      className="font_semi text_xl"
                      gutterBottom
                      align="center"
                    >
                      1.50%
                    </Typography>
                    <Typography className="text_sm" align="center">
                      ค่าธรรมเนียมการเพิ่มทุน
                    </Typography>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Typography
                      className="font_semi text_xl"
                      gutterBottom
                      align="center"
                    >
                      1.50%
                    </Typography>
                    <Typography className="text_sm" align="center">
                      ค่าธรรมเนียมการสับเปลี่ยนเข้า
                    </Typography>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Typography
                      className="font_semi text_xl"
                      gutterBottom
                      align="center"
                    >
                      2.00%
                    </Typography>
                    <Typography className="text_sm" align="center">
                      ค่าธรรมเนียมการบริหารจัดการกลยุทธ์
                    </Typography>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Typography
                      className="font_semi text_xl"
                      gutterBottom
                      align="center"
                    >
                      0.00%
                    </Typography>
                    <Typography className="text_sm" align="center">
                      ค่าธรรมเนียมการลดทุน (จากกำไร)
                    </Typography>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Typography
                      className="font_semi text_xl"
                      gutterBottom
                      align="center"
                    >
                      0.00%
                    </Typography>
                    <Typography className="text_sm" align="center">
                      ค่าธรรมเนียมการสับเปลี่ยนออก (จากกำไร)
                    </Typography>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Typography
                      className="font_semi text_xl"
                      gutterBottom
                      align="center"
                    >
                      ไม่มี
                    </Typography>
                    <Typography className="text_sm" align="center">
                      ค่าปรับกรณีลดทุนและสับเปลี่ยนออกก่อนระยะเวลาที่กำหนด
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          </SwipeableViews>
        </Box>
        <Box className="remark">
          <Typography className="text_xs" gutterBottom>
            หมายเหตุ
          </Typography>
          <Typography className="text_xs">
            การจัดการเงินทุนในกลยุทธ์ผ่านบริษัทจัดการเงินทุนในสินทรัพย์ดิจิทัล
            ไม่ใช่การลงทุนในกลยุทธ์รวม และไม่ใช่การฝากเงิน
            รวมทั้งไม่ได้อยู่ภายใต้ความคุ้มครองเงินฝากจึงมีความเสี่ยงจากการจัดการเงินทุน
            ซึ่งผู้ลงทุนอาจไม่ได้รับเงินลงทุนคือเต็มจำนวน -
            อยู่ภายใต้การกำกับดูแลของสำนักงาน ก.ล.ต. -
            การพิจารณาร่างหนังสือสรุปข้อมูลการบริหารจัดการเงินทุนในการเสนอขาย
            กลยุทธ์จัดการเงินทุนผ่านบริษัทจัดการเงินทุนในสินทรัพย์ดิจิทัลนี้มิได้เป็นการแสดงว่าสำนักงาน
            ก.ล.ต. ได้รับรองถึงความถูกต้องของข้อมูลในหนังสือ
            หรือได้ประกันราคาหรือผลตอบแทนของกลยุทธ์ที่เสนอ ขายนั้น ทั้งนี้
            บริษัทจัดการเงินทุนในสินทรัพย์ดิจิทัลได้สอบทานข้อมูลในหนังสือสรุปข้อมูลการบริหารจัดการเงินทุน
            ณ วันที่ 19 พฤษภาคม 2564 แล้วด้วยความระมัดระวังในฐานะผู้รับผิดชอบ
            ในการดำเนินการ
            ของการบริหารจัดการเงินทุนในสินทรัพย์ดิจิทัลและขอรับรองว่าข้อมูลดังกล่าวถูกต้องไม่เป็นเท็จและไม่ทำให้ผู้อื่นสำคัญผิด
          </Typography>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default DetailsPage;
