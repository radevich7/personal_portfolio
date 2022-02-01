import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import About from "../about/About";

import Portfolio from "../portfolio/Portfolio";

import styles from "./HomePageComponent.module.scss";

const HomePageComponent = () => {
  return (
    <div>
      <Header />
      <About />

      <Portfolio />
    </div>
  );
};

export default HomePageComponent;
