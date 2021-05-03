import { useState, useEffect } from "react";
import Link from "../src/Link";
import ReactGA from "react-ga";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { LaptopWindows } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  horizontalNav: {
    height: "75px",
    width: "100%",
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: "5px 0px 32px rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(3px)",
    zIndex: 4,
    position: "fixed",
    bottom: 0,
  },
  icon: {
    width: "48px",
    height: "48px",
  },
  active: {
    border: "2px solid rgba(255,255,255,0.4)",
    boxShadow: "1px 2px 1px 1px rgba(0, 0, 0, 0.4)",
  },
}));

const HorizontalNav = () => {
  const classes = useStyles();

  const [index, setIndex] = useState(1);

  const [previousURL, SetPreviousURL] = useState("");

  useEffect(() => {
    if (previousURL !== window.location.pathname) {
      SetPreviousURL(window.location.pathname);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    switch (window.location.pathname) {
      case "/":
        setIndex(1);
        break;
      case "/tavern":
        setIndex(2);
        break;
      case "/rooms":
        setIndex(3);
        break;
      case "/contact":
        setIndex(4);
        break;
      default:
        setIndex(0);
        break;
    }
  }, [setIndex]);

  return (
    <Grid container className={classes.horizontalNav}>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        href="/"
        component={Link}
        className={index === 1 ? classes.active : undefined}
        xs
      >
        <img
          src="/home.svg"
          className={classes.icon}
          width="48px"
          height="48px"
          alt="ElGreco Tavern"
        />
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        href="/tavern"
        component={Link}
        className={index === 2 ? classes.active : undefined}
        xs
      >
        <img
          src="/spoon.svg"
          className={classes.icon}
          width="48px"
          height="48px"
          alt="ElGreco Tavern"
        />
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        href="/rooms"
        component={Link}
        className={index === 3 ? classes.active : undefined}
        xs
      >
        <img
          src="/bed.svg"
          className={classes.icon}
          width="48px"
          height="48px"
          alt="ElGreco Rooms"
        />
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        href="/contact"
        component={Link}
        className={index === 4 ? classes.active : undefined}
        xs
      >
        <img
          src="/message.svg"
          className={classes.icon}
          width="48px"
          height="48px"
          alt="ElGreco Rooms"
        />
      </Grid>
    </Grid>
  );
};

export default HorizontalNav;
