import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import Grid from '@material-ui/core/Grid';

export default function AnimatedImage(props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [isLoaded, setIsLoaded] = useState(false);

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
      item
      component={motion.div}
      ref={ref}
      initial="hidden"
      animate={inView && isLoaded && "show"}
      variants={variants}
      style={{ width: "100%", padding: "10px" }}
      md={props.md}
    >
      <Image
        layout="responsive"
        width={props.imgWidth}
        height={props.imgHeight}
        src={props.imgSrc}
        alt={props.imgAlt}
        onLoad={() => setIsLoaded(true)}
      />
    </Grid>
  );
}
