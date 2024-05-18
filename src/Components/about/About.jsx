import React from "react";
import { Container, Row, Col } from "reactstrap";
import LottiePlayer from "../player";
import Bg from "../../assets/bg/01.png";

function About() {
  const benefits = [
    {
      icon: "bi-columns-gap",
      title: "Fast & Minimal Design",
      description:
        "Get the most of reduction in your team’s operating let’s come up with taypo.",
    },
    {
      icon: "bi-gear",
      title: "Easy ways to implement",
      description:
        "Get the most of reduction in your team’s operating let’s come up with taypo.",
    },
    {
      icon: "bi-pencil-square",
      title: "Edited By Device",
      description:
        "Get the most of reduction in your team’s operating let’s come up with taypo.",
    },
  ];
  return (
    <div>
      <section >
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="mb-8 mb-lg-0 order-lg-1">
              <LottiePlayer src={Bg} />
            </Col>
            <Col xs={12} lg={6}>
              <div>
                <h2 className="mb-5">Benefit Of Working With Awesome Taypo</h2>
              </div>
              {benefits.map((benefit, index) => (
                <div className="d-flex align-items-start mb-4" key={index}>
                  <div className="me-3">
                    <i className={`bi ${benefit.icon} fs-3 text-primary`}></i>
                  </div>
                  <div>
                    <h5 className="mb-2">{benefit.title}</h5>
                    <p className="mb-0">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
