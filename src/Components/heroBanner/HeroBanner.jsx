import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import LottiePlayer from "../player";
import Bg from "../../assets/lottie/heroBanner1.json";

function HeroBanner1() {
  return (
    <div>
      <section className="overflow-hidden position-relative">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="order-lg-1 ms-auto mb-lg-0">
              <LottiePlayer src="https://lottie.host/3ddc0e30-a9f7-48e1-9b8d-a0ead2fa5ee4/JrQpGMHV6n.json" />
            </Col>
            <Col xs={12} lg={5}>
              <h1 className="font-w-4 mb-4">
                Build your
                <span className="title-bg text-primary position-relative font-w-7 d-inline-block">
                  Product
                </span>
                <br className="d-md-block d-none" /> with taypo.
              </h1>
              <p className="lead text-dark mb-5">
                We're helped client to create your website with our talented
                experts.
              </p>
              <Form id="mc-form1" className="group">
                <FormGroup className="bg-light p-3 rounded-4 z-index-1 mb-0 d-flex align-items-center">
                  <Input
                    type="email"
                    //value=""
                    name="EMAIL"
                    className="email  border-0 shadow-sm me-2 bg-white"
                    id="mc-email1"
                    placeholder="Email Address"
                    required=""
                    style={{ flexShrink: 1 }}
                  />
                  <Button color="dark" style={{ flexShrink: 0 }}>
                    Get Started
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute animation-1">
          <LottiePlayer src={Bg} />
        </div>
      </section>
    </div>
  );
}

export default HeroBanner1;
