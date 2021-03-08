import Image from "next/image";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import VerticalNav from "../components/VerticalNav";
import MainBody from "../containers/MainBody";
import HorizontalNav from "../components/HorizontalNav";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100vw",
    height: "100vh",
  },
  bgImage: {
    objectFit: "cover",
    objectPosition: "center",
    zIndex: -1,
  },
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.mainContainer}>
      <Image
        src="/backgroundMain.webp"
        alt="Nea Vrasna Drone View"
        layout="fill"
        priority
        className={classes.bgImage}
      />
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <MainBody />
    </div>
  );
}
