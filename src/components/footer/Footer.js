import React from "react";
import './footer.css'
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
function Footer() {
  return <footer>
    <h3>DEV. WAHEED</h3>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      {/* <li><a href="#services">Services</a></li> */}
      {/* <li><a href="#services">Experience</a></li> */}
      {/* <li><a href="#services">Testimonial</a></li> */}
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer_social_links">
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
        <a href="https://github.com/WaheedAKhan947" target='/blank'>
          <AiOutlineGithub />
        </a>
      </div>
      <div className="location"></div>
      <small>&copy; DEV. Waheed | All rights reserved | 2022 </small>
      
  </footer>;
}

export default Footer;
