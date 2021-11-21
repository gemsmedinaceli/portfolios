import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit, DiCss3, DiJava, DiAndroid, DiHtml5,
} from "react-icons/di";
import {SiPytorch, SiTensorflow, SiFirebase, SiC, SiPhp, SiBootstrap, SiLaravel, SiVuetify} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAndroid />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiC />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiBootstrap />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVuetify />
        </Col>
    </Row>
  );
}

export default Techstack;
