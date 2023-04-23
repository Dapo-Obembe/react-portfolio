import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo-white.png";

export default function Footer() {
  return (
    <>
      <section className="footer text-center" style={{ minHeight: "200px" }}>
        <Container>
          <Row>
            <Col className="align-items-center">
              <img
                src={logo}
                style={{
                  width: "100px",
                  objectFit: "cover",
                  marginBottom: "1rem",
                }}
                alt="Dapo Obembe logo"
              />
              <p className="text-white">
                Copyright 2023 Dapo Obembe - Web Developer in Nigeria
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
