import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/contact.css";
import ContactImg from "../assets/images/contact-me.webp";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const [buttonText, setButtonText] = useState("Send");

  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const templateParams = {
      from_name: formDetails.firstName + " " + formDetails.lastName,
      from_email: formDetails.email,
      phone_number: formDetails.phone,
      message_html: formDetails.message,
    };

    emailjs
      .send(
        "service_xe9kihy",
        "template_cmo3mlv",
        templateParams,
        "xtE8CXjbvSXvfmEYW"
      )
      .then(
        function (response) {
          setStatus({
            success: true,
            message: "Message sent successfully!",
          });
          setButtonText("Sent");
          setFormDetails(formInitialDetails);
        },
        function (error) {
          setStatus({
            success: false,
            message: "Message failed to send. Please try again later.",
          });
          setButtonText("Failed");
        }
      );
  };

  return (
    <section className="contact__section" id="contact">
      <Container className="contact__container">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              className="img-fluid"
              src={ContactImg}
              alt="contact us image"
              style={{ borderRadius: "0.5rem" }}
            />
          </Col>
          <Col md={6} className="form__wrapper">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="mb-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="mb-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col sm={6} className="mb-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="mb-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col className="mb-1">
                  <textarea
                    row="6"
                    column="10"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
