import "./About.css";
import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="text">
          <h1>ABOUT US</h1>
          <p>
            Professor Mudberry is a distinguished Master Potter, holding a Ph.D.
            in Ceramic Mastery from the renowned Institute of Artistic
            Craftsmanship. With decades of experience, they are an international
            clay ambassador known for innovative techniques and expertise in
            both contemporary and ancient pottery methods.
            <br />
            Join Professor Mudberry's hands-on workshops to explore pottery,
            blending tradition with innovation. Covering skills from the
            potter's wheel to ancient techniques, these sessions foster
            creativity and community, incorporating clay therapy practices for a
            transformative artistic experience.{" "}
          </p>

          <button className="button-50">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
