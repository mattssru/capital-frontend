import {
  AppBar,
  Box,
  Grid,
  Hidden,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography,
} from "@material-ui/core";
import { IconInvesment, IconPl, IconTotal } from "components/icon";
import Link from "components/Link";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CardNews from "components/CardNews";
import { ButtonDefault } from "components/common/button";
import { CardBlockChain } from "@components/*";
import { investment } from "mock/investment";
import { DashboardLayout } from "components/layouts/DashboardLayout";
import prefix from "utils/path";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .boxView": {
      display: "flex",
      alignItems: "center",
      padding: "1rem",
      borderRadius: "0.5rem",
      backgroundColor: "#f1f2f4",
      "& .imgView": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "100%",
        background: "linear-gradient(to right, #183b7e, #0fa49c)",
        marginRight: 15,
      },
    },
    "& .tabsOverview": {
      "& .wrapperTabs": {
        backgroundColor: "#f1f2f4",
        borderRadius: "0.5rem",
        padding: "1.5rem",
        marginBottom: 30,
        "& .graph": {
          height: 450,
        },
        "& .itemView": {
          "& a:hover": {
            color: theme.palette.primary.main,
            textDecoration: "underline !Important",
          },
          [theme.breakpoints.down("xs")]: {
            display: "block",
          },
          "& p": {
            marginRight: 10,
            [theme.breakpoints.down("xs")]: {
              marginBottom: 5,
            },
          },
        },
      },
      "& .MuiAppBar-root": {
        backgroundColor: "#fff",
        boxShadow: "none",
      },
      "& .MuiTabs-indicator": {
        display: "none",
      },
      "& .MuiTabs-root": {
        minHeight: 55,
      },
      "& .MuiTabs-flexContainer": {
        margin: "0 -5px",
      },
      "& .MuiTab-root": {
        minHeight: 45,
        backgroundColor: "#f1f2f4",
        borderRadius: "0.5rem",
        margin: "0 5px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.18)",
        [theme.breakpoints.down("xs")]: {
          fontSize: "0.775rem",
        },
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main,
          "& span": {
            color: "#fff",
          },
        },
      },
    },
  },
}));
const mockNews = [
  {
    image: `${prefix}/images/news_01.jpeg`,
    title:
      "Sky Mavis วางแผนที่จะกลายเป็น ‘องค์กร Zero-Trust’ หลังจาก Ronin โดนแฮ็คไป 600 ล้านดอลลาร์",
    href: "https://bitcoinaddict.org/2022/04/28/sky-mavis-plans-to-become-a-zero-trust-organization/",
    description: "Sky Mavis บริษัทที่อยู่เบื้องหลังเกม Axie Infinity กล่า […]",
    nameNews: "Axie Infinity",
  },
  {
    image: `${prefix}/images/news_02.jpeg`,
    title:
      "Supply ของ LUNA ลดลงสู่ระดับต่ำสุดตลอดกาล – แต่อย่าเพิ่งเรียกว่า”ภาวะเงินฝืด”",
    href: "https://bitcoinaddict.org/2022/04/28/luna-supply-drops-to-all-time-low-but-dont-call-it-deflationary/",
    description: "Supply ของ LUNA ซึ่งเป็นโทเค็นดั้งเดิมของ Terra blockch […]",
    nameNews: "cryptocurrency",
  },
];
const mockData = {
  totalPL: 58.06,
  totalPort: 10000,
  count: 3,
  data: [
    {
      uv: 4000,
      pv: 2400,
    },
    {
      uv: 3000,
      pv: 1398,
    },
    {
      uv: 2000,
      pv: 9800,
    },
    {
      uv: 2780,
      pv: 3908,
    },
    {
      uv: 1890,
      pv: 4800,
    },
    {
      uv: 2390,
      pv: 3800,
    },
    {
      uv: 3490,
      pv: 4300,
    },
  ],
};
// const mockBlockchain = [
//   {
//     href: "/investment/funds/m-blockchain",
//     name: "M-BLOCKCHAIN",
//     number: "+0.94",
//     description:
//       "กลยุทธ์ที่ลงทุนในกลุ่ม Blockchain พร้อมการ Rebalance อัตโนมัติเพื่อประสิทธิภาพสูงสุด",
//   },
//   {
//     href: "/investment/funds/m-metaverse",
//     name: "M-METAVERSE",
//     number: "-21.08",
//     description:
//       "กลยุทธ์ที่ลงทุนในกลุ่มสินทรัพย์ Metaverse พร้อมการ Rebalance อัตโนมัติเพื่อประสิทธิภาพสูงสุด",
//   },
//   {
//     href: "/investment/funds/m-bitcoin",
//     name: "M-Bitcoin Alpha",
//     number: "+139.83",
//     description:
//       "กลยุทธ์ระยะยาวที่ลงทุนในสินทรัพย์ที่ได้รับความเชื่อมั่นสูงสุดอย่าง Bitcoin",
//   },
//   {
//     href: "/investment/funds/m-large",
//     name: "M-Large Cap",
//     number: "+236.42",
//     description:
//       "กลยุทธ์ที่คัดสรรกลุ่มสินทรัพย์อันดับต้นของตลาด พร้อมการ Rebalance อัตโนมัติเพื่อประสิทธิภาพสูงสุด",
//   },
// ];
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
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box pt={3}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DashboardPage = () => {
  const classes = useStyles();
  const [tabs, setTabs] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setTabs(newValue);
  };
  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Typography variant="h2" className="mb_2">
          ภาพรวม
        </Typography>
        <Box className="listView">
          <Grid container spacing={3}>
            <Grid item md={4} sm={12} xs={12}>
              <Box className="boxView">
                <Box className="imgView">
                  <IconTotal />
                </Box>
                <Box>
                  <Box className="text_xs">มูลค่ารวม</Box>
                  <Box className="text_md font_semi">
                    {mockData.totalPort} USDT
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Box className="boxView">
                <Box className="imgView">
                  <IconInvesment />
                </Box>
                <Box>
                  <Box className="text_xs">จำนวนกลยุทธ์</Box>
                  <Box className="text_md font_semi">
                    {mockData.count} กลยุทธ์
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Box className="boxView">
                <Box className="imgView">
                  <IconPl />
                </Box>
                <Box>
                  <Box className="text_xs">Total P/L</Box>
                  <Box
                    className={`text_md font_semi ${
                      mockData.totalPL > 0 ? "color_primary" : "color_warning"
                    }`}
                  >
                    {mockData.totalPL > 0
                      ? `+${mockData.totalPL}`
                      : mockData.totalPL}
                    %
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="body1" className="mb_2 mt_2">
          <span
            className="color_warning"
            style={{
              textDecoration: "underline",
              display: "inline-block",
              marginRight: 5,
              marginTop: 20,
            }}
          >
            หมายเหตุ
          </span>
          มูลค่าการลงทุนของท่านในวันนี้ (วันที่ T)
          จะถูกยืนยันและแสดงผลในวันทำการถัดไป (วันที่ T+1)
        </Typography>
        <Box className="tabsOverview">
          <AppBar position="static">
            <Tabs
              value={tabs}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="การลงทุนโดยรวม" {...a11yProps(0)} />
              <Tab label="ผลตอบแทนกลยุทธ์" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={tabs} index={0}>
            <Box className="wrapperTabs">
              <Box className="d_flex align_center justify_between mb_2 itemView">
                <Box sx={{ marginBottom: { xs: "15px" } }}>
                  <Typography className="text_xs">สรุปการลงทุน</Typography>
                  <Typography className="text_xs color_gray">
                    สรุปการลงทุนของทุกกลยุทธ์ของคุณ
                  </Typography>
                </Box>
                <Box className="d_flex align_center itemView">
                  <Typography className="text_xs d_flex align_center">
                    <Box
                      component="span"
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "100%",
                        bgcolor: "#54c7e0",
                        display: "inline-block",
                        marginRight: 5,
                      }}
                    ></Box>
                    มูลค่าการลงทุนรวม
                  </Typography>
                  <Typography className="text_xs d_flex align_center">
                    <Box
                      component="span"
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "100%",
                        bgcolor: "#2ad8ae",
                        display: "inline-block",
                        marginRight: 5,
                      }}
                    ></Box>
                    จำนวนการลงทุนสะสม
                  </Typography>
                  <Link
                    href="/history"
                    className="text_underline text_xs d_inlineflex align_center"
                  >
                    <AccessTimeIcon
                      style={{ fontSize: 15, color: "gray", marginRight: 5 }}
                    />
                    ประวัติการทำรายการ
                  </Link>
                </Box>
              </Box>
              <Box className="graph">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    // width={730}
                    // height={250}
                    data={mockData.data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#8884d8"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8884d8"
                          stopOpacity={0}
                        />
                      </linearGradient>
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
            </Box>
          </TabPanel>
          <TabPanel value={tabs} index={1}>
            <Box className="wrapperTabs">
              <Box className="mb_2">
                <Typography className="text_xs">
                  ผลกำไร / ขาดทุนที่ยังไม่เกิดขึ้นจริง (Unrealized Gain/Loss)
                </Typography>
                <Typography className="text_xs color_gray">
                  ท่านสามารถตรวจสอบผลกำไร / ขาดทุน ที่ยังไม่เกิดขึ้นจริง
                  แบ่งตามกลยุทธ์การลงทุนได้ผ่านกราฟด้านล่าง
                  ซคางแบ่งแยกตามกลยุทธ์ที่ท่านได้ลงทุน
                </Typography>
              </Box>
              <Box className="graph">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    // width={730}
                    // height={250}
                    data={mockData.data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#8884d8"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8884d8"
                          stopOpacity={0}
                        />
                      </linearGradient>
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
            </Box>
          </TabPanel>
        </Box>
        <Typography className="font_semi text_md mb_1">
          กลยุทธ์ของคุณ
        </Typography>
        <Link href="/" className="color_gray text_xs mb_2 d_inlineblock">
          ยังไม่มีการลงทุน
        </Link>
        <Typography className="font_semi text_md mb_1">กลยุทธ์แนะนำ</Typography>
        <Grid container spacing={3}>
          {investment.map((item: any, index: number) => {
            return (
              <Grid item lg={3} md={6} sm={6} xs={12} key={index}>
                <CardBlockChain
                  href={item.href}
                  name={item.name}
                  roi={item.roi}
                  description={item.description}
                />
              </Grid>
            );
          })}
        </Grid>
        <Typography className="font_semi text_md mb_1 mt_2">ข่าวสาร</Typography>
        <Grid container spacing={3}>
          {mockNews.map((item: any, index: number) => {
            return (
              <Grid item lg={8} sm={12} key={index}>
                <CardNews
                  image={item.image}
                  title={item.title}
                  href={item.href}
                  description={item.description}
                  nameNews={item.nameNews}
                />
              </Grid>
            );
          })}
          <Hidden xsDown>
            <Grid item lg={4} sm={12}></Grid>
          </Hidden>
        </Grid>
        <ButtonDefault
          title="ดูทั้งหมด"
          color="primary"
          maxwidth="150px"
          margin="50px auto 0"
        />
      </Box>
    </DashboardLayout>
  );
};

export default DashboardPage;
