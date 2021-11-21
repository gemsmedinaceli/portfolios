import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import mel from "../../Assets/mel.png";

import rheanne from "../../Assets/rheanne.png";
import geli from "../../Assets/geli.png";
import merwin from "../../Assets/merwin.png";
import gems from "../../Assets/gems.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>

         <br/>
          <Col
              md={5}
              style={{ paddingTop: "100px", paddingBottom: "50px" }}
              className="about-img"
          >
            <img src={mel} alt="about" className="img-fluid" />
          </Col>
          <Col
              md={5}
              style={{ paddingTop: "100px", paddingBottom: "50px" }}
              className="about-img"
          >
            <img src={rheanne} alt="about" className="img-fluid" />
          </Col>
            <Col
                md={5}
                style={{ paddingTop: "100px", paddingBottom: "50px" }}
                className="about-img"
            >
                <img src={geli} alt="about" className="img-fluid" />
            </Col>
            <Col
                md={5}
                style={{ paddingTop: "100px", paddingBottom: "50px" }}
                className="about-img"
            >
                <img src={merwin} alt="about" className="img-fluid" />
            </Col>
            <Col
                md={5}
                style={{ paddingTop: "100px", paddingBottom: "50px" }}
                className="about-img"
            >
                <img src={gems} alt="about" className="img-fluid" />
            </Col>
        </Row>
        <h1 className="project-heading">
          Our Team's <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> we use
        </h1>
        <Toolstack />


      </Container>
    </Container>
  );
}

export default About;
