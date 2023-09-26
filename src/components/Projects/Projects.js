import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="WhatsDOc-FD"
              description="A clinical WebApp Built with ReactJs and Django in a team of 5 made up of designers, frontend and Backend engineers, a ."
              ghLink="https://github.com/Favourzita94/WhatsDoc-FD"
              demoLink="https://vercel.com/favourzita94/clinical-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Simple Profile Page"
              description="A simple profile page that shows updated time in milliseconds."
              ghLink="https://github.com/Favourzita94/HNG-TASK1"
              demoLink="https://sage-starship-212b24.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="AirBnB site clone"
              description="A static website built with HTML, CSS and Javascript as one of the projects for ALX foundational stage."
              ghLink="https://github.com/Favourzita94/AirBnB_clone_v3"
              demoLink="https://github.com/Favourzita94/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Carousel Creation"
              description="A beginner project with only HTML and CSS"
              ghLink="https://github.com/Favourzita94/Carousel-Task"
              demoLink="https://favour-carousel.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Basketball Scoreboard"
              description="A simple basketball scoreboard built with only HTML, CSS, Javscript"
              ghLink="https://github.com/Favourzita94/Basketball-Scoreboard"
              demoLink= "https://favour-basketball-scoreboard.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
