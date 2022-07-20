import React from "react";
import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";
function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="text">
        <h6>What Skills I have</h6>
        <h4>My Experience</h4>
      </div>
      <div className="container experience_content">
        <div className="container_experience ">
          <h4>FRONTEND DEVELOPMENT</h4>
          <hr />
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>HTML</h6>
              <small>Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>CSS</h6>
              <small>Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>BOOTSTRAP</h6>
              <small>Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>REACT</h6> 
              <small>Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>REACT BOOTSTRAP</h6>
              <small>Intermediate</small>
            </div>
          </article>
        </div>
        <div className="container_experience ">
          <h4>BACKEND DEVELOPMENT</h4>
          <hr />
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>NODE JS</h6>
              <small>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>EXPRESS JS</h6>
              <small>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>FIREBASE</h6>
              <small>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>PHP</h6>
              <small>Beginner</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>JAVA</h6>
              <small>Intermediate</small>
            </div>
          </article>
        </div>
        <div className="container_experience ">
          <h4>DATABASES</h4>
          <hr />
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>MONGO DB</h6>
              <small>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>ORACLE MYSQL</h6>
              <small>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>SQL SERVER</h6>
              <small>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>MS ACCESS</h6>
              <small>Beginner</small>
            </div>
          </article>
          <article className="experience_details">
            <AiFillCheckCircle />
            <div>
              <h6>FIRESTORE</h6>
              <small>Experienced</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Experience;
