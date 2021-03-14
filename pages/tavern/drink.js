import Head from "next/head";

import MenuCard from "../../components/MenuCard";
import drinkMenu from "../../json/drinkMenu.json";

import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav";
import Footer from "../../containers/Footer";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';

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

export default function Drink(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const softMenu = props.soft.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const beerMenu = props.beer.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const retsinaMenu = props.retsina.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const wineMenu = props.wine.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const ouzoMenu = props.ouzo.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const spiritsMenu = props.spirits.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  return (
    <div className={classes.container}>
      <Head>
        <title key="title">El Greco Restaurant - Drink Menu - Nea Vrasna</title>
        <meta
          name="description"
          key="description"
          content="El Greco Restaurant Drink Menu. Check out all the drinks which
          you can accompany the food with. Wine, beer, Ouzo, Tsipouro and more."
        />
        <meta
          property="og:title"
          content="El Greco Restaurant | Drink Menu"
          key="og:title"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://elgrecovrasna.gr/tavern/drink"
        />
      </Head>
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <Grid
        container
        direction="column"
        style={{
          width: matchesSM ? "95%" : "80%",
          margin: "auto",
          marginBottom: "5vh",
          color: "#212121",
        }}
      >
        <Grid item container style={{ marginTop: "5vh" }} justify="center">
          <Typography className={classes.header} variant="h3" gutterBottom>
            Elgreco Drink Menu
          </Typography>
        </Grid>
        <Grid item container direction="column">
          <Typography variant="h4" className={classes.menuTitles}>
            Soft Drinks
          </Typography>
          <Grid container item className={classes.menuContainer}>
            {softMenu}
          </Grid>
          <Divider />
          <Typography variant="h4" className={classes.menuTitles}>
            Beers
          </Typography>
          <Grid item container className={classes.menuContainer}>
            {beerMenu}
          </Grid>
          <Divider />
          <Typography variant="h4" className={classes.menuTitles}>
            Retsinas
          </Typography>
          <Grid item container className={classes.menuContainer}>
            {retsinaMenu}
          </Grid>
          <Divider />
          <Typography variant="h4" className={classes.menuTitles}>
            Wine
          </Typography>
          <Grid item container className={classes.menuContainer}>
            {wineMenu}
          </Grid>
          <Divider />
          <Typography variant="h4" className={classes.menuTitles}>
            Ouzo & Tsipouro
          </Typography>
          <Grid item container className={classes.menuContainer}>
            {ouzoMenu}
          </Grid>
          <Divider />
          <Typography variant="h4" className={classes.menuTitles}>
            Spirits
          </Typography>
          <Grid item container className={classes.menuContainer}>
            {spiritsMenu}
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const menu = drinkMenu.menus;
  const soft = menu[0];
  const beer = menu[1];
  const retsina = menu[2];
  const wine = menu[3];
  const ouzo = menu[4];
  const spirits = menu[5];

  return {
    props: {
      soft,
      beer,
      retsina,
      wine,
      ouzo,
      spirits,
    },
  };
}
