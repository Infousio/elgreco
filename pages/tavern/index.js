
import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav";
import TavernBody from "../../containers/TavernBody";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "200em",
  },
}));

export default function Tavern() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.mainContainer}>
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <TavernBody />
    </div>
  );
}
