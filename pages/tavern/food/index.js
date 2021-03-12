import Head from "next/head";

import MenuCard from "../../../components/MenuCard";
import foodMenu from "../../../json/foodMenu.json";

import HorizontalNav from "../../../components/HorizontalNav";
import VerticalNav from "../../../components/VerticalNav";
import Footer from "../../../containers/Footer";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
    textAlign: "center",
    fontWeight: "800",
    fontFamily: "Halvetica",
    textShadow: "3px 3px 5px rgba(0,0,0,0.7)",
  },
  container: {
    backgroundColor: "#152219",
    width: "100vw",
    minHeight: "100vh",
  },
}));

export default function Food(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const mainMenu = props.menu.map((product, index) => {
    return (
      <MenuCard
        key={index}
        img={product.img}
        name={product.name}
        link={`food/${product.name}`}
        prio={index === 0 || index === 1}
      />
    );
  });

  return (
    <div className={classes.container}>
      <Head>
        <title key="title">
          El Greco Restaurant - Greek Food Menu - Nea Vrasna
        </title>
        <meta
          name="description"
          key="description"
          content="El Greco Restaurant Menu. Don't miss out, see all the tasty
          dishes we provide. Fishes, seafood, grilled Meat and more."
        />
        <meta property="og:title" content="El Greco Restaurant | Food Menu" key="og:title"/>
        <link rel="canonical" key="canonical" href="elgreco.vercel.app/tavern/food"/>
      </Head>
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <Grid
        container
        direction="column"
        style={{
          paddingLeft: matchesMD ? "0" : "3vw",
          paddingTop: "3vh",
          marginBottom: "5vh",
        }}
      >
        <Grid item container>
          <Typography
            className={classes.header}
            style={{ marginLeft: "5vw" }}
            variant="h4"
            gutterBottom
          >
            Elgreco Food Menu
          </Typography>
        </Grid>
        <Grid item container justify="space-evenly">
          {mainMenu}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  
  const menu = foodMenu.menus.map(category => {
    return ({name: category.name, img: category.img});
  })

  return {
    props: {
      menu
    },
  };
}
