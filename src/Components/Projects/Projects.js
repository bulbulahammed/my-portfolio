import React from "react";
import "./Projects.css";
import ProjectOne from "../../images/project-1.png";
import ProjectTwo from "../../images/project-2.png";
import ProjectThree from "../../images/project-3.png";
import ProjectFour from "../../images/project-4.png";
import ProjectFive from "../../images/project-5.png";
import ProjectSix from "../../images/project-6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, fas } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div id="project">
      <div className="container">
        <div className="row justify-content-center section-title">
          <div className="col-md-3">
            <h3>My Project</h3>
            <p>Some of my Projects</p>
          </div>
        </div>
        <div className="row project-area">
          <div className="col-md-4 single-project">
            <div className="single-project-img">
              <img className="w-100" src={ProjectOne} alt="Project One" />
              <div class="single-project-overlay">
                <h2>Soccer League</h2>
                <a href="https://sports-soccer-league.netlify.app/">
                  <FontAwesomeIcon icon={(fas, faLink)} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 single-project">
            <div className="single-project-img">
              <img className="w-100" src={ProjectTwo} alt="Project One" />
              <div class="single-project-overlay">
                <h2>International Cuisine</h2>
                <a href="https://bulbulahammed.github.io/Assignment-5/">
                  <FontAwesomeIcon icon={(fas, faLink)} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 single-project">
            <div className="single-project-img">
              <img className="w-100" src={ProjectThree} alt="Project One" />
              <div class="single-project-overlay">
                <h2>Flight Booking</h2>
                <a href="https://bulbulahammed.github.io/Assignment-4-ticket-booking/">
                  <FontAwesomeIcon icon={(fas, faLink)} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 single-project">
            <div className="single-project-img">
              <img className="w-100" src={ProjectFour} alt="Project One" />
              <div class="single-project-overlay">
                <h2>enter project title</h2>
                <a href="#">
                  <FontAwesomeIcon icon={(fas, faLink)} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 single-project">
            <div className="single-project-img">
              <img className="w-100" src={ProjectFive} alt="Project One" />
              <div class="single-project-overlay">
                <h2>enter project title</h2>
                <a href="#">
                  <FontAwesomeIcon icon={(fas, faLink)} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 single-project">
            <div className="single-project-img">
              <img className="w-100" src={ProjectSix} alt="Project One" />
              <div class="single-project-overlay">
                <h2>enter project title</h2>
                <a href="#">
                  <FontAwesomeIcon icon={(fas, faLink)} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
