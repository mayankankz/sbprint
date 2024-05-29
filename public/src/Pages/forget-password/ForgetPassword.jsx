import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Contact from "../../Components/contact/Contact";

function ForgetPassword() {
  const firstBreadcrumb = { label: "Pages", link: "/forgot-password" };
  const secondBreadcrumb = {
    label: "Forget Password",
    link: "/forgot-password",
    active: true,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Forget Password"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          <Container>
            <Row className="d-flex justify-content-center text-center">
              <Col lg={6}>
                <div>
                  <div className="mb-5">
                    <h2>Forgot your password?</h2>
                    <p>Enter your email to reset your password.</p>
                  </div>

                  <Form
                    className="px-sm-10"
                    id="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="messages"></div>
                    <FormGroup className="mb-3">
                      <Input
                        type="email"
                        name="email"
                        id="form_email"
                        placeholder="Email"
                        required
                      />
                    </FormGroup>
                    <Button color="primary" block>
                      Forgot Now
                    </Button>
                  </Form>
                  <div className="mt-4">
                    {" "}
                    <Link className="btn-link" to="/login">
                      Back to sign in
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Contact />
      </div>
    </div>
  );
}

export default ForgetPassword;
