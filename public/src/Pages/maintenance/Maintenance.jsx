import React from "react";
import { Container, Row, Col } from "reactstrap";
import LottiePlayer from "../../Components/player";

function Maintenance() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <section className="vh-100 p-0">
          <Container className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
              <Col lg="8">
                <LottiePlayer src="https://assets2.lottiefiles.com/private_files/lf30_y9czxcb9.json" />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Maintenance;
