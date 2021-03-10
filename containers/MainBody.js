import Link from '../src/Link';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from '@material-ui/core/useMediaQuery';
 
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    paddingTop: "15vh",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "5vh"
    }
  },
  bodyContainer: {
    height: "25vh",
    maxHeight: "200px",
    minHeight: "150px",
    marginTop: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(4px)",
    boxShadow: "0px 3px 6px 5px rgba(0, 0, 0, 0.3)",
    alignContent: "center",
    padding: "0 1em",
    [theme.breakpoints.down("xs")]: {
      height: "28vh"
    }
  },
  titles: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    textShadow: "2px 4px 5px rgba(0,0,0, 0.5)",
    textAlign: "center",
  },
  boxContainer: {
    marginTop: "-3em",
    zIndex: 2,
    [theme.breakpoints.down("xs")]: {
      marginTop: "3em"
    }
  },
  buttonBox: {
    backgroundColor: "rgba(234, 219, 186, .7)",
    backdropFilter: "blur(6px)",
    padding: "1em",
    width: "15em",
    border: "3px solid white",
    "&:hover": {
      backdropFilter: "blur(8px)"
    }
  },
}));

const MainBody = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item container direction="column" justify={matchesXS ? "center" : "flex-start"} className={classes.bodyContainer}>
        <Grid item style={{ marginTop: "1em" }}>
          <Typography variant={matchesMD ? matchesXS ? "body1" : "h6" : "h5"} className={classes.titles}>
            WELCOME
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={matchesMD ? matchesXS ? "h5" : "h4" : "h3"} className={classes.titles} style={{marginTop: "0.3em"}}>
            ELGRECO INTRODUCES NEA&nbsp;VRASNA
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.titles} style={{marginTop: "0.5em"}}>
            explore.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.boxContainer}
        justify="space-evenly"
        alignContent="center"
        direction={matchesXS ? "column" : "row"}
      >
        <Grid item component={Link} href="/tavern" style={{textDecoration: "none", margin: "1em"}}>
          <Button className={classes.buttonBox}>
            <Typography variant="h5" className={classes.titles}>
              Elgreco <br/> Tavern
            </Typography>
          </Button>
        </Grid>
        <Grid item component={Link} href="/rooms" style={{textDecoration: "none", margin: "1em"}}>
          <Button className={classes.buttonBox}>
            <Typography variant="h5" className={classes.titles}>
              Elgreco <br/> Rooms
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainBody;
