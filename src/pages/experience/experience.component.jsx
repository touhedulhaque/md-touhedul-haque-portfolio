import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">LEARNING EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Freelancer and continuos learner</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Front-end || MERN stack developer</strong>
                    <br />
                    <strong>Role:</strong> Developer & learner & spreader
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> with full effort across web application. Debugging existing code to solve problems. Also learned <strong>data structure, algorithm and problem solving</strong> ,responsiveness, performing CRUD operations on databases along with extensive support during learning Period.
                    <br />
                    <strong>Technology:</strong> ReactJs, JavaScript, Authentication, MongoDB, NodeJs, express, bootstrap, Material UI, HTML, CSS, GitHub, Netlify, Firebase and heroku.
                    <br />
                    <strong>Duration:</strong> 2018 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
