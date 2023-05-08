import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Trivia from "../assets/trivia.png";
import Movie from "../assets/movie.png";
import Weather from "../assets/weather.png";
import Planner from "../assets/planner.png";
import Quiz from "../assets/quiz.png";
import Generator from "../assets/generator.png";

function portfolio() {
  return (
    <div
      style={{
        backgroundColor: "eggshell",
        display: "block",
        width: 1400,
        padding: 30,
        marginLeft: 30,
      }}
    >
      <h4>Previous Projects</h4>
      <Row>
        <Col>
          <a href="https://jakedish.github.io/trivia-time/">
            <img height="700" width="650" src={Trivia} alt="Trivia Time"></img>
          </a>
          <a href="https://github.com/JakeDish/trivia-time">Trivia Time</a>
        </Col>
        <Col>
          <a href="https://uciprojfilms.herokuapp.com/">
            <img
              height="700"
              width="650"
              src={Movie}
              alt="Project Films- Movie Database"
            ></img>
          </a>
          <a href="https://github.com/JakeDish/movie-database">Project Film</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://jakedish.github.io/weather-app/">
            <img
              height="700"
              width="650"
              src={Weather}
              alt="Weather Checker"
            ></img>
          </a>
          <a href="https://github.com/JakeDish/weather-app">Weather Checker</a>
        </Col>
        <Col>
          <a href="https://jakedish.github.io/event-planner/">
            <img height="700" width="650" src={Planner} alt="Day Planner"></img>
            <a href="https://github.com/JakeDish/event-planner">
              Work Day Scheduler
            </a>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://matchmakerdating.herokuapp.com/">
            <img height="700" width="650" src={Quiz} alt="Code Quiz"></img>
            <a href="https://github.com/JakeDish/date-app">MathcMaker</a>
          </a>
        </Col>
        <Col>
          <a href="https://jakedish.github.io/password-generator/">
            <img
              height="700"
              width="650"
              src={Generator}
              alt="Password Generator"
            ></img>
            <a href="https://github.com/JakeDish/password-generator">
              Password Generator
            </a>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default portfolio;
