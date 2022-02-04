import Navigation from "./Navigation";
import styles from "./Layout.module.scss";
import { Fragment } from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../loadingScreen/Loading";

import NextNprogress from "nextjs-progressbar";

const Layout = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => {
      setLoading(false);
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
