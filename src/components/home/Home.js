import React from "react";
import "./home.css";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import CV from '../../assets/Home/waheed-cv.pdf';
import Picture from "../../assets/Home/waheedDp.jpg";
function Home() {
  return (
    <div className="home" id="home">
      <div className="text">
        <h5>Hello, I' am</h5>
        <p>Waheed Ahmad Khan</p>
        <h6>Front-End React Developer</h6>
      </div>
      <div className="btns">
        <button className="btn btn-primary" ><a href={CV} download>Download CV</a></button>
        <button className="btn btn-primary"><a href="#contact">Contact ME</a></button>
      </div>
      <div className="social-links">
        <a href="https://facebook.com/waheed.ahmad.370177" target='/blank'>
          <AiOutlineFacebook />
        </a>
        <a href="https://twitter.com/WaHeeD_A_kHaN" target='/blank'>
          <AiOutlineTwitter />
        </a>
        <a href="https://instagram.com/waheed_a_khan" target='/blank'>
          <AiOutlineInstagram />
        </a>
        <a href="https://linkedin.com/in/waheed-ahmad-khan-3570491ba/" target='/blank'>
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/WaheedAKhan947" target='?blank'>
          <AiOutlineGithub />
        </a>
      </div>
      <div className="pic">
        <img src={Picture} alt="Profile Pic" />
      </div>
    </div>
  );
}

export default Home;