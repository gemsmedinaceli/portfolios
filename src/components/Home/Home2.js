import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/members.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="upp"> Dream Team </span>
            </h1>
            <p className="home-about-body">
              We are Dream Team, a team that dreams together, succeeds together. We are determined, skilled, and confident enough to develop either web-based or mobile-based applications. We have several experiences and proven our knowledge on it such as Laravel, Vue.js, React.js, C++, Java, PHP, HTML, JavaScript, and CSS.
              <br />
              <br />

              Our field of Interests are developing new Web Technologies that will give people the better service the best way possible. We are good at both back-end and front-end development so we are confident enough that we can produce the best outputs.

              <br />
              <br />



            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>

          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
