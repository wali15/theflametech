import React from "react";
import "./ContactUs.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  return (
    <div className="container">
      <br></br>
      <h2>Contact us</h2>
      <br></br>
      <div>
        <div className="social-links">
          <a
            style={{ textDecoration: "none" }}
            href="https://wa.me/03363573763"
            className="social-link1"
            target="_blank"
          >
            <WhatsAppIcon /> Contact us on WhatsApp
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp; <br></br>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/theflametech?mibextid=ZbWKwL"
            className="social-link2"
            target="_blank"
          >
            <FacebookIcon /> Like Our Facebook Page
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          <a
            style={{ textDecoration: "none" }}
            href="mailto: tflametech@gmail.com"
            className="social-link3"
            target="_blank"
          >
            <GoogleIcon /> Mail us
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/the-flame-tech-"
            className="social-link4"
            target="_blank"
          >
            <LinkedInIcon /> Follow us on LinkedIn
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          <a
            style={{ textDecoration: "none" }}
            href="https://g.co/kgs/8JpGyb"
            className="social-link5"
            target="_blank"
          >
            <LocationOnIcon /> Our Location
          </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
