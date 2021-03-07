import Link from '../src/Link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {makeStyles, useTheme} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

  footerLinks: {
    ...theme.palette.aTags,
    fontFamily: "PT Mono, monospace",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: "1em"
    }
  },
  container: {
    height: "40vh",
    width: "100vw",
    padding: "0 15vw",
    backgroundColor: "#FCF9EE",
    [theme.breakpoints.down("sm")]: {
      height: "100%"
    }
  }
}));

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


  return(
    <Grid container className={classes.container}>
      <Grid item container justify="center" direction="column" md style={{marginTop: matchesSM ? "4em" : 0, alignContent: matchesSM ? "center" : undefined}}>
        <Typography variant={matchesXS ? "h4" : "h3"} style={{fontFamily: "PT Mono, monospace", textAlign: matchesSM ? "center" : "left"}} gutterBottom>INFO</Typography>
        <Typography href="/contact" component={Link} variant="h5" className={classes.footerLinks} gutterBottom>
          CONTACT
        </Typography>
        <Typography href="https://g.page/GrecoCucina?share" component={Link} variant="h5" className={classes.footerLinks} gutterBottom>
          GOOGLE MAPS
        </Typography>
        <Typography href="/faq" component={Link} variant="h5" className={classes.footerLinks}>
          F.A.Q.
        </Typography>
      </Grid>
      <Grid item container justify="center" alignItems={matchesSM ? "center" : "flex-end"} direction="column" md style={{alignContent: matchesSM ? "center" : undefined, paddingBottom: matchesSM ? "7em" : 0}}>
        <Typography variant={matchesXS ? "h4" : "h3"} style={{fontFamily: "PT Mono, monospace", textAlign: "center"}} gutterBottom>SOCIAL MEDIA</Typography>
        <Typography href="https://www.facebook.com/elgrecovrasna" component={Link} variant="h5" className={classes.footerLinks} gutterBottom>
          FACEBOOK
        </Typography>
        <Typography href="https://www.instagram.com/elgreco_vrasna" component={Link} variant="h5" className={classes.footerLinks} gutterBottom>
          INSTAGRAM
        </Typography>
        <Typography href="https://www.tripadvisor.com/Restaurant_Review-g1574369-d8826858-Reviews-El_Greco_Tavern-Vrasna_Thessaloniki_Region_Central_Macedonia.html?m=19905" component={Link} variant="h5" className={classes.footerLinks}>
          TRIP ADVISOR
        </Typography>
      </Grid>
    </Grid>
  )
}