import Image from "next/image";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "2vh 2vw",
    [theme.breakpoints.down("lg")]: {
      margin: "2vh 4vw",
    },
  },
}));

export default function MenuCard(props) {
  const classes = useStyles();
  return (
    <Grid component={Card} item xs={12} sm={6} md={4} className={classes.root}>
      {props.link ? (
        <Link href={props.link}>
          <CardActionArea>
            <div
              style={{
                backgroundImage: "url(/menu/food/background.webp)"
              }}
            >
              <Image
                style={{
                  margin: "auto",
                }}
                src={props.img ? props.img : "/noimage.webp"}
                alt={props.name}
                height="194px"
                width="345px"
                priority={props.prio ? true : false}
                loading={props.prio ? undefined : "lazy"}
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      ) : (
        <CardActionArea disableRipple style={{ cursor: "default" }}>
          <div
            style={{
              backgroundImage: "url(/menu/food/background.webp)",
            }}
          >
            <Image
              style={{
                margin: "auto",
              }}
              src={props.img ? props.img : "/noimage.webp"}
              alt={props.name}
              height="194px"
              width="345px"
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            {props.description ? (
              <Typography variant="body1" component="p">
                {props.description}
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
      )}
    </Grid>
  );
}
