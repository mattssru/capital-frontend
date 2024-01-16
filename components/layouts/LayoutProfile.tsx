import { Box, makeStyles } from "@material-ui/core";
import Link from "components/Link";
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 30,
    "& .linkAccount": {
      marginRight: 40,
      "&.active": {
        borderBottom: "2px solid #11b981",
      },
    },
  },
}));

const LayoutProfile = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Link
        href="/dashboard/account/profile"
        className={`linkAccount ${
          router.pathname.match("/account/profile") ? "active" : ""
        }`}
      >
        โปรไฟล์
      </Link>
      <Link
        href="/dashboard/account/security"
        className={`linkAccount ${
          router.pathname.match("/account/security") ? "active" : ""
        }`}
      >
        ความปลอดภัย
      </Link>
    </Box>
  );
};

export default LayoutProfile;
