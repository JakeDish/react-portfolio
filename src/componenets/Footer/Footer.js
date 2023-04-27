import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand"
import Github from '../../assets/iconmonstr-github-1.svg';
import Linkedin from '../../assets/iconmonstr-linkedin-3.svg'
import Twitter from '../../assets/iconmonstr-twitter-3.svg'

function footer () {
    return (
      <div className="fixed-bottom bg-grey">
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand>
              <a href="https://github.com/JakeDish">
                <img src={Github} alt="" />
              </a>
            </NavbarBrand>
            <NavbarBrand>
              <a href="https://www.linkedin.com/in/jake-disharoon-493674199/">
                <img src={Linkedin} alt="" />
              </a>
            </NavbarBrand>
            <NavbarBrand>
              <a href="https://twitter.com/ITYSL">
                <img src={Twitter} alt="I have no public social media, sorry!" />
              </a>
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
}


export default footer