import { Box, makeStyles, Typography } from "@material-ui/core";
import { DashboardLayout } from "components/layouts/DashboardLayout";
import React from "react";

const useStyles = makeStyles(() => ({ root: {} }));

const index = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Box className={classes.root}>
        <Typography variant="h2">เครื่องมือ</Typography>
      </Box>
    </DashboardLayout>
  );
};

export default index;
