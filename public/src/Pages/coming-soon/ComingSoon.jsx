import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Countdown from "react-countdown";
import LottiePlayer from "../../Components/player";

function ComingSoon() {
  const [countdownDate, setCountdownDate] = useState(Date.parse("2024-12-11"));

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <ul className="countdown list-inline d-flex justify-content-between mt-8 mb-0">
        <li>
          <span>{days}</span>
          <p>Days</p>
        </li>
        <li>
          <span>{hours}</span>
          <p>Hours</p>
        </li>
        <li>
          <span>{minutes}</span>
          <p>Minutes</p>
        </li>
        <li>
          <span>{seconds}</span>
          <p>Seconds</p>
        </li>
      </ul>
    );
  };
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <section className="vh-100 p-0">
          <Container className="h-100">
            <Row className="align-items-center h-100">
              <Col lg="7">
                <LottiePlayer src="https://lottie.host/f5023cd7-e21f-486a-9234-9eb8f530c5bb/kGdlD7yW5h.json" />
                <div className="coming-soon">
                  <Countdown date={countdownDate} renderer={renderer} />
                </div>
              </Col>
              <Col lg="4" className="ms-auto">
                <Link to="/index">
                  <img className="img-fluid" src="images/logo.png" alt="" />
                </Link>
                <div className="mt-5">
                  <h4 className="mb-4">Subscribe to get notified!</h4>
                  <div className="subscribe-form">
                    <form id="mc-form" className="group">
                      <input
                        value=""
                        name="EMAIL"
                        className="email form-control"
                        id="mc-email"
                        placeholder="Email Address"
                        required=""
                        type="email"
                      />
                      <input
                        className="btn btn-primary btn-block mt-3 mb-2"
                        name="subscribe"
                        value="Subscribe Now"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default ComingSoon;
