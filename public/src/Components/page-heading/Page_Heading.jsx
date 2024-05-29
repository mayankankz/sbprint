import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
const Page_Heading = ({
  title,
  animationSrc,
  firstBreadcrumb,
  secondBreadcrumb,
}) => {
  return (
    <section  className="position-relative overflow-hidden">
      <Container>
        <Row className="text-center">
          <Col>
            <h1 className="mb-3">{title}</h1>
            <Breadcrumb className="bg-white shadow d-inline-block px-4 py-2 rounded-4">
              <BreadcrumbItem className="mt-2">
                <Link className="text-dark" to="/">
                  Home
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem className="mt-2">
                <Link className="text-dark" to={firstBreadcrumb.link}>
                  {firstBreadcrumb.label}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem className="mt-2">
                {secondBreadcrumb.active ? (
                  <span className="text-primary">{secondBreadcrumb.label}</span>
                ) : (
                  <Link className="text-dark" to={secondBreadcrumb.link}>
                    {secondBreadcrumb.label}
                  </Link>
                )}
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <div className="position-absolute animation-1">
        <lottie-player
          src="https://lottie.host/59ba3e9a-bef6-400b-adbb-0eb8c20c9f65/WPBRmjAinD.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </section>
  );
};

export default Page_Heading;
