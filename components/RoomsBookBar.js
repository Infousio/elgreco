import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

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
        color: "#222222"
      }
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
  mainBook: {
    height: "90vh",
    width: "100vw",
    backgroundColor: "#222222",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#F3EFE8",
    },
  },
  bookHeader: {
    color: "#F3EFE8",
    [theme.breakpoints.down("sm")]: {
      color: "#222222",
    },
  },
  form: {
    marginTop: "5vh",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3vh",
      width: "95%",
    },
  },
  field: {
    width: "100%",
    height: "50px",
    padding: "2vh 2vw",
    borderRadius: "10px",
    fontSize: "1.3rem",
    margin: "1vh 1vw",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#222222",
      color: "#F3EFE8",
    },
  },
  dateBox: {
    border: "2px solid",
    height: "50px",
    margin: "1vh 1vw",
    borderColor: "#F3EFE8",
    borderRadius: "15px",
    paddingLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      borderColor: "#222222"
    }
  }
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
      y: "-100vh",
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
      y: "-100vh",
    },
  };

  const handleCheckIn = (date) => {
    setCheckIn(date);
    if (date > checkOut) {
      console.log("bigger");
      setCheckOut(date);
    }
  };
  const handleCheckOut = (date) => {
    setCheckOut(date);
  };
  const handleShowBook = () => {
    setShowMainBook((prevValue) => !prevValue);
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
        {!showMainBook && (
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
              style={{display: matchesSM ? "none" : "inline"}}
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
              style={{display: matchesSM ? "none" : "inline"}}
            />
          </MuiPickersUtilsProvider>
        )}
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
            component={motion.div}
            initial="start"
            animate="show"
            exit="exit"
            variants={variants}
            alignItems="center"
            item
            container
            className={classes.mainBook}
            direction="column"
          >
            <Typography
              variant="h5"
              style={{ marginTop: "5vh" }}
              className={classes.bookHeader}
            >
              Contact Form
            </Typography>
            <Grid
              className={classes.form}
              justify="space-evenly"
              container
              item
              component={"form"}
            >
              <Grid
                item
                component={"input"}
                placeholder="First Name"
                type="text"
                className={classes.field}
                sm={5}
                xs={12}
              />
              <Grid
                item
                component={"input"}
                placeholder="Last Name"
                type="text"
                className={classes.field}
                sm={5}
                xs={12}
              />
              <Grid
                item
                component={"input"}
                placeholder="Email"
                type="email"
                className={classes.field}
                sm={5}
                xs={12}
              />
              <Grid
                item
                component={"input"}
                placeholder="Mobile number"
                type="tel"
                className={classes.field}
                sm={5}
                xs={12}
              />
              <Grid item container justify="space-evenly">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid
                    item
                    container
                    alignItems="center"
                    sm={5}
                    xs={12}
                    className={classes.dateBox}
                  >
                    <Typography
                      className={classes.bookHeader}
                      display="inline"
                      variant="body1"
                    >
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
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    alignItems="center"
                    sm={5}
                    xs={12}
                    className={classes.dateBox}
                  >
                    <Typography
                      className={classes.bookHeader}
                      display="inline"
                      variant="body1"
                    >
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
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </Grid>
        )}
      </AnimatePresence>
    </Grid>
  );
}
