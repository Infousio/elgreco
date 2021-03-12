import { useState, useEffect } from "react";
import Link from "../src/Link";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  verticalNav: {
    height: "100vh",
    width: "75px",
    position: "fixed",
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: "5px 0px 32px rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(3px)",
    zIndex: 3,
    paddingBottom: "1em",
    whiteSpace: "nowrap",
  },
  icon: {
    width: "48px",
    height: "48px",
  },
  iconContainer: {
    marginBottom: "2em",
  },
  verticalTypo: {
    transform: "rotate(-90deg)",
    fontWeight: "500",
  },
  active: {
    border: "2px solid rgba(255,255,255,0.4)",
    boxShadow: "1px 2px 1px 1px rgba(0, 0, 0, 0.4)",
  },
}));

const VerticalNav = (props) => {
  const classes = useStyles();

  const [index, setIndex] = useState(1);

  useEffect(() => {
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
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="flex-start"
      className={classes.verticalNav}
    >
      <Grid
        item
        container
        style={{ marginTop: "2em" }}
        direction="column"
        alignItems="flex-start"
      >
        <Grid
          item
          container
          className={classes.iconContainer}
          component={Link}
          href="/"
          justify="center"
        >
          <Button
            style={{ width: "100%" }}
            className={index === 1 ? classes.active : undefined}
            aria-label="Home Icon"
          >
            <img
              src="/home.svg"
              className={classes.icon}
              width="48px"
              height="48px"
              alt="ElGreco Tavern"
            />
          </Button>
        </Grid>
        <Grid
          item
          container
          className={classes.iconContainer}
          component={Link}
          href="/tavern"
          justify="center"
        >
          <Button
            style={{ width: "100%" }}
            className={index === 2 ? classes.active : undefined}
            aria-label="Tevern Icon"
          >
            <img
              src="/spoon.svg"
              className={classes.icon}
              width="48px"
              height="48px"
              alt="ElGreco Tavern"
            />
          </Button>
        </Grid>
        <Grid
          item
          container
          className={classes.iconContainer}
          component={Link}
          href="/rooms"
          justify="center"
        >
          <Button
            style={{ width: "100%" }}
            className={index === 3 ? classes.active : undefined}
            aria-label="Rooms Icon"
          >
            <img
              src="/bed.svg"
              className={classes.icon}
              width="48px"
              height="48px"
              alt="ElGreco Rooms"
            />
          </Button>
        </Grid>
        <Grid item container justify="center" component={Link} href="/contact">
          <Button
            style={{ width: "100%" }}
            className={index === 4 ? classes.active : undefined}
            aria-label="Contact Icon"
          >
            <img
              src="/message.svg"
              className={classes.icon}
              width="48px"
              height="48px"
              alt="ElGreco Contact Us"
            />
          </Button>
        </Grid>
      </Grid>
      <Grid item style={{ marginLeft: "-4em" }}>
        <Typography variant="body1" className={classes.verticalTypo}>
          Copyright© Elgreco 2021
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Grid
          item
          container
          justify="center"
          component={Link}
          href="https://www.tripadvisor.com/Restaurant_Review-g1574369-d8826858-Reviews-El_Greco_Tavern-Vrasna_Thessaloniki_Region_Central_Macedonia.html?m=19905"
        >
          <Button aria-label="Trip Advisor Icon">
            <img
              src="/tripadvisor.svg"
              className={classes.icon}
              width="48px"
              height="48px"
              alt="tripadvisor"
            />
          </Button>
        </Grid>
        <Grid
          item
          container
          component={Link}
          justify="center"
          aria-label="Instagram Icon"
          href="https://www.instagram.com/elgreco_vrasna"
        >
          <Button aria-label="Instagram Icon">
            <InstagramIcon
              aria-label="Instagram Icon"
              className={classes.icon}
            />
          </Button>
        </Grid>
        <Grid
          item
          container
          justify="center"
          component={Link}
          aria-label="Facebook Icon"
          href="https://www.facebook.com/elgrecovrasna"
        >
          <Button aria-label="Facebook Icon">
            <FacebookIcon aria-label="Facebook Icon" className={classes.icon} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VerticalNav;
