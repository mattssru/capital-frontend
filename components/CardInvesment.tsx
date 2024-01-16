import { makeStyles, Box, Typography } from "@material-ui/core";
import React from "react";
import prefix from "utils/path";
import Link from "./Link";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 180,
    backgroundImage: `url(${prefix}/images/bgCoin.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 100%",
    padding: "1rem 1.25rem",
    backgroundColor: "#f1f2f4",
    borderRadius: ".75rem",
  },
}));

const CardInvesment = (props: any) => {
  const { root } = useStyles(props);
  return (
    <Link
      href={{
        pathname: "/dashboard/investment/[details]",
        query: { details: props.href },
      }}
      // onClick={() => {
      //   router.push({
      //     pathname: "/investment/[details]",
      //     query: { details: props.investmentName },
      //   });
      // }}
      className={`${root}`}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ color: "#172978" }}
      >
        <Typography component="div" className="font_semi">
          {props.name}
        </Typography>
        {/* <div>STAR</div> */}
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography component="div" className="font_semi color_secondary">
          {props.priceCard} บาท
          <Typography component="p" className="text_xs color_black">
            {props.dateCard}
          </Typography>
        </Typography>
        <Typography
          component="div"
          className="text_xs color_secondary text_right"
        >
          ROI
          <Typography
            component="p"
            className={
              props.roi > 0
                ? "font_semi color_primary"
                : "font_semi color_warning"
            }
          >
            {props.roi > 0 ? `+${props.roi}` : props.roi}%
          </Typography>
        </Typography>
      </Box>
    </Link>
  );
};

export default CardInvesment;
