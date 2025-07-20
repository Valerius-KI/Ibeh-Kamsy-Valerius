import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Ibeh Kamsy Valerius </span>
            from <span className="purple"> Nigeria </span>
            <br />
            I am currently a 300 lvl Software Engineering Undergraduate .
            <br />
            I am a student getting a Bachelors Degree at Augustine University, Ilara-Epe, Lagos State.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Board & Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Valerius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
