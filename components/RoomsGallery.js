import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedImage from "./AnimatedImage";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "70vw",
    height: "100%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  image: {
    objectFit: "contain",
  },
}));

export default function RoomsGallery() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: true,
  });
  const [ref7, inView7] = useInView({
    triggerOnce: true,
  });
  const [ref8, inView8] = useInView({
    triggerOnce: true,
  });
  const [ref9, inView9] = useInView({
    triggerOnce: true,
  });
  const [ref10, inView10] = useInView({
    triggerOnce: true,
  });
  const [ref11, inView11] = useInView({
    triggerOnce: true,
  });
  const [ref12, inView12] = useInView({
    triggerOnce: true,
  });
  const [ref13, inView13] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <Grid
      className={classes.container}
      alignItems="center"
      container
      direction="column"
    >
      <AnimatedImage
        imgWidth={4288}
        imgHeight={2412}
        imgSrc="/rooms/gallery/1.webp"
        imgAlt="El Greco Room Interior"
      />
      <Grid item container style={{ width: "100%" }}>
        <Grid item container style={{ width: "100%" }} direction="column" md>
          <AnimatedImage
            imgWidth={3797}
            imgHeight={2550}
            imgSrc="/rooms/gallery/2.webp"
            imgAlt="El Greco Room View"
          />
          <AnimatedImage
            imgWidth={3797}
            imgHeight={2848}
            imgSrc="/rooms/gallery/3.webp"
            imgAlt="El Greco Room Kitchen"
          />
        </Grid>
        <AnimatedImage
          imgWidth={2848}
          imgHeight={3987}
          imgSrc="/rooms/gallery/4.webp"
          imgAlt="El Greco Room View"
          md
        />
      </Grid>
      <AnimatedImage
        imgWidth={4288}
        imgHeight={2412}
        imgSrc="/rooms/gallery/5.webp"
        imgAlt="El Greco Room Interior"
      />
      <Grid container item style={{ width: "100%" }}>
        <AnimatedImage
          imgWidth={2848}
          imgHeight={2136}
          imgSrc="/rooms/gallery/6.webp"
          imgAlt="El Greco Room Garden"
          md
        />
        <AnimatedImage
          imgWidth={2848}
          imgHeight={2136}
          imgSrc="/rooms/gallery/7.webp"
          imgAlt="El Greco Room Garden"
          md
        />
      </Grid>
      <Grid container item style={{ width: "100%" }}>
        <AnimatedImage
          imgWidth={2827}
          imgHeight={3262}
          imgSrc="/rooms/gallery/8.webp"
          imgAlt="El Greco Room Bathroom"
          md={matchesSM ? undefined : 7}
        />
        <Grid
          container
          item
          justify={matchesSM ? "flex-start" : "space-between"}
          direction="column"
          style={{ width: "100%" }}
          md={matchesSM ? undefined : 5}
        >
          <AnimatedImage
            imgWidth={2848}
            imgHeight={2222}
            imgSrc="/rooms/gallery/9.webp"
            imgAlt="El Greco Room View"
          />
          <AnimatedImage
            imgWidth={2848}
            imgHeight={2222}
            imgSrc="/rooms/gallery/10.webp"
            imgAlt="El Greco Room Reception"
          />
        </Grid>
      </Grid>
      <AnimatedImage
        imgWidth={4288}
        imgHeight={2412}
        imgSrc="/rooms/gallery/11.webp"
        imgAlt="El Greco Room Interior"
      />
      <Grid container item style={{ width: "100%" }}>
        <AnimatedImage
          imgWidth={2848}
          imgHeight={3797}
          imgSrc="/rooms/gallery/12.webp"
          imgAlt="El Greco Room Artistic"
          md
        />
        <AnimatedImage
          imgWidth={2136}
          imgHeight={2848}
          imgSrc="/rooms/gallery/13.webp"
          imgAlt="El Greco Room Interior"
          md
        />
      </Grid>
    </Grid>
  );
}
