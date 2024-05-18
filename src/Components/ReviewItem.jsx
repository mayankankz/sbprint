import { Col, Row } from "reactstrap";
import React, { useState } from "react";

export default ReviewItem = ({ image, name, description, rating }) => (
  <Row className="border-bottom border-light pb-5 mb-5">
    <Col md="auto" className="mb-4 mb-md-0">
      <img className="img-fluid rounded shadow" alt="image" src={image} />
    </Col>
    <Col md>
      <h6>{name}</h6>
      <p>{description}</p>
      <span className="text-primary">
        {[...Array(rating)].map((_, i) => (
          <i key={i} className="bi bi-star-fill"></i>
        ))}
      </span>
    </Col>
  </Row>
);
