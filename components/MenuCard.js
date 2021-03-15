import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "50%",
    padding: "5vh 5vw",
    alignContent: "center"
  },
  image: {
    maxWidth: "96px",
    maxHeight: "54px",
    marginRight: "2vw",
    marginTop: "-2vh"
  },
}));

export default function MenuCard(props) {
  const classes = useStyles();
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
        <Grid item component={Typography} variant="h6">
          {props.imgName}
        </Grid>
        <Grid item component={Typography} variant="caption">
          {props.imgText}
        </Grid>
      </Grid>
    </Grid>
  );
}
