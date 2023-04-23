import React from "react";
import { Container, Row, Col, Nav, Tab, TabPane } from "react-bootstrap";
import "../assets/css/projects.css";

import ProjectCard from "./ProjectCard";
import imgEdemy from "../assets/images/Edemy.png";
//WORDPRESS PROJECTS
import imgAlphaWeb from "../assets/images/alphawebtips.png";
import imgVicMerry from "../assets/images/vicmerry.png";
import imgXyci from "../assets/images/xycinews.png";
import imgRokiitv from "../assets/images/rokiitv.png";
import imgEnurses from "../assets/images/enursesafrica.png";
import imgMCA from "../assets/images/mercycrownacademy.png";

function Projects() {
  const wpProjects = [
    {
      title: "Mercy Crown Academy",
      description: "Academy Website",
      imgUrl: imgMCA,
    },
    {
      title: "XYCINEWS",
      description: "News Website",
      imgUrl: imgXyci,
    },
    {
      title: "Rokiitv",
      description: "Movie Download Website",
      imgUrl: imgRokiitv,
    },
    {
      title: "Vicmerry",
      description: "Business Website",
      imgUrl: imgVicMerry,
    },
    {
      title: "Alpha Web Tips",
      description: "Tutorial Website",
      imgUrl: imgAlphaWeb,
    },
    {
      title: "eNurses Africa",
      description: "Blogsite for Nurses",
      imgUrl: imgEnurses,
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container className="projects__container text-center">
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Below are some of the projects I have worked on. More can be seen
              in GitHub and upon request.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav classNAme="projects__nav" variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="first">WordPress</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">UI/UX</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">React</Nav.Link>
                </Nav.Item>
                e
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {wpProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {wpProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {wpProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
