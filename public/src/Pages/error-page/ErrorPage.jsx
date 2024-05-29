import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

function ErrorPage() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <section className="p-0">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col lg="7">
                <lottie-player
                  src="https://lottie.host/4aaed37e-3353-449b-aa49-7de1239c2187/7TdT79rcAt.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </Col>
              <Col lg="5">
                <div>
                  <h2>Oops! Page Not Found</h2>
                  <h6 className="mb-5">
                    You’re either misspelling the URL or requesting a page
                    that's no longer here.
                  </h6>
                  <Link to="/index">
                    <Button color="primary">Back To Home Page</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default ErrorPage;
