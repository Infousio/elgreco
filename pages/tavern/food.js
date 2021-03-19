import Head from "next/head";

import MenuCard from "../../components/MenuCard";
import foodMenu from "../../json/foodMenu.json";

import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav";
import Footer from "../../containers/Footer";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const saladMenu = props.salad.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const apperativeMenu = props.apperatives.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const dipMenu = props.dips.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const meatMenu = props.meat.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const fishMenu = props.fish.products.map((product) => {
    return (
      <MenuCard
        key={product.name}
        imgUrl={product.img}
        imgName={product.name}
        imgText={product.description}
      />
    );
  });

  const pastaMenu = props.pasta.products.map((product) => {
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
          href="https://elgrecovrasna.gr/tavern/food"
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
          <Typography
            className={classes.header}
            variant="h3"
            component="h1"
            gutterBottom
          >
            Elgreco Food Menu
          </Typography>
        </Grid>
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
      <Divider />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const menu = foodMenu.menus;
  const salad = menu[0];
  const apperatives = menu[1];
  const dips = menu[2];
  const meat = menu[3];
  const fish = menu[4];
  const pasta = menu[5];

  return {
    props: {
      salad,
      apperatives,
      dips,
      meat,
      fish,
      pasta,
    },
  };
}
