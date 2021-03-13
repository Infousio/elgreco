import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import VerticalNav from "../components/VerticalNav";
import MainBody from "../containers/MainBody";
import HorizontalNav from "../components/HorizontalNav";

const useStyles = makeStyles((theme) => ({
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
    <Layout>
      <Head>
        <title key="title">
          El Greco - Greek Restaurant and Rooms - Nea Vrasna
        </title>
        <meta
          name="description"
          key="description"
          content="Homepage to
          El Greco Restaurant and El Greco Rooms. We provide excellent quality Greek
          Food and Accomodation."
        />
        <meta
          property="og:title"
          content="El Greco | Homepage"
          key="og:title"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://elgreco.vercel.app"
        />
      </Head>
      <Image
        src="/backgroundMain.webp"
        alt="Nea Vrasna Drone View"
        layout="fill"
        priority
        quality={100}
        className={classes.bgImage}
      />
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <MainBody />
    </Layout>
  );
}
