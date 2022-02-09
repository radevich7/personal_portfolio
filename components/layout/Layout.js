import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";

import styles from "./Layout.module.scss";
import NextNprogress from "nextjs-progressbar";

// components
import Loading from "../loadingScreen/Loading";
import Navigation from "./Navigation";

const Layout = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const postponeLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : postponeLoading();
    };
    const handleComplete = (url) => {
      postponeLoading();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Fragment>
      <Loading loading={loading} />
      <NextNprogress color="#aefeff" height={5} />
      <Navigation />
      <main className={!loading ? styles.main : styles.none}>
        {props.children}{" "}
      </main>
    </Fragment>
  );
};

export default Layout;
