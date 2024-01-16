import {
  AppBar,
  Box,
  Grid,
  InputAdornment,
  makeStyles,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import { ButtonDefault } from "components/common/button";
import { IconInvesment } from "components/common/icon";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CardInvesment from "components/CardInvesment";
import { investment } from "mock/investment";
import { DashboardLayout } from "components/layouts/DashboardLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .topPage": {
      "& h2": {
        [theme.breakpoints.down("xs")]: {
          marginBottom: 15,
        },
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    "& .tabsInvesment": {
      "& header": {
        backgroundColor: "transparent",
        boxShadow: "none",
        "& .MuiButtonBase-root": {
          minWidth: "inherit",
          marginRight: 20,
          fontSize: "100%",
        },
      },
    },
    "& .inputSearch": {
      margin: "30px 0",
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#f1f2f4 !important",
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
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: "30px 0" }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const InvestmentPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
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
          <Typography variant="h2">กลยุทธ์</Typography>
          <ButtonDefault
            title="เปรียบเทียบกลยุทธ์"
            border="2px solid #11b981"
            bgcolor="#fff"
            bghover="#11b981"
            colorfont="#000"
            colorhover="#fff"
            startIcon={<IconInvesment />}
            maxwidth="170px"
            height="40px"
          />
        </Box>
        <TextField
          className="inputSearch"
          id="outlined-search"
          type="search"
          variant="outlined"
          placeholder="ค้นหากลยุทธ์"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box className="tabsInvesment">
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="ติดตาม" {...a11yProps(0)} />
              <Tab label="ทั้งหมด" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Grid container spacing={3}>
              {investment.map((item: any, index: number) => {
                return (
                  <Grid item xl={3} lg={4} md={6} sm={6} xs={12} key={index}>
                    <CardInvesment
                      href={item.href}
                      name={item.name}
                      priceCard={item.priceCard}
                      dateCard={item.dateCard}
                      roi={item.roi}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            ทั้งหมด
          </TabPanel>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default InvestmentPage;
