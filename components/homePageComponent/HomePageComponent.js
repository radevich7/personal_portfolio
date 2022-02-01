import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import About from "../about/About";

import Portfolio from "../portfolio/Portfolio";

import styles from "./HomePageComponent.module.scss";
import ContactForm from "../contactForm/ContactForm";

const HomePageComponent = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <About />
      <ContactForm />
    </div>
  );
};

export default HomePageComponent;
