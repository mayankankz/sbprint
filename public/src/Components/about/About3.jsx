import React from "react";
import { Container, Row, Col } from "reactstrap";
import LottiePlayer from "../player";
import Bg from "../../assets/lottie/about3.json";

function About3() {
  const benefits = [
    {
      icon: "bi-diagram-3",
      title: "Collect Ideas",
      description:
        "Get the most of reduction in your team’s operating let’s come up with taypo.",
    },
    {
      icon: "bi-shuffle",
      title: "Targeting Implement",
      description:
        "Get the most of reduction in your team’s operating let’s come up with taypo.",
    },
    {
      icon: "bi-list-check",
      title: "Finalize Result",
      description:
        "Get the most of reduction in your team’s operating let’s come up with taypo.",
    },
  ];
  return (
    <div>
      <section className="py-4">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={7} className="mb-8 mb-lg-0">
              <LottiePlayer src={Bg} />
            </Col>
            <Col xs={12} lg={5}>
              <div>
                <h2 className="mb-5">
                  Three Simple Step To Started On Success.
                </h2>
              </div>

              {benefits.map((benefit, index) => (
                <div className="d-flex align-items-start mb-4" key={index}>
                  <div className="me-3">
                    <div className="bg-white shadow rounded-4 px-4 pt-4 pb-3 me-2 mt-2 position-relative">
                      <i className={`bi ${benefit.icon} fs-3 text-primary`}></i>{" "}
                      <span className="mt-n2 me-n2 d-inline-block bg-light-3 text-dark px-2 py-1 rounded position-absolute top-0 end-0">
                        0{index + 1}
                      </span>
                    </div>
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

export default About3;
