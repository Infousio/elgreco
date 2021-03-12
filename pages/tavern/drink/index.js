import Head from "next/head";

import MenuCard from "../../../components/MenuCard";
import drinkMenu from "../../../json/drinkMenu.json";

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

export default function Drink(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("sm"));

  const mainMenu = props.menu.map((product, index) => {
    return (
      <MenuCard
        key={index}
        img={product.img}
        name={product.name}
        link={`drink/${product.name}`}
        prio={index === 0 || index === 1}
      />
    );
  });

  return (
    <div className={classes.container}>
      <Head>
        <title key='title'>
          El Greco Restaurant - Drink Menu
        </title>
        <meta
          name="description"
          key="description"
          content="El Greco Restaurant Drink Menu. Check out all the drinks which
          you can accompany the food with. Wine, beer, Ouzo, Tsipouro and more."
        />
        <meta property="og:title" content="El Greco Restaurant | Drink Menu" key="og:title"/>
        <link rel="canonical" key="canonical" href="https://elgreco.vercel.app/tavern/drink"/>
      </Head>
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <Grid
        container
        direction="column"
        style={{
          paddingLeft: matchesMD ? "0" : "5vw",
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
            Elgreco Drink Menu
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
  
  const menu = drinkMenu.menus.map(category => {
    return ({name: category.name, img: category.img});
  })

  return {
    props: {
      menu
    },
  };
}
