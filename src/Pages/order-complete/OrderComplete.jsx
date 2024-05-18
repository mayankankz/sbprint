import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

function OrderComplete() {
  const firstBreadcrumb = { label: "Pages", link: "/order-complete" };
  const secondBreadcrumb = {
    label: "Order Completed",
    link: "/order-complete",
    active: true,
  };
  return (
    <div>
      <div className="page-wrapper">
        <Page_Heading
          title="Order Completed"
          firstBreadcrumb={firstBreadcrumb}
          secondBreadcrumb={secondBreadcrumb}
        />
        <div className="page-content">
          <Container>
            <Row>
              <Col md={12} className="text-center">
                <h3 className="mb-4">
                  Thank you for purchasing, Your order is complete
                </h3>
                <Link className="btn btn-dark" to="/index">
                  Back To Home
                </Link>
                <Link to="/product-grid" className="btn btn-primary">
                  Continue Shopping
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default OrderComplete;
