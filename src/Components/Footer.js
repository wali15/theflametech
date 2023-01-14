import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-center text-md-left">
              Copyright ©2023 Flame Tech Gas Company Inc. All rights reserved.
            </p>
          </div>
          <div className="position-absolute start-50">
            <div className="social-links">
              <a
                style={{ textDecoration: "none" }}
                href="https://wa.me/03363573763"
                className="social-link"
                target="_blank"
              >
                <WhatsAppIcon /> WhatsApp
              </a>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{ textDecoration: "none" }}
                href="https://www.facebook.com/theflametech?mibextid=ZbWKwL"
                className="social-link"
                target="_blank"
              >
                <FacebookIcon /> Facebook
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{ textDecoration: "none" }}
                href="mailto: tflametech@gmail.com"
                className="social-link"
                target="_blank"
              >
                <GoogleIcon /> Google
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/the-flame-tech-"
                className="social-link"
                target="_blank"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{ textDecoration: "none" }}
                href="https://g.co/kgs/8JpGyb"
                className="social-link"
                target="_blank"
              >
                <LocationOnIcon /> My Locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
