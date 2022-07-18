import React from "react";
import "./contact.css";
import {MdEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {RiWhatsappFill} from "react-icons/ri";
function Contact() {
  return <div className="contact" id="contact">
    <div className="text">
      <h6>Get in touch</h6>
      <h4>Contact ME</h4>
    </div>
    <div className="contact_container">
      <div className="contact_cards">
        <div className="contact_card">
          <article><MdEmail/></article>
          <h4>Email</h4>
          <p>wakkhan947@gmail.com</p>
          <a href="mailto:wakkhan947@gmail.com" target="/blank">Send a message</a>
        </div>
        <div className="contact_card">
        <article><BsMessenger/></article>
          <h4>Messenger</h4>
          <p>Waheed A Khan</p>
          <a href="https://m.me/waheed.ahmad.370177" target="/blank">Send a message</a>
        </div>
        <div className="contact_card">
        <article><RiWhatsappFill/></article>
          <h4>WhatsApp</h4>
          <p>+92 311 9345445</p>
          <a href="https://api.whatsapp.com/send?phone+923119345445" target="/blank">Send a message</a>
        </div>
      </div>
      <form action="" className="contact_form">
        <input type='text' placeholder="Full Name" name="name" required></input>
        <input type="email" placeholder="Your Email" name="email" required></input>
        <textarea placeholder="Your Messege" name="messege" rows="7" required></textarea>
        <button className="btn btn-primary w-25" type="submit">Send Messege</button>
      </form>
    </div>
  </div>;
}

export default Contact;
