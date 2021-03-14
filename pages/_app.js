import React from "react";
import ReactGA from "react-ga";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "../styles/app.css";
import { motion } from "framer-motion";
import Router from 'next/router';
import NProgress from 'nprogress';

ReactGA.initialize("G-H3J44SQDLE");

Router.onRouteChangeStart = url => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();

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
      opacity: 0
    },
    pageAnimate: {
      opacity: 1,
      transition: {
        delay: .4
      }
    }
  }

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
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={variants}
        >
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
