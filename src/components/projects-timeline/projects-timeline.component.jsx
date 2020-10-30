import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import creativeAgency from "../../assets/img/projects/creative-agency-screen.png";
import volunteerNetwork from "../../assets/img/projects/volunteer-network-screen.png";
import emaJohn from "../../assets/img/projects/ema-john-screen.png";
import travelGuru from "../../assets/img/projects/travel-guru-screen.png";
import burjAlArab from "../../assets/img/projects/burj-al-arab-screen.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Creative-Agency */}
          <ImageEvent date="09/2020" className="text-center" text="Creative-agency" src={creativeAgency} alt="Creative-agency">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A full stack practiced project that illustrates a customer can order their services and see all their services. When the project is finished then customer can leave their review which will be appeared in the home page. On the other hand there is also admin section where admin can see all orders and can add services which will be appeared in the home page.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Full Stack project</li>
                          <li>Real-time Database calls</li>
                          <li>Authentication via private-route</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>ReactJs</li>
                          <li>MongoDB</li>
                          <li>NodeJs</li>
                          <li>expressJs</li>
                          <li>bootstrap</li>
                          <li>HTML and CSS</li>
                          <li>Firebase</li>
                          <li>Netlify</li>
                          <li>GitHub</li>
                          <li>Heroku</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://creative-agency-demo.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/touhedulhaque/creative-agency-client" target="_blank">
                  SOURCE CODE CLIENT
                </UrlButton>
                <UrlButton href="https://github.com/touhedulhaque/creative-agency-server" target="_blank">
                  SOURCE CODE SERVER
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Volunteer-Network */}
          <ImageEvent date="08/2020" className="text-center" text="Volunteer-Network" src={volunteerNetwork} alt="Volunteer-Network">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An application of Volunteer Services where people can register themselves as volunteer via login authentication and see their services on the other hand an admin can see all registered services and can delete if they find anyone not reliable.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register new user</li>
                          <li>Sign-in existing user</li>
                          <li>Keep tracks of entries for each user</li>
                          <li>Admin Control</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>ReactJs</li>
                          <li>MongoDB</li>
                          <li>NodeJs</li>
                          <li>expressJs</li>
                          <li>bootstrap</li>
                          <li>Material UI</li>
                          <li>HTML and CSS</li>
                          <li>Firebase</li>
                          <li>Netlify</li>
                          <li>GitHub</li>
                          <li>Heroku</li>
                        </ul>
                        <hr />

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://volunteer-network-demo.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/touhedulhaque/volunteer-network-demo-client" target="_blank">
                  SOURCE CODE CLIENT
                </UrlButton>
                <UrlButton href=" https://github.com/touhedulhaque/volunteer-network-demo-server
                  " target="_blank">
                  SOURCE CODE SERVER
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: ema-john */}

          <ImageEvent date="07/2020" className="text-center" text="ema-john" src={emaJohn} alt="ema-john">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A practiced E-commerce application where used cart, authentication and CRUD operation via Database.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>All products access from Database</li>
                          <li>CRUD backend operation</li>
                          <li>Cart and shipping</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>ReactJs</li>
                          <li>MongoDB</li>
                          <li>NodeJs</li>
                          <li>expressJs</li>
                          <li>bootstrap</li>
                          <li>HTML and CSS</li>
                          <li>Firebase</li>
                          <li>Netlify</li>
                          <li>GitHub</li>
                          <li>Heroku</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://ema-john-simple-haque.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/touhedulhaque/ema-john-simple" target="_blank">
                  SOURCE CODE CLIENT
                </UrlButton>
                <UrlButton href="https://github.com/touhedulhaque/ema-john-server" target="_blank">
                  SOURCE CODE SERVER
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: travel-guru */}

          <ImageEvent date="07/2020" className="text-center" text="Travel-guru" src={travelGuru} alt="travel-guru">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A practiced travel agency website where customer can book their reservation via 3 types of login authentication. for example: google or facebook or username and password.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>web design by Material UI and bootstrap</li>
                          <li>google / facebook / username and password authentication</li>
                          <li>Individual destination details</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>ReactJs</li>
                          <li>Material UI</li>
                          <li>bootstrap</li>
                          <li>HTML and CSS</li>
                          <li>Firebase authentication</li>
                          <li>Netlify</li>
                          <li>GitHub</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://travel-guru-demo.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/touhedulhaque/travel-guru-demo" target="_blank">
                  SOURCE CODE CLIENT
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Burj-Al-Arab */}
          <ImageEvent date="06/2020" className="text-center" text="Burj-Al-Arab" src={burjAlArab} alt="Burj-Al-Arab">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A practiced hotel named burj-al-arab site where a customer can login via google and using material UI to design website.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Use Material UI</li>
                          <li>login authentication</li>
                          <li>private route</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>ReactJs</li>
                          <li>Material UI</li>
                          <li>HTML and CSS</li>
                          <li>Firebase authentication</li>
                          <li>Netlify</li>
                          <li>GitHub</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://burj-al-arab-demo.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/touhedulhaque/burj-al-arab-demo" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
