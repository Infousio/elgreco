import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

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
      <Grid
        component={motion.div}
        ref={ref1}
        initial="hidden"
        animate={inView1 && "show"}
        variants={variants}
        item
        style={{ width: "100%", padding: "10px" }}
      >
        <Image
          src="/rooms/gallery/1.webp"
          layout="responsive"
          alt="El Greco Room Interior"
          width={4288}
          height={2412}
        />
      </Grid>
      <Grid item container style={{ width: "100%" }}>
        <Grid item container style={{ width: "100%" }} direction="column" md>
          <Grid
            component={motion.div}
            ref={ref2}
            initial="hidden"
            animate={inView2 && "show"}
            variants={variants}
            item
            style={{ width: "100%", padding: "10px" }}
          >
            <Image
              src="/rooms/gallery/2.webp"
              layout="responsive"
              alt="El Greco Room View"
              width={3797}
              height={2550}
            />
          </Grid>
          <Grid
            component={motion.div}
            ref={ref3}
            initial="hidden"
            animate={inView3 && "show"}
            variants={variants}
            item
            style={{ width: "100%", padding: "10px" }}
          >
            <Image
              src="/rooms/gallery/3.webp"
              layout="responsive"
              alt="El Greco Room Kitchen"
              width={3797}
              height={2848}
            />
          </Grid>
        </Grid>
        <Grid
          component={motion.div}
          ref={ref4}
          initial="hidden"
          animate={inView4 && "show"}
          variants={variants}
          style={{ width: "100%", padding: "10px" }}
          item
          md
        >
          <Image
            src="/rooms/gallery/4.webp"
            layout="responsive"
            alt="El Greco Room View"
            width={2848}
            height={3987}
          />
        </Grid>
      </Grid>
      <Grid
        component={motion.div}
        ref={ref5}
        initial="hidden"
        animate={inView5 && "show"}
        variants={variants}
        item
        style={{ width: "100%", padding: "10px" }}
      >
        <Image
          src="/rooms/gallery/5.webp"
          alt="El Greco Room Interior"
          layout="responsive"
          width={4288}
          height={2412}
        />
      </Grid>
      <Grid container item style={{ width: "100%" }}>
        <Grid
          component={motion.div}
          ref={ref6}
          initial="hidden"
          animate={inView6 && "show"}
          variants={variants}
          item
          style={{ width: "100%", padding: "10px" }}
          md
        >
          <Image
            src="/rooms/gallery/6.webp"
            layout="responsive"
            alt="El Greco Room Garden"
            width={2848}
            height={2136}
          />
        </Grid>
        <Grid
          component={motion.div}
          ref={ref7}
          initial="hidden"
          animate={inView7 && "show"}
          variants={variants}
          item
          style={{ width: "100%", padding: "10px" }}
          md
        >
          <Image
            src="/rooms/gallery/7.webp"
            layout="responsive"
            alt="El Greco Room Garden"
            width={2848}
            height={2136}
          />
        </Grid>
      </Grid>
      <Grid container item style={{ width: "100%" }}>
        <Grid
          component={motion.div}
          ref={ref8}
          initial="hidden"
          animate={inView8 && "show"}
          variants={variants}
          item
          style={{ width: "100%", padding: "10px" }}
          md={matchesSM ? undefined : 7}
        >
          <Image
            src="/rooms/gallery/8.webp"
            layout="responsive"
            alt="El Greco Room Bathroom"
            width={2827}
            height={3262}
          />
        </Grid>
        <Grid
          container
          item
          justify={matchesSM ? "flex-start" : "space-between"}
          direction="column"
          style={{ width: "100%" }}
          md={matchesSM ? undefined : 5}
        >
          <Grid
            component={motion.div}
            ref={ref9}
            initial="hidden"
            animate={inView9 && "show"}
            variants={variants}
            item
            style={{ padding: "10px", width: "100%" }}
          >
            <Image
              src="/rooms/gallery/9.webp"
              layout="responsive"
              alt="El Greco Room View"
              width={2848}
              height={2222}
            />
          </Grid>
          <Grid
            component={motion.div}
            ref={ref10}
            initial="hidden"
            animate={inView10 && "show"}
            variants={variants}
            item
            style={{ padding: "10px", width: "100%" }}
          >
            <Image
              src="/rooms/gallery/10.webp"
              layout="responsive"
              alt="El Greco Room Reception"
              width={2848}
              height={2222}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        component={motion.div}
        ref={ref11}
        initial="hidden"
        animate={inView11 && "show"}
        variants={variants}
        item
        style={{ width: "100%", padding: "10px" }}
      >
        <Image
          src="/rooms/gallery/11.webp"
          layout="responsive"
          alt="El Greco Room Interior"
          width={4288}
          height={2412}
        />
      </Grid>
      <Grid container item style={{ width: "100%" }}>
        <Grid
          component={motion.div}
          ref={ref12}
          initial="hidden"
          animate={inView12 && "show"}
          variants={variants}
          item
          style={{ width: "100%", padding: "10px" }}
          md
        >
          <Image
            src="/rooms/gallery/12.webp"
            layout="responsive"
            alt="El Greco Room Artistic"
            width={2848}
            height={3797}
          />
        </Grid>
        <Grid
          component={motion.div}
          ref={ref13}
          initial="hidden"
          animate={inView13 && "show"}
          variants={variants}
          item
          style={{ width: "100%", padding: "10px" }}
          md
        >
          <Image
            src="/rooms/gallery/13.webp"
            layout="responsive"
            alt="El Greco Room Interior"
            width={2136}
            height={2848}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
