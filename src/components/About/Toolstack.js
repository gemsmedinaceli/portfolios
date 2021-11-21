import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,
    SiVisualstudiocode,
    SiJupyter,
    SiPostman,
    SiHeroku, SiFirebase, SiGithub, SiAndroidstudio, SiXampp,
} from "react-icons/si";
import {DiNetbeans} from "react-icons/all";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAndroidstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiNetbeans />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiXampp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
        </Col>
    </Row>
  );
}

export default Toolstack;
