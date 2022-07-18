import React from "react";
import "./about.css";
import Pic from '../../assets/about/about-picture.png';
import { FaAward } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai"
function About() {
  return <div className="about" id="about">
    <div className="text">
      <h6>Get to Know</h6>
      <h4>About ME</h4>
    </div>
    <div className="about_container">
      <div className="about_img">
        <img id="about_pic" src={Pic} alt="about-pic" />
      </div>
      <div className="about_content">
        <div className="about_cards">
          <div className="about_card col-4">
            <article><FaAward /></article>
            <h4>
              Experience
            </h4>
            <p>
              1 Year working
            </p>
          </div>
          <div className="about_card col-3">
            <article><BsFillPersonFill /></article>
            <h4>
              Clients
            </h4>
            <p>
              10+ worldwide
            </p>
          </div>
          <div className="about_card col-4">
            <article><AiFillProject /></article >
            <h4>
              Projects
            </h4>
            <p>
              5+ completed
            </p>
          </div>
        </div>
        <div className="about_details">
          <p>Pursuing my bachelor's degree from IMSciences Peshawar, in Specialization in Software Engineering. Halfway through my degree.
I am interested in MERN stack development. I have experience in frontend web development using React, and I am still in the learning process of MERN stack development. 
My hobbies are Photo/Videography and editing, Badminton, and video games.
I want to connect with Software Engineers, Web and App developers, and video editors.
My goal is to be a good human being as well as a good Developer.</p>
        </div>
        <div className="about_button">
            <button className="btn btn-primary" href="#contact">Let's Talk</button>
        </div>
      </div>
    </div>


  </div>;
}

export default About;
