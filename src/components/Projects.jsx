import React from "react";
import { Container, Row, Col, Nav, Tab, TabPane } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import imgProject1 from "../assets/images/Edemy.png";

function Projects() {
  const projects = [
    {
      title: "Mercy Crown Academy",
      description: "Academy Website",
      imgUrl: imgProject1,
    },
    {
      title: "XYCINEWS",
      description: "News Website",
      imgUrl: imgProject1,
    },
    {
      title: "Rokiitv",
      description: "Movie Download Website",
      imgUrl: imgProject1,
    },
    {
      title: "Vicmerry",
      description: "Business Website",
      imgUrl: imgProject1,
    },
    {
      title: "Alpha Web Tips",
      description: "Tutorial Website",
      imgUrl: imgProject1,
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              repellat minus ab nobis blanditiis
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="first">WordPress</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Video Creation</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => {
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
