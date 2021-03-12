import Image from "next/image";

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

  return (
    <Grid
      className={classes.container}
      alignItems="center"
      container
      direction="column"
    >
      <Grid item style={{ width: "100%", padding: "10px" }}>
        <Image
          src="/rooms/gallery/1.webp"
          layout="responsive"
          width={4288}
          height={2412}
        />
      </Grid>
      <Grid item container style={{ width: "100%" }}>
        <Grid item container style={{ width: "100%" }} direction="column" md>
          <Grid item style={{ width: "100%", padding: "10px" }}>
            <Image
              src="/rooms/gallery/2.webp"
              layout="responsive"
              width={3797}
              height={2550}
            />
          </Grid>
          <Grid item style={{ width: "100%", padding: "10px" }}>
            <Image
              src="/rooms/gallery/3.webp"
              layout="responsive"
              width={3797}
              height={2848}
            />
          </Grid>
        </Grid>
        <Grid style={{ width: "100%", padding: "10px" }} item md>
          <Image
            src="/rooms/gallery/4.webp"
            layout="responsive"
            width={2848}
            height={3987}
          />
        </Grid>
      </Grid>
      <Grid item style={{ width: "100%", padding: "10px" }}>
        <Image
          src="/rooms/gallery/5.webp"
          layout="responsive"
          width={4288}
          height={2412}
        />
      </Grid>
      <Grid container item style={{ width: "100%" }}>
        <Grid item style={{ width: "100%", padding: "10px" }} md>
          <Image
            src="/rooms/gallery/6.webp"
            layout="responsive"
            width={2848}
            height={2136}
          />
        </Grid>
        <Grid item style={{ width: "100%", padding: "10px" }} md>
          <Image
            src="/rooms/gallery/7.webp"
            layout="responsive"
            width={2848}
            height={2136}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        style={{ width: "100%" }}
      >
        <Grid item style={{ width: "100%", padding: "10px" }} md={matchesSM ? undefined : 7}>
          <Image
            src="/rooms/gallery/8.webp"
            layout="responsive"
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
          <Grid item style={{ padding: "10px", width: "100%" }}>
            <Image
              src="/rooms/gallery/9.webp"
              layout="responsive"
              width={2848}
              height={2222}
            />
          </Grid>
          <Grid item style={{ padding: "10px", width: "100%" }}>
            <Image
              src="/rooms/gallery/10.webp"
              layout="responsive"
              width={2848}
              height={2222}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ width: "100%", padding: "10px" }}>
        <Image
          src="/rooms/gallery/11.webp"
          layout="responsive"
          width={4288}
          height={2412}
        />
      </Grid>
      <Grid container item style={{ width: "100%" }}>
        <Grid item style={{ width: "100%", padding: "10px" }} md>
          <Image
            src="/rooms/gallery/12.webp"
            layout="responsive"
            width={2848}
            height={3797}
          />
        </Grid>
        <Grid item style={{ width: "100%", padding: "10px" }} md>
          <Image
            src="/rooms/gallery/13.webp"
            layout="responsive"
            width={2136}
            height={2848}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
