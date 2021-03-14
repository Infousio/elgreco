import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "50%",
    padding: "5vh 0",
    alignContent: "center"
  },
  image: {
    maxWidth: "96px",
    maxHeight: "54px",
    marginRight: "1vw"
  },
}));

export default function MenuCard(props) {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" item className={classes.root} md={12} lg={6}>
      <Grid item className={classes.image} xs>
        <Image
          src={props.imgUrl ? props.imgUrl : "/noimage.webp"}
          width={1280}
          height={720}
          alt={props.imgName}
          className={classes.image}
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
