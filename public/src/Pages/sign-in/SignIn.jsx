import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import { Col, Container, Row } from "reactstrap";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Contact from "../../Components/contact/Contact";
import LottiePlayer from "../../Components/player";

function SignIn() {
  const firstBreadcrumb = { label: "Pages", link: "/index" };
  const secondBreadcrumb = {
    label: "Sign In",
    link: "/login",
    active: true,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page-wrapper">
      
      <div className="page-content">
        <section>
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col xs={12} lg={6}>
                <LottiePlayer src="https://lottie.host/cbbc0c83-044c-4cf0-ba2e-54438fcbafd8/6M8MI7snvI.json" />
              </Col>
              <Col lg={5} xs={12} className="mt-5">
                <div className="border border-light rounded-4 p-5">
                  <h2 className="mb-5">Login Your Account</h2>
                  <Form id="contact-form" onSubmit={handleSubmit}>
                    <div className="messages"></div>
                    <FormGroup>
                      <Input
                        type="text"
                        name="name"
                        id="form_name"
                        placeholder="User name"
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="password"
                        name="password"
                        id="form_password"
                        placeholder="Password"
                        required
                      />
                    </FormGroup>
                    <div className="mt-4 mb-5">
                      <div className="remember-checkbox d-flex align-items-center justify-content-between">
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="check1"
                          />
                          <Label className="form-check-label" htmlFor="check1">
                            Remember me
                          </Label>
                        </div>
                        <Link className="btn-link" to="/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    <Button color="primary">Login Now</Button>
                  </Form>
                  <div className="d-flex align-items-center mt-4">
                    <span className="text-muted me-1">
                      Don't have an account?
                    </span>
                    <Link to="/signup">Sign Up</Link>
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

export default SignIn;
