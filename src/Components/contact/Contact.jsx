import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import BgImage from "../../assets/bg/01.png";

function Contact() {
  return (
    <div>
      <Container>
        <Row className="row">
          <Col className="col-12">
            <div
              className="bg-dark p-4 p-lg-10 rounded-4 text-center"
              style={{
                backgroundImage: `url(${BgImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className="text-white mb-0 font-w-7">
                Take your business<br /> to the next level.
              </h2>
              <p className="text-light my-4">
              We help our clients succeed by creating impactful brand identities and delivering innovative technology solutions. Whether you need a custom website, mobile app, or digital marketing strategy, our experienced team is here to make it happen.
              </p>

              <Link to="/contact-us" className="btn btn-primary">
                Let's Get Started
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
