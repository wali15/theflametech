import React from "react";
import "./Project.css";
import AbdullahMallPic1 from "../OurProjectsImages/AbdullahMallPic1.jpg";
import AbdullahMallPic2 from "../OurProjectsImages/AbdullahMallPic2.jpg";
import AbdullahMallPic3 from "../OurProjectsImages/AbdullahMallPic3.jpg";

const Projects = () => {
  return (
    <div className="container">
      <h1>Our Projects</h1>
      <h4>Abdullah Mall (Hyderabad)</h4>
      <div className="row-center">
        <img src={AbdullahMallPic1} class="img" alt="Abdullah Mall" />
        <img src={AbdullahMallPic2} class="img" alt="Abdullah Mall" />
        <img src={AbdullahMallPic3} class="img" alt="Abdullah Mall" />
      </div>
      <h4>Abdullah Mall (Hyderabad)</h4>
      <div className="row-center">
        <img src={AbdullahMallPic1} class="img" alt="Abdullah Mall" />
        <img src={AbdullahMallPic2} class="img" alt="Abdullah Mall" />
        <img src={AbdullahMallPic3} class="img" alt="Abdullah Mall" />
      </div>
      <h4>Abdullah Mall (Hyderabad)</h4>
      <div className="row-center">
        <img src={AbdullahMallPic1} class="img" alt="Abdullah Mall" />
        <img src={AbdullahMallPic2} class="img" alt="Abdullah Mall" />
        <img src={AbdullahMallPic3} class="img" alt="Abdullah Mall" />
      </div>
      <h4>Abdullah Mall (Hyderabad)</h4>
      <div className="row-center">
        <img src={AbdullahMallPic1} class="img" alt="Abdullah Mall" />
        <img src={AbdullahMallPic2} class="img" alt="Abdullah Mall" />
        <img src={AbdullahMallPic3} class="img" alt="Abdullah Mall" />
      </div>
    </div>
  );
};

export default Projects;
