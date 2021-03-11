import Image from "next/image";
import Link from "../src/Link";
import Footer from "./Footer";
import RoomsCarousel from "../components/RoomsCarousel";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { WidgetsTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "120vh",
    width: "100%",
    backgroundColor: "#F3EFE8",
  },
  header: {
    zIndex: "1",
    color: "white",
    textAlign: "center",
    marginTop: "2em"
  },
  title: {
    fontFamily: "Pacifico, cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
}));

export default function RoomsBody() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item container className={classes.header} direction="column" alignItems="center">
        <Typography variant="h3" gutterBottom className={classes.title}>
          El Greco
        </Typography>
        <Typography variant="h6" className={classes.title}>
          - Rooms -
        </Typography>
      </Grid>
      <Grid item container style={{position: "relative"}}>
        <RoomsCarousel />
      </Grid>
    </Grid>
  );
}
