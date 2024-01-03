import "./Footer.css";
import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logo2 from "../assets/Final_Logo-removebg-preview.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <img className="logo_footer" src={logo2} alt="introImg" />
          <p className="text-icon">
            This is the website of mudberry studios which provides the pottery
            session and pottery workshops to those who are interested in pottery
            and also those who want to spend time with their family doing
            something fun stuff.
          </p>

          <form>Social Media</form>
          <div className="social-icons">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
          </div>
        </div>
        <div className="col">
          <h3>Details</h3>
          <p>SVNIT</p>
          <p>Kargil chowk, Athwa Line</p>
          <p>Gujara,Pin 111111, India </p>
          <p className="email-id">helloWorld@gmail.com</p>
          <h4>+91-0012457836</h4>
        </div>
        <div className="col">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/designs">Design </Link>
            </li>
            <li>
              <Link to="/activities">Activity </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="location">
            <h3>Location</h3>
            <iframe
              className="goof"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4255.814072113604!2d72.77299314267667!3d21.152935195067883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d2d34edd1c9%3A0x17a3999ce3431ad9!2sMudberry%20Pottery%20Studio!5e0!3m2!1sen!2sin!4v1704120958652!5m2!1sen!2sin"
              width="600"
              height="450"
              title="location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
