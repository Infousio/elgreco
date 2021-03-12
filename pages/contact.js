import Head from "next/head";

import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import Footer from "../containers/Footer";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#152219",
    width: "100vw",
    height: "80vh",
    [theme.breakpoints.down("md")]: {
      height: "100vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "130vh",
    },
  },
  header: {
    color: "white",
    textAlign: "center",
    fontWeight: "800",
    fontFamily: "Halvetica",
    textShadow: "3px 3px 5px rgba(0,0,0,0.7)",
  },
  mono: {
    fontFamily: "PT Mono, monospace",
    color: "white",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Head>
        <title key="title">El Greco - Contact Us - Book and Reserve</title>
        <meta
          name="description"
          key="description"
          content="Contact us to reserve a table in the El Greco Restaurant or to book
          a room in the El Greco Rooms. You can contact us either by phone or email."
        />
        <meta property="og:title" content="El Greco | Contact us" key="og:title"/>
        <link rel="canonical" key="canonical" href="elgreco.vercel.app/contact"/>
      </Head>
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <Grid container direction="column" className={classes.container}>
        <Grid
          item
          container
          justify="center"
          alignContent="center"
          style={{ marginTop: "10vh", height: "240px" }}
        >
          <img
            src="/diamond.svg"
            width="240px"
            height="240px"
            alt="diamond"
            style={{ position: "absolute" }}
          />
          <Typography variant="h4" className={classes.header}>
            EL GRECO
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ padding: matchesMD ? "3em 2em" : "5em 15vw" }}
        >
          <Grid
            item
            component={Typography}
            variant={matchesSM ? "h3" : "h2"}
            className={classes.mono}
            style={{
              textAlign: matchesMD ? "center" : "left",
              marginBottom: "1em",
            }}
          >
            CONTACT US
          </Grid>
          <Grid item container direction={matchesMD ? "column" : "row"}>
            <Grid
              item
              container
              direction="column"
              md
              style={{ marginBottom: matchesMD ? "2em" : 0 }}
            >
              <Typography
                variant={matchesSM ? "h5" : "h4"}
                className={classes.mono}
                style={{ textAlign: matchesMD ? "center" : "left" }}
                gutterBottom
              >
                PHONE & EMAIL
              </Typography>
              <Typography
                variant={matchesSM ? "body1" : "h6"}
                className={classes.mono}
                style={{ textAlign: matchesMD ? "center" : "left" }}
              >
                TEL: +306946018981
                <br />
                TEL: +302397022063
                <br />
                EMAIL: ELGRECOVRASNA@GMAIL.COM
              </Typography>
            </Grid>
            <Grid item container direction="column" md>
              <Typography
                variant={matchesSM ? "h5" : "h4"}
                className={classes.mono}
                style={{ textAlign: matchesMD ? "center" : "right" }}
                gutterBottom
              >
                SOCIAL MEDIA
              </Typography>
              <Typography
                variant={matchesSM ? "body1" : "h6"}
                className={classes.mono}
                style={{ textAlign: matchesMD ? "center" : "right" }}
              >
                FACEBOOK: @ELGRECOVRASNA
                <br />
                INSTAGRAM: @ELGRECO_VRASNA
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
