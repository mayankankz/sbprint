import React, { useState } from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Contact from "../../Components/contact/Contact";
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const firstBreadcrumb = { label: "Pages", link: "/signup" };
  const secondBreadcrumb = {
    label: "Sign Up",
    link: "/signup",
    active: true,
  };
  const countries = [
    { value: "Country", label: "Select Country..." },
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    // Add more countries here...
    { value: "ZW", label: "Zimbabwe" },
  ];

  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Sign Up"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} xs={12}>
                <div className="border border-light rounded-4 p-5">
                  <h2 className="mb-5 text-center">Fill Your Details</h2>
                  <Form id="contact-form" onSubmit={handleSubmit}>
                    <div className="messages"></div>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="text"
                            name="name"
                            id="form_name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="text"
                            name="surname"
                            id="form_lastname"
                            className="form-control"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="email"
                            name="email"
                            id="form_email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="tel"
                            name="phone"
                            id="form_phone"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="password"
                            name="password"
                            id="form_password"
                            className="foprm-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="password"
                            name="confirmPassword"
                            id="form_password1"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="select"
                            name="gender"
                            id="form_gender"
                            className="form-control"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="select"
                            name="country"
                            id="form-country"
                            className="form-select"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                          >
                            {countries.map((country) => (
                              <option key={country.value} value={country.value}>
                                {country.label}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="text-center mt-4">
                      <Col md={12}>
                        <FormGroup className="remember-checkbox clearfix mb-4">
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input float-none"
                              id="customCheck1"
                            />
                            <Label
                              className="form-check-label px-1"
                              for="customCheck1"
                            >
                              I agree to the term of use and privacy policy
                            </Label>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="text-center">
                      <Col>
                        <Button color="primary">Create Account</Button>
                        <span className="mt-4 d-block">
                          Have An Account?
                          <Link to="/login">
                            <i>Sign In!</i>
                          </Link>
                        </span>
                      </Col>
                    </Row>
                  </Form>
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

export default SignUp;
