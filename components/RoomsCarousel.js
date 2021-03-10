import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "./RoomsCarousel.module.css";

import { makeStyles } from "@material-ui/core/styles";

const images = [
  "/backgroundMain.webp",
  "/taverna2-1080.webp",
  "/tavernBackground.webp",
];

const useStyles = makeStyles((theme) => ({
  fader: {
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  fader__slide: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
  },
  image: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translate(-50%)",
  },
}));

export default function RoomsCarousel(props) {
  const classes = useStyles();
  const [opacities, setOpacities] = useState([]);

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    duration: 1000,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
  });

  return (
    <div ref={sliderRef} className={classes.fader}>
      {images.map((src, idx) => (
        <div
          key={idx}
          className={classes.fader__slide}
          style={{ opacity: opacities[idx] }}
        >
          <Image src={src} className={classes.image} layout="fill" />
        </div>
      ))}
    </div>
  );
}
