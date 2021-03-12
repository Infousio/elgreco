import Link from "../src/Link";
import RoomsCarousel from "../components/RoomsCarousel";
import RoomsGallery from "../components/RoomsGallery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F3EFE8",
  },
  header: {
    zIndex: "1",
    color: "white",
    textAlign: "center",
    marginTop: "2vh",
    marginBottom: "1vh",
  },
  title: {
    fontFamily: "Pacifico, cursive",
    [theme.breakpoints.down("md")]: {
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  bodyTitle: {
    fontFamily: "Pacifico, cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  bodyBody: {
    textAlign: "center",
    padding: "0 30vw",
    fontWeight: "500",
    margin: "2vh 0",
    [theme.breakpoints.down("md")]: {
      padding: "0 20vw",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 10vw",
    },
  },
  carousel: {
    position: "absolute",
    width: "100vw",
    [theme.breakpoints.down("md")]: {
      position: "relative",
    },
  },
  textContainer: {
    marginTop: "44vw",
    [theme.breakpoints.down("lg")]: {
      marginTop: "48vw",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "58vw",
    },
  },
}));

export default function RoomsBody() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container className={classes.container} direction="column">
      <Grid
        item
        container
        className={classes.header}
        justify="center"
        direction="column"
        alignItems="center"
      >
        <Typography variant="h3" gutterBottom className={classes.title}>
          El Greco
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.title}>
          - Rooms -
        </Typography>
      </Grid>
      <Grid item container className={classes.carousel}>
        <RoomsCarousel />
      </Grid>
      <Grid
        item
        container
        className={classes.textContainer}
        alignItems="center"
        direction="column"
      >
        <Typography
          variant="h4"
          style={{ padding: "4vh 0" }}
          className={classes.bodyTitle}
        >
          Welcome to Elgreco Rooms
        </Typography>
        <Typography variant="h6" className={classes.bodyBody}>
          In a mixture with the past and the present, traditional and modern, El
          Greco rooms located at the beach of Nea Vrasna, charms any visitor
          with its unique, hospitable and luxurious rooms.
        </Typography>
        <Typography variant="h6" className={classes.bodyBody}>
          Every summer El Greco rooms, 10 meters from the beach, offer every
          visitor their essential feeling of comfort, relacation and peace away
          from the stress of the city.
        </Typography>
        <Typography variant="h6" className={classes.bodyBody}>
          One and only visit can fullfill the needs even of the most demanding
          visitor, leaving the urge to come back again.
        </Typography>
      </Grid>
      <Grid item container justify="center" style={{ margin: "4vh 0" }}>
        <Button
          size="large"
          style={{ backgroundColor: "#C2E3D4" }}
          component={Link}
          href="/rooms/book"
        >
          <Typography variant="h5" style={{ fontWeight: "500" }}>
            BOOK NOW
          </Typography>
        </Button>
      </Grid>
      <Grid item container>
        <RoomsGallery style={{position: "relative"}}/>
      </Grid>
    </Grid>
  );
}
