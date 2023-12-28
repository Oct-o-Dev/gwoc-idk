import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Details from "../components/Details";
import Designs from "../components/Designs";
import Contact from "../components/Contact";
import Activities from "../components/Activities";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Details />
      <Designs />
      <Contact />
      <Activities />
      <Footer />
    </div>
  );
};

export default Home;
