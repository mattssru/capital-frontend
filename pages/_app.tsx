import React from "react";
import NextApp from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Head from "next/head";
import theme from "theme";
import "../styles/global.css";
import "../styles/style.css";
import "../styles/fonts/font.css";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class App extends NextApp {
  static getInitialProps = async ({ Component, ctx }: any) => {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  };
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render = () => {
    const { Component, pageProps }: any = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/favicon.png"
          ></link>
          <title>SafeBsc Capital</title>
        </Head>
        <CssBaseline />
        {/* <FullLayout> */}
        <Component {...pageProps} />
        {/* </FullLayout> */}
      </ThemeProvider>
    );
  };
}
export default App;
