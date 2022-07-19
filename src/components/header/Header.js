import React from "react";
import "./header.css";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
// import { MdLightMode } from "react-icons/md";
// import { FaTools } from "react-icons/fa"
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <Navbar fixed="top" bg="dark" expand="lg">
        <Container fluid d-flex justify-content-between>
          <Navbar.Brand href="/" active>DEV. Waheed</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'white' }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: 'max-content' }}
              navbarScroll
            >
              <Nav.Link href="#home" onClick={() => setActiveNav("")}
                className={activeNav === "#" ? "active" : ""}><AiFillHome />Home</Nav.Link>
              <Nav.Link href="#about"
                onClick={() => setActiveNav("/about")}
                className={activeNav === "/about" ? "active" : ""} ><BsFillPersonFill />About</Nav.Link>
              {/* <Nav.Link href="/services"
                onClick={() => setActiveNav("/services")}
                className={activeNav === "/services" ? "active" : ""}><FaTools />Services</Nav.Link> */}
              <Nav.Link href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}><AiFillPhone />Contact</Nav.Link>
              {/* <Nav.Link href="#action1"><MdLightMode /></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav>
        <a
          href="/"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiFillHome />
          Home
        </a>

        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <BsFillPersonFill />
          About
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <AiFillPhone />
          Contact
        </a>
        <a href="#colour">
          <MdLightMode />
        </a>
      </nav> */}
    </div>
  );
}

export default Header;
