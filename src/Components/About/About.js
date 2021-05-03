import React from 'react';
import './About.css';
import hero from '../../images/hero.jpg';

const About = () => {
    return (

        <div id="hero">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-12 col-sm-12">
                        <div class="hero-photo">
                            <img src={hero} alt="hero photo"></img>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-sm-12">
                        <div class="about-text">
                            <h3>About Me</h3>
                            <span class="small-title">Web Designer & Web Developer</span>
                            <p>I am <b>Bulbul Ahammed</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                        </div>
                        <div class="skills">
                            <div class="item">
                                <div class="skills-progress">
                                    <h6>Web Design</h6>
                                    <span data-value="95%"></span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="skills-progress">
                                    <h6>Branding</h6>
                                    <span data-value="80%"></span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="skills-progress">
                                    <h6>Development</h6>
                                    <span data-value="90%"></span>
                                </div>
                            </div>
                        </div>
                        <div class="hero-button">
                            <a href="#0" download="">
                                <span class="buton">Download C.V</span>
                            </a>
                            <a href="#">
                                <span class="buton">hire me</span>
                            </a>
                        </div>
                    </div>
                    <div class="clear-fix"></div>
                </div>
            </div>
        </div>

    );
};

export default About;