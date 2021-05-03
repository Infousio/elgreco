import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "50%",
    padding: "5vh 5vw",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "3vh 1vw"
    }
  },
  image: {
    maxWidth: "96px",
    maxHeight: "96px",
    marginRight: "2vw",
    marginTop: "-2vh",
  },
  foodName: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "1rem"
    }
  }
}));

export default function MenuCard(props) {
  const classes = useStyles();

  const price = props.price + " €";
  return (
    <Grid container item className={classes.root} md={12} lg={6}>
      <Grid item className={classes.image} xs>
        <Image
          src={props.imgUrl ? props.imgUrl : "/noimage.webp"}
          width={360}
          height={360}
          alt={props.imgName}
        />
      </Grid>
      <Grid item container direction="column" xs>
        <Grid container justify="space-between" item>
          <Typography variant="h6" component="h6" className={classes.foodName}>
            {props.imgName}
          </Typography>
          <Typography variant="h6" component="h6" className={classes.foodName}>
            {props.price ? price : null}
          </Typography>
        </Grid>
        <Grid item component={Typography} variant="caption">
          {props.imgText}
        </Grid>
      </Grid>
    </Grid>
  );
}
