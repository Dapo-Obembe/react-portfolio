import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import heroImg from "../assets/images/Dapo.jpg";
import "../assets/css/banner.css";
import { TypeAnimation } from "react-type-animation";

function Banner() {
  return (
    <>
      <section className="banner" id="home">
        <Container className="banner__container">
          <Row className="align-items-center banner__items">
            <Col className="banner__col1" md={6}>
              <span style={{ color: "#fff" }}>I am</span>
              <h1 className="tagline">DAPO OBEMBE</h1>
              <h2>
                <span className="wrap">
                  <TypeAnimation
                    sequence={[
                      // Same String at the start will only be typed once, initially
                      "I'm a Frontend Developer",
                      1000,
                      "I'm a WordPress Developer",
                      1000,
                      "I'm a Web Design Tutor",
                      1000,
                      "I'm a Blogger",
                      1000,
                    ]}
                    speed={150}
                    style={{ fontSize: "1em" }}
                    repeat={Infinity}
                  />
                </span>
              </h2>
              <p>
                I'm a dedicated Frontend Web Developer from Nigeria, West
                Africa. I'd love to join your business's technical team or work
                on your website.
              </p>
              <button onClick={() => console.log("connect")}>
                Let's Connect <BsArrowRightCircle size={25} />
              </button>
            </Col>
            <Col md={6} className="banner__col2">
              <img
                src={heroImg}
                alt="hero image"
                className="hero-image img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
