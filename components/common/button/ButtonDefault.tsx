import { Button, makeStyles, Theme } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    fontFamily: "Prompt-SemiBold",
    padding: "6px 10px",
    color: (props: any) => props.colorfont || "#fff",
    display: (props: any) => props.display || "flex",
    justifyContent: (props: any) => props.justify,
    height: (props: any) => props.height || 45,
    fontSize: (props: any) => props.fontsize || "0.85rem",
    maxWidth: (props: any) => props.maxwidth,
    minWidth: (props: any) => props.minwidth || 55,
    border: (props: any) => props.border,
    borderRadius: (props: any) => props.borderradius || 8,
    boxShadow: (props: any) => props.boxshadow || "none !important",
    margin: (props: any) => props.margin,
    background: (props: any) => props.background,
    backgroundColor: (props: any) => props.bgcolor,
    position: (props: any) => props.position,
    top: (props: any) => props.top,
    bottom: (props: any) => props.bottom,
    left: (props: any) => props.left,
    right: (props: any) => props.right,
    zIndex: (props: any) => props.zindex,
    [theme.breakpoints.down("xs")]: {
      maxWidth: (props: any) => props.maxwidthxs,
    },
    "&:hover": {
      backgroundColor: (props: any) => props.bghover || "#888",
      color: (props: any) => props.colorhover,
      "& svg path": {
        stroke: "#fff",
        fill: "#fff",
      },
      "& svg": {
        color: "#fff !important",
      },
    },
    "& .MuiButton-startIcon": {
      margin: (props: any) => props.marginicon,
    },
    "& svg": {
      fontSize: (props: any) => props.fontsizeicon,
    },
  },
  disabled: {},
}));

const ButtonDefault = (props: any) => {
  const classes = useStyles(props);
  const { root } = useStyles(props);
  const {
    title,
    disabled,
    startIcon,
    endIcon,
    onClick,
    color,
    href,
    onClose,
    type,
    variant = "contained",
    ...rest
  } = props;
  return (
    <Button
      className={`${root}`}
      variant={variant}
      color={color}
      href={href}
      classes={{
        disabled: classes.disabled,
      }}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {title}
    </Button>
  );
};
export default ButtonDefault;
