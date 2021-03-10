import RoomsBody from '../../containers/RoomsBody';
import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
}));

export default function Romms() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.mainContainer}>
      {matchesMD ? <HorizontalNav /> : <VerticalNav />}
      <RoomsBody />
    </div>
  );
};

