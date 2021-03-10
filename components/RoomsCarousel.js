import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Grid from "@material-ui/core/Grid";

import carouselImages from "../json/carouselImages.json";
import { makeStyles } from "@material-ui/core/styles";

const variants = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
  },
  image: {
    zIndex: "-2",
    objectFit: "cover",
    objectPosition: "50% 30%",
  },
  overlay: {
    zIndex: "-1",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(34,34,34,0.3)",
  },
  navigationBars: {
    width: "20vw",
    height: "100vh",
    position: "absolute",
    "&:hover": {
      cursor: "url(right-arrow.svg), auto"
    },
  },
}));

export default function RoomsCarousel(props) {
  const classes = useStyles();

  const [isIndex, setIndex] = useState(0);

  const images = carouselImages.images.map((image, index) => {
    return (
      <motion.div
        initial="hidden"
        animate={isIndex === index ? "show" : "hidden"}
        variants={variants}
        key={image}
      >
        <Image
          layout="fill"
          className={classes.image}
          src={image}
          alt={image}
        />
      </motion.div>
    );
  });

  const nextHandler = () => {
    if (isIndex === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(isIndex + 1);
  };

  const previousHandler = () => {
    if (isIndex === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(isIndex - 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div>
      <Grid container>
        <Grid item container>
          {images}
        </Grid>
        <Grid
          item
          style={{ left: "0%" }}
          className={classes.navigationBars}
          onClick={() => previousHandler()}
        />
        <Grid
          item
          style={{
            right: "0%",
          }}
          className={classes.navigationBars}
          onClick={() => nextHandler()}
        />
      </Grid>
    </div>
  );
}
