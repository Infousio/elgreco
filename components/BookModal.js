import { useState, useReducer, useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    maxWidth: "600px",
    height: "60vh",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    margin: "15vh 5vw",
    boxShadow: "0px 3px 5px",
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
      margin: "5vh 3vw",
    },
  },
  modalHeader: {
    padding: "2vh 0vw",
    paddingLeft: "2vw",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1vh",
    },
  },
  xButton: {
    height: "32px",
    width: "24px",
  },
  modalBody: {
    padding: "2vh 2vw",
    overflowX: "hidden",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "1vh 1vw",
      height: "56vh",
    },
  },
  modalInput: {
    margin: "1vh 1vw",
    height: "4vh",
    [theme.breakpoints.down("sm")]: {
      height: "3vh",
    },
  },
  bookDate: {
    width: "125px",
    paddingLeft: "4px",
    "& .MuiInputBase-root": {
      color: "#222222",
    },
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
  },
  bookHeader: {
    color: "#222222",
  },
  dateBox: {
    border: "1px solid",
    height: "4vh",
    margin: "1vh 1vw",
    borderColor: "rgb(118,118,118)",
    borderRadius: "5px",
    paddingLeft: "5px",
    [theme.breakpoints.down("sm")]: {
      height: "30px",
    },
  },
  bookButton: {
    margin: "auto",
    width: "15vw",
    minWidth: "150px",
    height: "7vh",
    maxHeight: "75px",
    color: "#F3EFE8",
    backgroundColor: "#222222",
    "&:hover": {
      backgroundColor: "#222222",
    },
    "&.Mui-disabled": {
      color: "#F3EFE8",
      backgroundColor: "rgba(34, 34, 34, 0.5)",
    },
  },
}));

const changeReducer = (state, action) => {
  const value = action.val;
  let isValid = true;
  switch (action.field) {
    case "NAME":
      isValid = isValid && value.trim().length > 0;
      return {
        ...state,
        value,
        isValid,
      };
    case "EMAIL":
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
      return {
        ...state,
        value,
        isValid,
      };
    case "PHONE":
      isValid = isValid && /^\+(?:[0-9] ?){6,14}[0-9]$/.test(value);
      return {
        ...state,
        value,
        isValid,
      };
    default:
      return state;
  }
};

export default function BookModal(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [firstName, firstDispatch] = useReducer(changeReducer, {
    value: "",
    isValid: false,
  });
  const [lastName, lastDispatch] = useReducer(changeReducer, {
    value: "",
    isValid: false,
  });
  const [email, emailDispatch] = useReducer(changeReducer, {
    value: "",
    isValid: false,
  });
  const [number, numberDispatch] = useReducer(changeReducer, {
    value: "",
    isValid: false,
  });
  const [message, messageDispatch] = useReducer(changeReducer, {
    value: "",
    isValid: false,
  });

  const [isFormValid, setFormValid] = useState(false);
  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleFirstName = (event) => {
    firstDispatch({
      val: event.target.value,
      field: "NAME",
    });
  };
  const handleLastName = (event) => {
    lastDispatch({
      val: event.target.value,
      field: "NAME",
    });
  };
  const handleEmail = (event) => {
    emailDispatch({
      val: event.target.value,
      field: "EMAIL",
    });
  };
  const handleNumber = (event) => {
    numberDispatch({
      val: event.target.value,
      field: "PHONE",
    });
  };
  const handleMessage = (event) => {
    messageDispatch({
      val: event.target.value,
      field: "NAME",
    });
  };

  useEffect(() => {
    setFormValid(
      firstName.isValid &&
        lastName.isValid &&
        email.isValid &&
        number.isValid &&
        message.isValid
    );
  }, [firstName, lastName, email, number, message]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    ReactGA.event({ category: "Booking", action: `Book clicked message send.` });
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const inputs = {
      FIRST_NAME: firstName.value,
      LAST_NAME: lastName.value,
      EMAIL: email.value,
      NUMBER: number.value,
      MESSAGE: message.value,
      CHECKIN: props.checkInDate,
      CHECKOUT: props.checkOutDate,
    };
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const response = await res.text();
      handleResponse(res.status, response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitting: false,
        info: { error: false, msg: msg },
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  return (
    <Grid item container direction="column" className={classes.modal}>
      <Grid item container justify="space-between">
        <Grid
          item
          container
          direction="column"
          xs={9}
          className={classes.modalHeader}
        >
          <Typography variant="h4" component="h4" style={{ fontWeight: "700" }}>
            Book Now
          </Typography>
          <Typography variant="body2" component="p">
            It's quick and easy.
          </Typography>
        </Grid>
        <Grid
          item
          component={Button}
          onClick={props.hide}
          disableRipple
          className={classes.xButton}
        >
          <CloseIcon />
        </Grid>
      </Grid>
      <Divider />
      {status.submitting ? (
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          style={{ height: "40vh" }}
        >
          <CircularProgress />{" "}
        </Grid>
      ) : (
        <Grid
          item
          container
          justify="space-evenly"
          className={classes.modalBody}
        >
          <Grid
            item
            component={"input"}
            placeholder="First Name"
            value={firstName.value}
            onChange={handleFirstName}
            required
            type="text"
            className={classes.modalInput}
            sm={5}
            xs={12}
          />
          <Grid
            item
            component={"input"}
            placeholder="Last Name"
            type="text"
            value={lastName.value}
            onChange={handleLastName}
            required
            className={classes.modalInput}
            sm={5}
            xs={12}
          />
          <Grid
            item
            component={"input"}
            placeholder="Email"
            type="email"
            value={email.value}
            onChange={handleEmail}
            required
            className={classes.modalInput}
            sm={5}
            xs={12}
          />
          <Grid
            item
            component={"input"}
            placeholder="Mobile number e.g. +306946018981"
            type="tel"
            value={number.value}
            onChange={handleNumber}
            required
            className={classes.modalInput}
            sm={5}
            xs={12}
          />
          <Grid
            item
            container
            component={MuiPickersUtilsProvider}
            utils={DateFnsUtils}
          >
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
                value={props.checkInDate}
                onChange={props.checkInHandler}
                animateYearScrolling
                variant="inline"
                minDate={props.today}
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
                value={props.checkOutDate}
                onChange={props.checkOutHandler}
                animateYearScrolling
                minDate={props.checkInDate}
                variant="inline"
                minDateMessage=""
                className={classes.bookDate}
              />
            </Grid>
          </Grid>
          <Grid
            item
            component="textarea"
            className={classes.modalInput}
            placeholder="Other informations(Number of guests, questions, etc...)"
            value={message.value}
            onChange={handleMessage}
            required
            xs={11}
            style={{ height: matchesSM ? "75px" : "125px" }}
          />
          <Grid
            item
            component={Button}
            disabled={!isFormValid}
            onClick={handleSubmit}
            className={classes.bookButton}
          >
            <Typography variant="h5">Book Now</Typography>
          </Grid>
          <Grid item component={Typography} variant="body1">
            {status.info.msg}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
