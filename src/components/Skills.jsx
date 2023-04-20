import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";

import "../assets/css/skills.css";
import WebDesign from "../assets/images/webdesign.png";
import WebDev from "../assets/images/webdev.png";
import UxUi from "../assets/images/uxui.png";
import TechWriting from "../assets/images/techwriting.png";
import Teaching from "../assets/images/teaching.png";
import Blogging from "../assets/images/blogging.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills" id="skills">
      <Container className="skills__container">
        <Row>
          <Col>
            <div className="skill__box">
              <h2>Skills</h2>
              <p className="text-center">
                Below are the skills I have and can use.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill__slider"
                autoPlay={true}
              >
                <div className="skill__item">
                  <img src={WebDesign} alt="" />
                  <h5>Web Design</h5>
                </div>
                <div className="skill__item">
                  <img src={WebDev} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="skill__item">
                  <img src={UxUi} alt="" />
                  <h5>UX/UI Design</h5>
                </div>
                <div className="skill__item">
                  <img src={TechWriting} alt="" />
                  <h5>Technical Writing</h5>
                </div>
                <div className="skill__item">
                  <img src={Blogging} alt="" />
                  <h5>Blogging</h5>
                </div>
                <div className="skill__item">
                  <img src={Teaching} alt="" />
                  <h5>Teaching</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <a href="#" className="download-resume text-center">
        Download Resume <BsArrowRightCircle size={25} />
      </a>
    </section>
  );
}

export default Skills;
