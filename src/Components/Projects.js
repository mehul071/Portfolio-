import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import "./Projects.css";
import foodyimg from "../foody.png";
import netflix from "../netflix.png";

function Projects() {
  return (
    <div className="projects mx-auto">
      <Container>
        <Row>
          <h1 className="project_heading">Projects</h1>
          <div className=" flex project">
            <Card
              style={{ width: "23rem", height: "360px" }}
              className="mr-24 card"
            >
              <Card.Img
                variant="top"
                src={foodyimg}
                style={{ width: "410px" }}
                className="hover:scale-110 ease-in duration-300 cursor-pointer"
              />
              <Card.Body>
                <Card.Title className="card_heading text-center">
                  Foody(Food delivery System)
                </Card.Title>
              </Card.Body>
              <Card.Text className="px-8">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card>
            <Card style={{ width: "23rem", height: "360px" }}>
              <Card.Img
                variant="top"
                src={netflix}
                style={{ width: "410px" }}
                className="hover:scale-110 ease-in duration-300 cursor-pointer"
              />
              <Card.Body>
                <Card.Title className="card_heading">Netflix Clone</Card.Title>
              </Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card>
          </div>
        </Row>
        <Row>
          <Card style={{ width: "23rem", height: "360px" }}>
            <Card.Img
              variant="top"
              src={netflix}
              style={{ width: "410px" }}
              className="hover:scale-110 ease-in duration-300 cursor-pointer"
            />
            <Card.Body>
              <Card.Title className="card_heading">Netflix Clone</Card.Title>
            </Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
