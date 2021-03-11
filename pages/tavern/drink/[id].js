import Link from "next/link";

import drinkMenu from "../../../json/drinkMenu.json";
import MenuCard from "../../../components/MenuCard";

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
  link: {

  }
}));

export default function Product(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("sm"));

  const products = props.products.map((product, index) => {
    return (
      <MenuCard
        key={index}
        img={product.img}
        name={product.name}
        description={product.description}
        prio={index === 0 || index === 1}
      />
    );
  });

  return (
    <div className={classes.container}>
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
            <Link href="/tavern/drink">
              <span style={{cursor: "pointer"}}>Menu /{" "}</span>
            </Link>
            {props.name}
          </Typography>
        </Grid>
        <Grid item container justify="space-evenly">
          {products}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const names = drinkMenu.menus.map((category) => {
    return category.name;
  });

  const paths = names.map((name) => ({
    params: { id: name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = drinkMenu.menus.filter(
    (category) => category.name === params.id
  );

  const products = category[0].products;
  const name = category[0].name;

  return { props: { products, name } };
}
