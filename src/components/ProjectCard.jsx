import React from "react";
import { Col } from "react-bootstrap";
import "../assets/css/projects.css";

function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="project__img--box text-center">
        <img src={imgUrl} alt={title} style={{ width: "100%" }} />
        <div className="project__meta text-center">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
