import React from "react";
import "./Navbar.css";
import { AiFillStar, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav as navlins } from "react-bootstrap";

function Nav() {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <div className="flex items-center ">
            <Navbar.Brand
              href="home"
              className="flex items-center justify-center"
            >
              <AiFillStar className="navbar__logo" />
              <span>Portfolio</span>
            </Navbar.Brand>
            <div className="profile__logo">
              <a href="https://github.com/mehul071">
                <BsGithub className="github__logo cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/mehul-tyagi-76632619b/">
                <AiFillLinkedin className="linkedin__logo cursor-pointer" />
              </a>
            </div>
          </div>
          <navlins className="nav_links">
            <navlins.Link href="#home">Project</navlins.Link>
            <navlins.Link href="#features">Technology</navlins.Link>
            <navlins.Link href="#pricing">About</navlins.Link>
          </navlins>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
