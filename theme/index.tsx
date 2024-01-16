import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiTab: {
      root: {
        fontFamily: "Work Sans",
        fontWeight: "normal",
      },
    },
    MuiFormHelperText: {
      contained: {
        fontSize: `18px`,
        lineHeight: `18px`,
      },
      root: {
        fontSize: `18px`,
        lineHeight: `18px`,
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          WebkitFontSmoothing: "auto",
          fontFamily: [
            "Work Sans",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          fontSize: "0.95rem",
          lineHeight: "1.4rem",
          maxWidth: "1920px",
          color: "#000",
          backgroundColor: "#fff",
          "@media (max-width: 1024px)": {
            backgroundSize: "70vw auto",
          },
          "@media (max-width: 767px)": {
            backgroundSize: "40% auto",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          },
        },
        article: {
          overflow: "hidden",
        },
        ".MuiTab-wrapper": {
          color: "#000",
        },
        ".MuiButton-root": {
          boxShadow: "none",
          borderRadius: 7,
        },
        ".MuiButton-outlined": {
          borderColor: "#172978",
          color: "#000 !important",
          "&:hover": {
            color: "#fff !important",
          },
        },
        // ".MuiContainer-root": {
        //   padding: "0 15px !important",
        // },
        ".MuiToolbar-gutters": {
          padding: "0 15px !important",
        },
        ".MuiLink-root": {
          textDecoration: "none",
          cursor: "pointer",
        },
        ".MuiToolbar-root .MuiContainer-root": {
          "@media (max-width: 767px)": {
            padding: "0 !important",
          },
        },
        ".MuiFormControl-root": {
          width: "100%",
          borderRadius: 5,
          "& label , &.MuiFormLabel-root.Mui-disabled": {
            fontSize: "1rem",
            lineHeight: "1.1rem",
            fontFamily: "Work Sans",
            transform: "none !important",
            position: "relative",
            marginBottom: 8,
          },
          "& .MuiFormLabel-asterisk": {
            color: "red",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: 5,
            backgroundColor: "#fff",
          },
          ".MuiInputBase-root": {
            fontFamily: "Work Sans !important",
            fontWeight: 400,
            "@media (max-width: 501px)": {
              marginBottom: 10,
            },
          },
          "& input, select": {
            height: 45,
            fontSize: "1rem",
            boxShadow: "none",
            padding: "0 20px",
            marginTop: 0,
          },
          "& .Mui-disabled": {
            color: "#000",
            backgroundColor: "#F2F2F2",
          },
          "& .MuiInput-underline:before, .MuiInput-underline:after, legend": {
            display: "none",
          },
          "& fieldset": {
            top: 0,
            padding: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 20px center",
            borderColor: "transparent",
          },
          "& .MuiFormHelperText-contained": {
            fontSize: "0.8rem",
            marginLeft: 0,
            marginTop: 15,
          },
        },
        ".MuiTableCell-root": {
          fontFamily: "DBHeavent",
          fontWeight: "normal !important",
        },
        a: {
          textDecoration: "none",
          curser: "pointer",
          MozTransition: "all .2s ease-in",
          WebkitTransition: "all .2s ease-in",
          transition: "all .2s ease-in",
        },
        "&:focus, &:hover, &:visited, &:link, &:active": {
          textDecoration: "none",
        },
        MuiButton: {
          text: {
            color: "white",
          },
        },
        strong: {
          fontFamily: "Work Sans",
          fontWeight: 700,
        },
        button: {
          fontFamily: "Work Sans",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#11b981",
      contrastText: "#fff",
    },
    secondary: {
      main: "#172978",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "#fff",
    },
    info: {
      main: "#bdbdbd",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Work Sans",
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "Work Sans",
      fontSize: "2.25rem",
      lineHeight: "2.25rem",
      fontWeight: 600,
      "@media (max-width: 767px)": {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
      },
    },
    h2: {
      fontFamily: "Work Sans",
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontWeight: 600,
      "@media (max-width: 767px)": {
        fontSize: "1.4rem",
        lineHeight: "1.75rem",
      },
    },
    h3: {
      fontFamily: "Work Sans",
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontWeight: 600,
      "@media (max-width: 767px)": {
        fontSize: "1.4rem",
        lineHeight: "1.75rem",
      },
    },
    h4: {
      fontFamily: "Work Sans",
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontWeight: 600,
      "@media (max-width: 767px)": {
        fontSize: "1.4rem",
        lineHeight: "1.75rem",
      },
    },
    h5: {
      fontFamily: "Work Sans",
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontWeight: 600,
      "@media (max-width: 767px)": {
        fontSize: "1.4rem",
        lineHeight: "1.75rem",
      },
    },
    h6: {
      fontFamily: "Work Sans",
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontWeight: 600,
      "@media (max-width: 767px)": {
        fontSize: "1.4rem",
        lineHeight: "1.75rem",
      },
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: "1.4rem",
      fontFamily: "Work Sans",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  },
});

export default theme;
