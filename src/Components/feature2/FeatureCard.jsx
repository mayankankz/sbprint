import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

const FeatureCard = ({ id, title, description, image }) => {
  return (
    <Col lg="4" md="6" className={id % 2 === 1 ? "mt-5" : ""}>
      <div className="p-6 mt-2 rounded-4 f-icon-hover border border-dark">
        <div>
          <h4 className="mb-3 text-white">{title}</h4>
          <p className="mb-4 text-light">{description}</p>
          <Link className="btn-arrow" ></Link>
        </div>
        <div className="mt-6">
          <img className="img-fluid" src={image} alt="" />
        </div>
      </div>
    </Col>
  );
};

export default FeatureCard;
