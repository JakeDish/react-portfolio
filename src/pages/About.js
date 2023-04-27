import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function about() {
  return (
    <div style={{ display: "block", width: 1000, padding: 30, marginLeft: 30 }}>
      <h4>Quality Assurance Professional</h4>

      <img
        width="300"
        height="300"
        src="https://images.nintendolife.com/cfb53259066c7/off-model-mario.large.jpg"
        alt="portrait of the developer as a young man"
      ></img>

      <Row>
        <Col
          style={{
            backgroundColor: "grey",
            class: "me-3",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Col>
      </Row>
    </div>
  );
}

export default about;
