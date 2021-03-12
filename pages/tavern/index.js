import Head from "next/head";

import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav";
import TavernBody from "../../containers/TavernBody";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
}));

export default function Tavern() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.mainContainer}>
      <Head>
        <title key="title">El Greco Tavern - Nea Vrasna - Greek Restaurant</title>
        <meta
          name="description"
          key="description"
          content="El Greco Greek Tavern and Restaurant Homepage, make sure to treat
          yourself a meal in El Greco Restaurant."
        />
        <meta property="og:title" content="El Greco | Greek Restaurant" key="og:title"/>
        <link rel="canonical" key="canonical" href="elgreco.vercel.app/tavern"/>
      </Head>
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <TavernBody />
    </div>
  );
}
