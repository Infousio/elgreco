import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Grid from "@material-ui/core/Grid";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";
import ArrowBack from "@material-ui/icons/ArrowBackIos";

import carouselImages from "../json/carouselImages.json";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const variants = {
  show: { opacity: 1},
  hidden: { opacity: 0 }
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "57vw",
    maxHeight: "100vh",
    position: "absolute",
  },
  navigationBars: {
    width: "20vw",
    height: "56vw",
    maxHeight: "100vh",
    position: "absolute",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  arrows: {
    fontSize: "5rem",
    color: "white",
  },
  dot: {
    width: "13px",
    height: "13px",
    border: "2px solid #fff",
    borderRadius: "50px",
    listStyleType: "none",
    [theme.breakpoints.down("sm")]: {
      width: "10px",
      height: "10px",
    },
  },
  dotCont: {
    marginBottom: "5em",
    width: "20vw",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
      marginBottom: "1em",
    },
  },
  mobileNav: {
    position: "absolute",
    width: "100vw",
    zIndex: "2",
    height: "56vw",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function RoomsCarousel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [isIndex, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextHandler();
    }, 3000)
    return () => clearTimeout(timer);
  }, [isIndex])

  const images = carouselImages.images.map((image, index) => {
    return (
      <motion.div
        initial="hidden"
        animate={isIndex === index ? "show" : "hidden"}
        variants={variants}
        key={image}
        transition={{ duration: 1 }}
      >
        <Image
          layout="fill"
          src={image}
          alt={image}
          quality={95}
          priority={index === 0}
          objectFit={matchesMD ? "contain" : "fill"}
          objectPosition="top"
        />
      </motion.div>
    );
  });


  const dots = carouselImages.images.map((image, index) => {
    return (
      <li
        key={image}
        style={{
          background:
            index === isIndex ? "rgba(255,255,255,1)" : "rgba(0,0,0,0)",
        }}
        className={classes.dot}
      />
    );
  });

  const nextHandler = () => {
    if (isIndex === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prevIndex) => prevIndex + 1);
    return;
  };

  const previousHandler = () => {
    if (isIndex === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex((prevIndex) => prevIndex - 1);
    return;
  };

  let initX = null;
  let endX = null;
  const touchStartHandler = (e) => {
    initX = e.targetTouches[0].clientX;
    return;
  };
  const touchMoveHandler = (e) => {
    endX = e.targetTouches[0].clientX;
    return;
  };
  const touchEndHandler = () => {
    if (initX - endX > 100) {
      nextHandler();
      return;
    }
    if (initX - endX < -100) {
      previousHandler();
    }
    return;
  };

  return (
    <Grid
      container
      direction="column"
      justify="flex-end"
      className={classes.container}
    >
      <Grid item container>
        {images}
      </Grid>
      <Grid
        item
        container
        style={{ left: matchesMD ? "0" : "75px" }}
        className={classes.navigationBars}
        onClick={() => previousHandler()}
        justify="center"
        alignItems="center"
      >
        <ArrowBack className={classes.arrows} />
      </Grid>
      <Grid
        item
        container
        style={{
          right: "0%",
        }}
        className={classes.navigationBars}
        onClick={() => nextHandler()}
        justify="center"
        alignItems="center"
      >
        <ArrowForward className={classes.arrows} />
      </Grid>
      <Grid
        item
        onTouchStart={(event) => touchStartHandler(event)}
        onTouchMove={(event) => touchMoveHandler(event)}
        onTouchEnd={() => touchEndHandler()}
        className={classes.mobileNav}
      />
      <Grid
        item
        container
        alignItems="center"
        justify="space-between"
        direction="column"
      >
        <Grid item container justify="space-evenly" className={classes.dotCont}>
          {dots}
        </Grid>
      </Grid>
    </Grid>
  );
}
