import { Box, makeStyles, Typography } from "@material-ui/core";
import { DashboardLayout } from "components/layouts/DashboardLayout";
import MaterialTable from "material-table";
import React from "react";

const useStyles = makeStyles(() => ({ root: {} }));

const mockTable = [
  {
    date: "29/4/2020",
    fund: "1234",
    type: "1 type",
    nav: "1 nav",
    unit: "1 unit",
    total: "195 total",
    status: "online",
    note: "note test",
  },
  {
    date: "29/4/2020",
    fund: "1234",
    type: "2 type",
    nav: "2 nav",
    unit: "2 unit",
    total: "185 total",
    status: "offline",
    note: "note test",
  },
  {
    date: "29/4/2020",
    fund: "1234",
    type: "3 type",
    nav: "3 nav",
    unit: "3 unit",
    total: "115 total",
    status: "online",
    note: "note test",
  },
  {
    date: "29/4/2020",
    fund: "1234",
    type: "4 type",
    nav: "4 nav",
    unit: "4 unit",
    total: "181 total",
    status: "offline",
    note: "note row4",
  },
  {
    date: "29/4/2020",
    fund: "1234",
    type: "2 type",
    nav: "2 nav",
    unit: "2 unit",
    total: "185 total",
    status: "offline",
    note: "note test",
  },
];

const index = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Typography variant="h2" className="mb_2">
          ประวัติทำรายการ
        </Typography>
        <Box className="data-table">
          <MaterialTable
            columns={[
              { title: "Date", field: "date" },
              { title: "Fund", field: "fund" },
              { title: "Type", field: "type" },
              { title: "NAV", field: "nav" },
              { title: "Unit", field: "unit" },
              { title: "Total value", field: "total" },
              { title: "สถานะ", field: "status" },
              { title: "หมายเหตุ", field: "note" },
            ]}
            data={mockTable}
            options={{
              showTitle: false,
            }}
          />
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default index;
