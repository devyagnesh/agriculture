import React from "react";
import About from "../../Components/About/About";
import Cta from "../../Components/Cta/Cta";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Newsletter from "../../Components/Newsletter/Newsletter";
export const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <Cta />
      <Features />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
};
