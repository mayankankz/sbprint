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

const PackageCard = ({ title, subTitle, price, features, buttonColor }) => (
  <Card
    className={`rounded-4 ${
      buttonColor === "light" ? "bg-dark text-white" : ""
    }`}
  >
    <CardBody className="py-8 px-6">
      <div className="mb-2 d-flex align-items-center">
        <i className="bi bi-award fs-1 text-primary me-2"></i>
        <CardTitle
          tag="h5"
          className={`mb-0 ${buttonColor === "light" ? "text-white" : ""}`}
        >
          {title}
        </CardTitle>
      </div>
      <CardText
        className={`text-muted mb-4 ${
          buttonColor === "light" ? "text-light" : ""
        }`}
      >
        {subTitle}
      </CardText>
      <div
        className={`d-flex text-dark border-bottom border-${buttonColor} pb-4 mb-4`}
      >
        <span
          className={`h6 ${
            buttonColor === "light" ? "text-white" : ""
          } mb-0 mt-2`}
        >
          $
        </span>
        <span
          className={`price display-2 fw-bold ${
            buttonColor === "light" ? "text-white" : ""
          }`}
        >
          {price}
        </span>
        <span
          className={`h6 align-self-end mb-1 ${
            buttonColor === "light" ? "text-white" : ""
          }`}
        >
          /mo
        </span>
      </div>
      {features.map((feature, index) => (
        <div key={index} className="d-flex align-items-center mb-3">
          <div className="me-2">
            <i className="bi bi-check-lg text-primary"></i>
          </div>
          <p className={`mb-0 ${buttonColor === "light" ? "text-light" : ""}`}>
            {feature}
          </p>
        </div>
      ))}
      <Button color={buttonColor} block outline className="mt-5">
        Choose Package
      </Button>
    </CardBody>
  </Card>
);
export default PackageCard;
