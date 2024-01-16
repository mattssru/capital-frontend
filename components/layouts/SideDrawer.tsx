import React from "react";
import {
  IconButton,
  List,
  ListItemIcon,
  Toolbar,
  Hidden,
  Drawer,
  CssBaseline,
  AppBar,
  Box,
  Popover,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Link from "components/Link";
import { menu } from "mock/menu";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import prefix from "utils/path";

const drawerWidth = 280;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiIconButton-edgeStart": {
        marginLeft: 0,
      },
      "& .isLogin": {
        marginLeft: "auto",
        [theme.breakpoints.down("sm")]: {
          marginLeft: 0,
        },
        "& button": {
          [theme.breakpoints.down("sm")]: {
            padding: 12,
          },
        },
      },
      "& .drawer": {
        "& .MuiDrawer-paperAnchorDockedLeft": {
          // boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)",
          borderRight: "none",
        },
        [theme.breakpoints.up("md")]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      "& .appBar": {
        backgroundColor: "#fff",
        boxShadow: "0 .5rem 1rem rgba(0,0,0,.08)",
        "& .MuiToolbar-root": {
          padding: "0 !important",
          minHeight: 80,
          [theme.breakpoints.down("sm")]: {
            minHeight: 70,
          },
        },
        [theme.breakpoints.up("md")]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
      "& .menuButton": {
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
      "& .logo": {
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        color: theme.palette.primary.main,
        [theme.breakpoints.down("xs")]: {
          fontSize: "1rem !important",
        },
        "& img": {
          height: 30,
          marginRight: 10,
        },
      },
    },
    toolbar: {
      minHeight: 80,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 8%)",
      [theme.breakpoints.down("sm")]: {
        minHeight: 70,
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: 20,
      },
      "& .logo": {
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        color: theme.palette.primary.main,
        [theme.breakpoints.down("xs")]: {
          fontSize: "1rem !important",
        },
        "& img": {
          height: 40,
          marginRight: 10,
        },
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#2b353e",
      "& .listMenu": {
        paddingTop: 0,
        "& .btnMenu": {
          color: "rgb(151, 163, 166)",
          fontSize: "1rem",
          lineHeight: "1rem",
          height: 60,
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          [theme.breakpoints.down("xs")]: {
            height: 50,
          },
        },
        "& .active": {
          borderLeft: "4px solid #11b981",
          color: "#11b981",
          "& svg": {
            color: "#11b981 !important",
          },
        },
      },
      "& .MuiListItemIcon-root": {
        minWidth: 40,
      },
    },
    popover: {
      "& .MuiPopover-paper": {
        borderRadius: 5,
        border: "2px solid #000",
        boxShadow: "none",
        backgroundColor: "#fff",
        maxWidth: 160,
        width: "100%",
        padding: "10px 0",
      },
      "& .dropdownMenu": {
        "& a": {
          display: "flex",
          height: 40,
          alignItems: "center",
          paddingLeft: 20,
          fontSize: 14,
          lineHeight: "24px",
          fontFamily: "Prompt-Regular",
          color: "#000",
          "&:hover": {
            backgroundColor: "#cdecea",
          },
          "& svg": {
            marginRight: 15,
          },
        },
      },
    },
  })
);

interface Props {
  window?: () => Window;
}

const SideDrawer = (props: Props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };
  const handleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDropdown(event.currentTarget);
  };
  const handleCloseDropdown = () => {
    setDropdown(null);
  };

  const open = Boolean(dropdown);
  const id = open ? "simple-popover" : undefined;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <>
      <Link href="/" className={classes.toolbar} onClick={handleCloseDrawer}>
        <Box className="logo font_semi text_md">
          <img src={`${prefix}/images/logo.png`} alt="" />
          SafeBSC Capital
        </Box>
      </Link>
      <List className="listMenu" onClick={handleCloseDrawer}>
        <Link
          className={`btnMenu ${
            router.pathname === "/dashboard" ? "active" : ""
          }`}
          href="/dashboard"
        >
          <ListItemIcon>
            <HomeOutlinedIcon style={{ color: "rgb(151, 163, 166)" }} />
          </ListItemIcon>
          ภาพรวม
        </Link>
        {menu.map((menu, index) => (
          <Link
            className={`btnMenu ${
              router.pathname.match(menu.href) ? "active" : ""
            }`}
            key={index}
            href={menu.href}
            // onClick={() => {
            //   router.push(menu.href);
            // }}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>
            {menu.name}
          </Link>
        ))}
      </List>
    </>
  );
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className="appBar">
        <Container maxWidth="lg">
          <Toolbar style={{ justifyContent: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="menuButton"
              style={{ padding: 0 }}
            >
              <MenuIcon color="primary" style={{ fontSize: 30 }} />
            </IconButton>
            <Hidden mdUp>
              <Link href="/" className="d_flex w_100">
                <Box className="logo font_semi text_md">
                  <img src={`${prefix}/images/logo.png`} alt="" />
                  SafeBSC Capital
                </Box>
              </Link>
            </Hidden>
            <Box className="isLogin">
              <IconButton
                aria-describedby={id}
                onClick={handleDropdown}
                style={{ padding: 0 }}
              >
                <AccountCircleOutlinedIcon
                  color="primary"
                  style={{ fontSize: 32 }}
                />
              </IconButton>
            </Box>
            <Popover
              id={id}
              open={open}
              anchorEl={dropdown}
              onClose={handleCloseDropdown}
              className={classes.popover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box className="dropdownMenu">
                <Link
                  href="/dashboard/account/profile"
                  onClick={handleCloseDropdown}
                >
                  <AccountCircleOutlinedIcon />
                  โปรไฟล์
                </Link>
                <Link href="/dashboard/verify">
                  <VerifiedUserIcon />
                  ยืนยันตัวตน
                </Link>
                <Link href="">
                  <ExitToAppIcon />
                  ออกจากระบบ
                </Link>
              </Box>
            </Popover>
          </Toolbar>
        </Container>
      </AppBar>
      <nav className="drawer" aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdDown implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </Box>
  );
};

export default SideDrawer;
