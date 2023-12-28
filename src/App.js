import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Details from "./routes/Details";
import Designs from "./routes/Designs";
import Activities from "./routes/Activities";
import Hire from "./routes/Hire";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </>
  );
}

export default App;
