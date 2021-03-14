import React from "react";
import ReactGA from "react-ga";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "../styles/app.css";
import { motion, AnimatePresence } from "framer-motion";

ReactGA.initialize("UA-185393136-1");

export default function MyApp(props) {
  const { Component, pageProps, router } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const variants = {
    pageInitial: {
      opacity: 0,
    },
    pageAnimate: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0
    }
  };

  return (
    <>
      <Head>
        <title>El Greco - Restaurant | Rooms - Homepage</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          key="description"
          content="El Greco - Restaurant | Rooms - Homepage"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="exit"
            variants={variants}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
