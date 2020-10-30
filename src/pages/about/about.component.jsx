import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../images/logo/Touhedul-haque.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;TOUHEDUL HAQUE</strong>
                <br />A passionate developer,learner and spreader; live in Zürich, Switzerland. I am a Frontend Web Developer with React.js, Redux, Router, authentication, nodejs(backend), expressJs(backend), MongoDB (Database), CRUD operation(backend), body-parser(backend), nodemon(backend),JavaScript, html and CSS, bootstrap, material UI, React-native(learning), AngularJs(learning), data-structure(learning), algorithm(learning).
                <br />
                In 09/2020, I have successfully completed complete web development course from "Programming Hero" instructed by MR. Jhankar Mahabub.
                <br />
                Finished several projects, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                Along with that, I am also start writing on Medium about my learning terms. I love to learn about new technologies. My philosophy is "once a developer always a learner".
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1t8M98KjdYLKtyYymCU0a2-4cPMr0DLYx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/touhedulhaque" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/md-touhedul-haque/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
