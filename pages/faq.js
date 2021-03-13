import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";

import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import Footer from "../containers/Footer";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import faq from "../json/faq.json";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#152219",
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "90%",
    flexShrink: 0,
  },
  mono: {
    fontFamily: "PT Mono, monospace",
    color: "white",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Faq() {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [expandedRooms, setExpandedRooms] = useState(false);
  const [expandedTaverna, setExpandedTaverna] = useState(false);

  const handleChangeRooms = (panel) => (event, isExpanded) => {
    setExpandedRooms(isExpanded ? panel : false);
  };
  const handleChangeTaverna = (panel) => (event, isExpanded) => {
    setExpandedTaverna(isExpanded ? panel : false);
  };

  const questionsRooms = faq.FAQ_Rooms.map((question, index) => {
    return (
      <Accordion
        expanded={expandedRooms === `panel${index}`}
        onChange={handleChangeRooms(`panel${index}`)}
        style={{ width: "80vw" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}bh=content`}
          id={`panel${index}bh=-header`}
        >
          <Typography className={classes.heading}>
            {question.Question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{question.Answer}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });

  const questionsTaverna = faq.FAQ_Taverna.map((question, index) => {
    return (
      <Accordion
        expanded={expandedTaverna === `panelt${index}`}
        onChange={handleChangeTaverna(`panelt${index}`)}
        style={{ width: "80vw" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panelt${index}bh=content`}
          id={`panelt${index}bh=-header`}
        >
          <Typography className={classes.heading}>
            {question.Question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{question.Answer}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Layout>
      <div className={classes.container}>
        <Head>
          <title key="title">
            El Greco - F.A.Q | Frequently Asked Questions
          </title>
          <meta
            name="description"
            key="description"
            content="Frequently asked question about El Greco Restaraunt and Rooms."
          />
          <meta
            property="og:title"
            content="El Greco | F.A.Q."
            key="og:title"
          />
          <link
            rel="canonical"
            key="canonical"
            href="https://elgreco.vercel.app/faq"
          />
        </Head>
        {matchesMD ? <HorizontalNav /> : <VerticalNav />}
        <Grid direction="column" container>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            style={{ width: "100%", margin: "5vh 0" }}
          >
            <Typography
              className={classes.mono}
              variant={matchesSM ? "h4" : matchesMD ? "h3" : "h2"}
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Frequently asked questions
            </Typography>
            <Typography
              className={classes.mono}
              variant={matchesMD ? "h5" : "h4"}
              gutterBottom
            >
              El Greco Rooms
            </Typography>
            {questionsRooms}
            <Typography
              style={{ marginTop: "2vh" }}
              className={classes.mono}
              variant={matchesMD ? "h5" : "h4"}
              gutterBottom
            >
              El Greeco Taverna
            </Typography>
            {questionsTaverna}
          </Grid>

          <Grid item container>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
