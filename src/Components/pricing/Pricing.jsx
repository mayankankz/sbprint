import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import PackageCard from "./PackageCard";
import LottiePlayer from "../player";
function Pricing() {
  const packages = [
    {
      title: "Basic",
      subTitle: "A beautiful, simple website",
      price: 48,
      features: [
        "10 Pages Responsive Website",
        "Request API Integration",
        "Flexible, simple license",
        "Outstanding Support",
      ],
      buttonColor: "dark",
    },
    {
      title: "Standard",
      subTitle: "A beautiful, simple website",
      price: 78,
      features: [
        "10 Pages Responsive Website",
        "Request API Integration",
        "Flexible, simple license",
        "Outstanding Support",
      ],
      buttonColor: "light",
    },
    {
      title: "Ultimate",
      subTitle: "For professional purpose",
      price: 138,
      features: [
        "10 Pages Responsive Website",
        "Request API Integration",
        "Flexible, simple license",
        "Outstanding Support",
      ],
      buttonColor: "dark",
    },
  ];

  return (
    <div>
      <section className="position-relative overflow-hidden">
        <Container>
          <Row className="justify-content-center text-center mb-6">
            <Col className="col-12 col-lg-8">
              <h2>Get a Special Price Just For You!</h2>
              <p className="lead">
                We are a team of experienced developers who are passionate about
                their work. No coding required to make customizations.
              </p>
            </Col>
          </Row>
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row align-items-center">
                {packages.map((pkg, index) => (
                  <div key={index} className="col-12 col-lg-4 mb-8 mb-lg-0">
                    <PackageCard {...pkg} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <div className="position-absolute animation-1">
          <LottiePlayer src="https://lottie.host/b3b9dd01-8da3-408d-bf97-301eb5efd93c/fmsV6COvHR.json" />
        </div>
      </section>
    </div>
  );
}

export default Pricing;
