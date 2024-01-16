import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";

export const menu = [
  // {
  //   name: "ภาพรวม",
  //   icon: <HomeOutlinedIcon style={{ color: "rgb(151, 163, 166)" }} />,
  //   href: "/dashboard",
  // },
  {
    name: "กลยุทธ์การลงทุน",
    icon: <EmojiObjectsOutlinedIcon style={{ color: "rgb(151, 163, 166)" }} />,
    href: "/dashboard/investment",
  },
  {
    name: "ประวัติการทำรายการ",
    icon: <CalendarTodayIcon style={{ color: "rgb(151, 163, 166)" }} />,
    href: "/dashboard/history",
  },
  {
    name: "ตลาดและข่าวสาร",
    icon: <TrendingUpOutlinedIcon style={{ color: "rgb(151, 163, 166)" }} />,
    href: "/dashboard/market-news",
  },
  {
    name: "เครื่องมือ",
    icon: <BuildOutlinedIcon style={{ color: "rgb(151, 163, 166)" }} />,
    href: "/dashboard/tools",
  },
];
