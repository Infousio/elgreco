import Image from "next/image";
import Link from "../src/Link";
import Footer from "./Footer";
import RoomsCarousel from '../components/RoomsCarousel';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { WidgetsTwoTone } from "@material-ui/icons";

const useStyles = (theme => ({
  container: {
    height: "100%",
    width: "100%"
  }
}));

export default function RoomsBody() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <RoomsCarousel />
    </div>
  );
};