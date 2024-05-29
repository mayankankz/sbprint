import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LottiePlayer from "../player";
import { Player } from "@lottiefiles/react-lottie-player";

function About2() {
  return (
    <div>
      <section className="py-4">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className=" mb-lg-0 order-lg-1">
            <Player
            src="https://lottie.host/c0af2a8e-be32-464f-acc2-644da3f6834a/xlsvxusXcE.json"
            className="player"
            loop
            autoplay
          />
            </Col>
            <Col xs={12} lg={6} className="pt-10">
              <h6 className="border-bottom border-dark border-2 d-inline-block">
                About Us
              </h6>
              <h2 className="font-w-6">
              Elevating Digital Experiences
              </h2>
              <p className="lead mb-4">
              At SB ONLINE SERVICES, we're pioneers in strategic technology solutions, empowering businesses with innovative tools for efficiency and growth.


              </p>
              <div className="d-flex align-items-start mb-3">
                <div className="me-3">
                  <i className="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-2">Collaborate Faster</h6>
                  <p className="mb-0">
                  Our modern tools accelerate idea generation by 7x.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start  mb-3">
                <div className="me-3">
                  <i className="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-2">Seamless Implementation</h6>
                  <p className="mb-0">
                  Easy integration ensures swift adoption and results.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start  mb-3">
              <div className="me-3">
                <i className="bi bi-check2-all fs-2 text-primary"></i>
              </div>
              <div>
                <h6 className="mb-2">Innovation</h6>
                <p className="mb-0">
                Cutting-edge solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start  mb-3">
                <div className="me-3">
                  <i className="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-2">Experience</h6>
                  <p className="mb-0">
                  Five years of industry leadership and expertise.
                  </p>
                </div>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About2;
