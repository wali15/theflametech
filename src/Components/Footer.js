import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import FacebookIcon from "@mui/icons-material/Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EmailIcon from "@mui/icons-material/Email";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { Link } from "react-router-dom";

export default function App() {
  return (
    //  <!-- footer -->
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="first">
              <h4>My Skills</h4>
              <p> Analytical Skills</p>
              <p> Problem-solving skills</p>
              <p> Critical-thinking skills</p>
              <p> Detail-oriented</p>
              <p> Multitasking</p>
              <p> Self-motivated</p>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="second">
              <h4> Navigate</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Our Projects</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="third">
              <h4> Contact</h4>
              <ul>
                <li>FLAME TECH </li>
                <li />
                <li>
                  <i className="far fa-envelope" /> The Flame Tech
                </li>
                <li>
                  <i className="far fa-envelope" /> +923363573763
                </li>
                <li>
                  <i className="far fa-envelope" /> tflametech@gmail.com
                </li>
                <li>
                  <i className="fas fa-map-marker-alt" /> Karachi, PK{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="line" />
            <div className="second2">
              <Link
                to="https://www.facebook.com/theflametech?mibextid=ZbWKwL"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </Link>
              <a href="https://github.com/WebDeveloperCodeRep" target="_blank">
                {" "}
                <i className="fab fa-github fa-2x margin" />
              </a>
              <a
                href="https://www.linkedin.com/in/andreea-mihaela-bunget-a4248812b/"
                target="_blank"
              >
                {" "}
                <i className="fab fa-linkedin fa-2x margin" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCX674BUbomzBCakbb75lhfA?view_as=subscriber"
                target="_blank"
              >
                <i className="fab fa-youtube fa-2x margin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
