import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikhil Kumar </span>
            from <span className="purple"> Patna, India.</span>
            <br />I am a 3rd year student pursuing my BTech in Computer Science and Engineering
            from Lovely Professional University, Phagwara.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Testing Custom-Roms in Android Devices
            </li>
            <li className="about-activity">
              <ImPointRight />  Creating Flutter Animations
            </li>
            <li className="about-activity">
              <ImPointRight />  Reading manhwa
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nikhil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
