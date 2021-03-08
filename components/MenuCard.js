import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "2vh 4vw",
    [theme.breakpoints.down('lg')]: {
      margin: "2vh 3vw"
    }
  },
}));

export default function MenuCard(props) {
  const classes = useStyles();

  return (
    <Grid component={Card} item xs={12} sm={6} md={4} className={classes.root}>
      <CardActionArea >
        <Image style={{margin: "auto"}} src={props.img} alt={props.name} height="198" width="352"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Grid>
  );
}
