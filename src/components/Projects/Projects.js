import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import one from "../../Assets/Projects/firstimage.png";
import two from "../../Assets/Projects/secimage.png";
import three from "../../Assets/Projects/thirdimage.png";
import four from "../../Assets/Projects/fourthimage.png";
import five from "../../Assets/Projects/fifthimage.png";
import six from "../../Assets/Projects/sixthimage.png";
import seven from "../../Assets/Projects/seventhimage.png";
import eight from "../../Assets/Projects/eightimage.png";
import nine from "../../Assets/Projects/nineimage.png";
import ten from "../../Assets/Projects/tenimage.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={one}
              isBlog={false}
              title="FoodFlex"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={two}
                isBlog={false}
                title="Whos that Celeb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={three}
                isBlog={false}
                title="Laravel Laboratory"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={four}
                isBlog={false}
                title="Sing Along Web App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={five}
                isBlog={false}
                title="Historya"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={six}
                isBlog={false}
                title="Shake Food Management"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={seven}
                isBlog={false}
                title="Vaccination Logistics"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={eight}
                isBlog={false}
                title="Travel Goals"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={nine}
                isBlog={false}
                title="Tenant System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={ten}
                isBlog={false}
                title="Implementing Wifi Zone in a Small Community"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
