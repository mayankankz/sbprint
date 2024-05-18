import React from "react";
import { Container, Row, Col } from "reactstrap";
import LottiePlayer from "../player";
import Bg from "../../assets/lottie/counter.json";

function Counter() {
  return (
    <div>
      <section className="pb-0">
        <Container className="container">
          <Row className="align-items-center justify-content-between">
            <Col
              xs={12}
              xl={5}
              lg={6}
              className="mb-8 mb-lg-0 position-relative"
            >
              <Row className="gx-5 align-items-center text-center z-index-1">
                <Col lg={6} md={6}>
                  <div className="counter bg-white rounded-4 p-5 py-7 shadow">
                    <span className="number count text-dark" data-count="200">
                      200
                    </span>
                    <span className="text-dark">+</span>
                    <h6 className="mb-0 text-muted">Completed Sites</h6>
                  </div>
                </Col>
                <Col lg={6} md={6} mt-5>
                  <div className="counter bg-white rounded-4 p-5 py-7 shadow">
                    <span className="number count text-dark" data-count="450">
                      450
                    </span>
                    <span className="text-dark">+</span>
                    <h6 className="mb-0 text-muted">Total Branch</h6>
                  </div>
                  <div className="counter bg-white rounded-4 p-5 py-7 shadow mt-7">
                    <span className="number count text-dark" data-count="666">
                      666
                    </span>
                    <span className="text-dark">+</span>
                    <h6 className="mb-0 text-muted">Happy Customers</h6>
                  </div>
                </Col>
              </Row>
              <div className="position-absolute animation-1 opacity-1">
                <LottiePlayer src={Bg} />
              </div>
            </Col>
            <Col xs={12} xl={6} lg={6}>
              <div>
                <h2>For Sites That Attention Better Experience</h2>
                <p className="lead mb-4">
                  We’ve been a nearly strategic thought leader for five we are
                  bring unrivaled decades incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
              <div className="d-flex align-items-start mb-3">
                <div className="me-3">
                  <i className="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-2">Collaborate on ideas 7x faster</h6>
                  <p className="mb-0">
                    We provide the modern work way for business development.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-2">Easy ways to implement</h6>
                  <p className="mb-0">
                    We provide the modern work way for business development.
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

export default Counter;
