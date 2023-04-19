import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project__img--box text-center">
        <img src={imgUrl} alt="" style={{ width: "400px" }} />
        <div className="project__meta text-center">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
