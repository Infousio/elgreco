import {useEffect, useState} from 'react';
import Head from "next/head";
import ReactGA from "react-ga";

import MenuCard from "../../../components/MenuCard";
import fooden from "../../../json/languages/fooden.json";
// import foodbg from "../../../json/languages/foodbg.json";
import foodgr from "../../../json/languages/foodgr.json";
// import foodde from "../../../json/languages/foodde.json";
// import foodro from "../../../json/languages/foodro.json";
import foodDetails from "../../../json/foodDetails.json";
import drinken from "../../../json/drinkMenu.json";
import drinkDetails from "../../../json/drinkDetails.json";
import LanguageMenu from "../../../components/LanguageMenu";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    fontWeight: "800",
    fontFamily: "Halvetica",
    textAlign: "center",
    marginBottom: "7vh",
  },
  container: {
    backgroundColor: "#FCF9EE",
    width: "100vw",
  },
  menuContainer: {
    margin: "3vh 0",
  },
  menuTitles: {
    marginLeft: "2vw",
    marginTop: "5vh",
  },
}));

export default function Food(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [showDrinks, setShowDrinks] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  const saladMenu = props.salad.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.details.salads[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.details.salads[i]["price"]}
      />
    );
  });

  const apperativeMenu = props.apperatives.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.details.apperatives[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.details.apperatives[i]["price"]}
      />
    );
  });

  const dipMenu = props.dips.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.details.dips[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.details.dips[i]["price"]}
      />
    );
  });

  const meatMenu = props.meat.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.details.meat[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.details.meat[i]["price"]}
      />
    );
  });

  const fishMenu = props.fish.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.details.fish[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.details.fish[i]["price"]}
      />
    );
  });

  const pastaMenu = props.pasta.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.details.pasta[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.details.pasta[i]["price"]}
      />
    );
  });

  // Here start drink menu
  const softDrinksMenu = props.softDrinks.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.drinks.softDrinks[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.drinks.softDrinks[i]["price"]}
      />
    );
  });
  const beerDrinksMenu = props.beers.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.drinks.beers[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.drinks.beers[i]["price"]}
      />
    );
  });
  const retsinaDrinksMenu = props.retsina.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.drinks.retsina[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.drinks.retsina[i]["price"]}
      />
    );
  });
  const wineDrinksMenu = props.wine.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.drinks.wine[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.drinks.wine[i]["price"]}
      />
    );
  });
  const ouzoDrinksMenu = props.ouzo.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.drinks.ouzo[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.drinks.ouzo[i]["price"]}
      />
    );
  });
  const spiritsDrinksMenu = props.spirits.products.map((product, i) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={props.drinks.spirits[i]["img"]}
        imgName={product.name}
        imgText={product.description}
        price={props.drinks.spirits[i]["price"]}
      />
    );
  });

  const actualMenu = () => {
    if (new Date().getHours() >= 1) {
      if (!showDrinks) {
        return (
          <Grid
            container
            direction="column"
            style={{
              width: matchesSM ? "95%" : "85%",
              margin: "auto",
              marginBottom: "5vh",
              color: "#212121",
            }}
          >
            <Grid item container style={{ marginTop: "5vh" }} justify="center">
              <Typography
                className={classes.header}
                variant="h3"
                component="h1"
                gutterBottom
              >
                El Greco Food&nbsp;Menu
              </Typography>
            </Grid>
            <Grid item container justify="center">
              <LanguageMenu />
            </Grid>
            <Grid item container justify="space-evenly">
              <Button
                onClick={() => {
                  setShowDrinks(false);
                }}
              >
                Food
              </Button>
              <Button
                onClick={() => {
                  setShowDrinks(true);
                }}
              >
                Drinks
              </Button>
            </Grid>
            <Grid item component="hr" />
            <Grid item container direction="column">
              <Typography variant="h4" className={classes.menuTitles}>
                Salads
              </Typography>
              <Grid container item className={classes.menuContainer}>
                {saladMenu}
              </Grid>
              <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Apperatives
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {apperativeMenu}
              </Grid>
              <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Dips
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {dipMenu}
              </Grid>
              <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Grill
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {meatMenu}
              </Grid>
              <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Fish
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {fishMenu}
              </Grid>
               <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Pasta
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {pastaMenu}
              </Grid>
            </Grid>
          </Grid>
        );
      } else {
        return (
          <Grid
            container
            direction="column"
            style={{
              width: matchesSM ? "95%" : "85%",
              margin: "auto",
              marginBottom: "5vh",
              color: "#212121",
            }}
          >
            <Grid item container style={{ marginTop: "5vh" }} justify="center">
              <Typography
                className={classes.header}
                variant="h3"
                component="h1"
                gutterBottom
              >
                El Greco Food&nbsp;Menu
              </Typography>
            </Grid>
            <Grid item container justify="center">
              <LanguageMenu />
            </Grid>
            <Grid item container justify="space-evenly">
              <Button
                onClick={() => {
                  setShowDrinks(false);
                }}
              >
                Food
              </Button>
              <Button
                onClick={() => {
                  setShowDrinks(true);
                }}
              >
                Drinks
              </Button>
            </Grid>
            <Grid item component="hr" />
            <Grid item container direction="column">
              <Typography variant="h4" className={classes.menuTitles}>
                Soft Drinks
              </Typography>
              <Grid container item className={classes.menuContainer}>
                {softDrinksMenu}
              </Grid>
              <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Beers
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {beerDrinksMenu}
              </Grid>
              <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Retsina
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {retsinaDrinksMenu}
              </Grid>
              <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Wine
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {wineDrinksMenu}
              </Grid>
              <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Ouzo and Tsipouro
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {ouzoDrinksMenu}
              </Grid>
              <Divider />
              <Typography variant="h4" className={classes.menuTitles}>
                Spirits
              </Typography>
              <Grid item container className={classes.menuContainer}>
                {spiritsDrinksMenu}
              </Grid>
            </Grid>
          </Grid>
        );
      }
    } else {
      return (
        <Grid
          container
          direction="column"
          style={{
            width: matchesSM ? "95%" : "85%",
            margin: "auto",
            color: "#212121",
          }}
        >
          <Grid item container style={{ marginTop: "5vh" }} justify="center">
            <Typography
              className={classes.header}
              variant="h3"
              component="h1"
              gutterBottom
            >
              Sorry We Are&nbsp;Closed
            </Typography>
          </Grid>
        </Grid>
      );
    }
  };

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
        <meta
          property="og:title"
          content="El Greco Restaurant | Food Menu"
          key="og:title"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://elgrecovrasna.gr/tavern/elgrecomenu"
        />
      </Head>
      {actualMenu()}
      <Divider />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { lang: "en" } },
      // { params: { lang: "bg" } },
      // { params: { lang: "de" } },
      { params: { lang: "gr" } },
      // { params: { lang: "ro" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let menu = [];
  const food = foodDetails;
  const drinks = drinkDetails;
  const drinkMenu = drinken.menus;

  switch (context.params.lang) {
    case "en":
      menu = fooden.menus;
      break;
    case "gr":
      menu = foodgr.menus;
      break;
    // case "bg":
    //   menu = foodbg.menus;
    //   break;
    // case "de":
    //   menu = foodde.menus;
    //   break;
    // case "ro":
    //   menu = foodro.menus;
    //   break;
    default:
      break;
  }

  return {
    props: {
      details: food,
      salad: menu[0],
      apperatives: menu[1],
      dips: menu[2],
      meat: menu[3],
      fish: menu[4],
      pasta: menu[5],
      drinks: drinks,
      softDrinks: drinkMenu[0],
      beers: drinkMenu[1],
      retsina: drinkMenu[2],
      wine: drinkMenu[3],
      ouzo: drinkMenu[4],
      spirits: drinkMenu[5],
    },
  };
}
