import Head from "next/head";

import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav";
import TavernBody from "../../containers/TavernBody";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Tavern() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <Head>
        <title key="title">
          El Greco Tavern - Nea Vrasna - Greek Restaurant
        </title>
        <meta
          name="description"
          key="description"
          content="El Greco Greek Tavern and Restaurant Homepage, make sure to treat
          yourself a meal in El Greco Restaurant."
        />
        <meta
          property="og:title"
          content="El Greco | Greek Restaurant"
          key="og:title"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://elgrecovrasna.gr/tavern"
        />
      </Head>
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <TavernBody />
    </div>
  );
}
