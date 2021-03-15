import Image from "next/image";
import Link from "../src/Link";
import Footer from "./Footer";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
    textAlign: "center",
    fontWeight: "800",
  },
  land: {
    height: "100vh",
    width: "100vw",
  },
  bgImage: {
    zIndex: "-2",
    objectFit: "cover",
    objectPosition: "50% 85%",
  },
  overlay: {
    zIndex: "-1",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  staticImage: {
    height: "100vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      height: "40vh",
    },
  },
  textOnImage: {
    color: "white",
    textAlign: "center",
    fontWeight: "800",
    border: "5px solid white",
    textShadow: "3px 3px 5px rgba(0,0,0,0.7)",
    padding: "1em",
  },
  about: {
    padding: "2em 4em",
    color: "white",
    textAlign: "center",
    fontWeight: "800",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      padding: "3em 10em",
      height: "50vh",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1em",
      height: "70vh"
    },
  },
  menu: {
    height: "40vh",
    backgroundSize: "cover",
  },
}));

const TavernBody = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid item container direction="column" className={classes.land}>
        <div className={classes.overlay}></div>
        <Grid
          item
          container
          justify="center"
          alignContent="center"
          style={{ marginTop: "15vh", height: "240px" }}
        >
          <Image
            src="/tavernBackground.webp"
            alt="El Greco Tavern"
            layout="fill"
            priority
            className={classes.bgImage}
          />
          <img
            src="/diamond.svg"
            width="240px"
            height="240px"
            alt="diamond"
            style={{ position: "absolute" }}
          />
          <Typography
            variant="h4"
            className={classes.header}
            style={{
              fontFamily: "Halvetica",
              textShadow: "3px 3px 5px rgba(0,0,0,0.7)",
            }}
          >
            EL GRECO
            <br />
            TAVERN
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            className={classes.header}
            style={{ fontFamily: "Leitura", padding: "1em 2em" }}
          >
            serving Nea&nbsp;Vrasna proudly since 1976
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{
          height: matchesMD ? "30vh" : "20vh",
          backgroundColor: "#FFF0F5",
          marginTop: matchesMD ? "-75px" : "0"
        }}
      >
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignContent="center"
          md
        >
          <Grid item>
            <Typography variant="body1">Opening Hours</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              style={{
                fontWeight: "800",
                textAlign: matchesMD ? "center" : undefined,
              }}
            >
              Mon-Sun
              <br />
              19:00-24:00
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify="center" alignContent="center" md>
          <Typography
            variant="h5"
            style={{ textAlign: "center", padding: "0 1em"}}
          >
            Temporarily closed due to Covid-19
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignContent="center"
          md
        >
          <Grid item>
            <Typography
              variant="h6"
              style={{ textAlign: matchesMD ? "center" : "right" }}
            >
              Nea Vrasna, Thessaloniki
              <br />
              <Link
                href="/contact"
                style={{ textDecoration: "underline", color: "inherit" }}
              >
                Reserve here
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid
          item
          container
          justify="center"
          alignContent="center"
          lg={8}
          className={classes.staticImage}
          style={{ backgroundImage: matchesMD ? "url(/taverna2-720.webp)" : "url(/taverna2-1080.webp)" }}
        >
          <Typography variant="h3" className={classes.textOnImage}>
            About Us
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          lg={4}
          alignContent="center"
          className={classes.about}
          style={{ backgroundColor: "#152219" }}
        >
          <Typography
            variant={matchesXS ? "body1" : "h5"}
            style={{
              textAlign: matchesMD ? "center" : "left",
              marginBottom: "1.5em",
            }}
          >
            A graphical tavern well known to the regular tourists and to the
            neighbor areas, has been serving its excellent cuisine to its
            customers for more than four decades.
          </Typography>
          <Typography
            variant={matchesXS ? "body1" : "h5"}
            style={{
              textAlign: matchesMD ? "center" : "left",
              marginBottom: "1.5em",
            }}
          >
            El Greco uses only the top quality ingredients which in combination
            with the cook’s speciality you’re up to a magical gastronomical
            experience that only El Greco knows how to provide.
          </Typography>
          <Typography
            variant={matchesXS ? "body1" : "h5"}
            style={{ textAlign: matchesMD ? "center" : "left" }}
          >
            Many people of all different backgrounds, types and styles have
            enjoyed El Greco’s meals and wine, in an atmospheric environment
            where the appetite and mood arises to the fullest.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid
          item
          container
          justify="center"
          alignContent="center"
          md={7}
          className={classes.menu}
          style={{ backgroundImage: "url(/grill.webp)" }}
        >
          <Button component={Link} href="/tavern/food">
            <Typography variant="h3" className={classes.textOnImage}>
              Food Menu
            </Typography>
          </Button>
        </Grid>
        <Grid
          item
          container
          md={5}
          justify="center"
          alignContent="center"
          className={classes.menu}
          style={{ backgroundImage: "url(/wine.webp)" }}
        >
          <Button component={Link} href="/tavern/drink">
            <Typography variant="h3" className={classes.textOnImage}>
              Drink Menu
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Footer/>
    </Grid>
  );
};

export default TavernBody;
