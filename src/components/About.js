import "./About.css";
import React from "react";
import about_img from "../assets/IMG_8494.JPG";

const About = () => {
  return (
    <div className="about">
      <div className="about_pic">
        <div className="a_pic">
          <img src={about_img} alt="img" />
        </div>
      </div>
      <div className="about_info">
        <div className=""></div>
      </div>
    </div>
  );
};

export default About;
