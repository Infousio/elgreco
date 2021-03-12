import Head from "next/head";

import RoomsBody from '../../containers/RoomsBody';
import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav";
import Footer from '../../containers/Footer';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
}));

export default function Romms() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.mainContainer}>
      <Head>
        <title key="title">
          El Greco Rooms - Nea Vrasna
        </title>
        <meta
          name="description"
          key="description"
          content="El Greco Rooms. Book a room in the Hotel and be 10 meters
          away from the sea. Located in a quiet neighbourhood for extra relaxation."
        />
        <meta property="og:title" content="El Greco Rooms | Homepage" key="og:title"/>
        <link rel="canonical" key="canonical" href="https://elgreco.vercel.app/rooms"/>
      </Head>
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <RoomsBody />
      <Footer />
    </div>
  );
};

