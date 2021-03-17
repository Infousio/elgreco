import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactGA from "react-ga";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import BookModal from "./BookModal";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    zIndex: "3",
  },
  bar: {
    height: "50px",
    backgroundColor: "#222222",
    color: "#F3EFE8",
    [theme.breakpoints.down("sm")]: {
      color: "#222222",
      backgroundColor: "#F3EFE8",
    },
  },
  bookDate: {
    width: "125px",
    paddingLeft: "0.5vw",
    "& .MuiInputBase-root": {
      color: "#DBDBDB",
      [theme.breakpoints.down("sm")]: {
        color: "#222222",
      },
    },
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
  },
  bookButton: {
    position: "absolute",
    width: "100px",
    right: "0",
    color: "#222222",
    backgroundColor: "#DBDBDB",
    height: "50px",
    "&:hover": {
      backgroundColor: "rgba(219,219,219,0.8)",
      color: "#222222",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      backgroundColor: "#F3EFE8",
    },
  },
  barTypo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  elgreco: {
    fontFamily: "Pacifico, cursive",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  modalContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
}));

export default function RoomsBookBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const todayDate = new Date();
  const [checkIn, setCheckIn] = useState(todayDate);
  const [checkOut, setCheckOut] = useState(todayDate);
  const [showMainBook, setShowMainBook] = useState(false);

  const variants = {
    start: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        easeInOut: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const handleCheckIn = (date) => {
    setCheckIn(date);
    if (date > checkOut) {
      setCheckOut(date);
    }
  };
  const handleCheckOut = (date) => {
    setCheckOut(date);
  };
  const handleShowBook = () => {
    setShowMainBook((prevValue) => !prevValue);
    ReactGA.event({ category: "Booking", action: `showBook clicked` });
  };

  const handleHideBook = () => {
    setShowMainBook(false);
  };

  return (
    <Grid item container direction="column" className={classes.container}>
      <Grid
        item
        container
        alignItems="center"
        justify="center"
        className={classes.bar}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Typography className={classes.barTypo} variant="body1">
            Check-In:
          </Typography>
          <DatePicker
            value={checkIn}
            onChange={handleCheckIn}
            animateYearScrolling
            variant="inline"
            minDate={todayDate}
            disablePast
            className={classes.bookDate}
            style={{ display: matchesSM ? "none" : "inline" }}
          />
          <Typography className={classes.barTypo} variant="body1">
            Check-Out:{" "}
          </Typography>
          <DatePicker
            value={checkOut}
            onChange={handleCheckOut}
            animateYearScrolling
            minDate={checkIn}
            variant="inline"
            minDateMessage=""
            className={classes.bookDate}
            style={{ display: matchesSM ? "none" : "inline" }}
          />
        </MuiPickersUtilsProvider>
        <Typography className={classes.elgreco} variant="h6">
          EL GRECO ROOMS
        </Typography>
        <Button className={classes.bookButton} onClick={handleShowBook}>
          BOOK
        </Button>
      </Grid>
      <AnimatePresence>
        {showMainBook && (
          <Grid
            item
            container
            component={motion.div}
            justify="center"
            initial="start"
            animate="show"
            exit="exit"
            variants={variants}
            className={classes.modalContainer}
          >
            <BookModal
              checkInDate={checkIn}
              checkOutDate={checkOut}
              checkOutHandler={handleCheckOut}
              checkInHandler={handleCheckIn}
              today={todayDate}
              hide={handleHideBook}
            />
          </Grid>
        )}
      </AnimatePresence>
    </Grid>
  );
}
