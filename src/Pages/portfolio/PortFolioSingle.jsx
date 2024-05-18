import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import { Col, Container, Row } from "reactstrap";
import Contact from "../../Components/contact/Contact";
import { useSelector } from "react-redux";

function PortFolioSingle() {
  const portfolioItems = useSelector((state) => state.portFolio.portFolioItems);
  const title = useSelector((state) => state.portFolio.selectedPortFolio);
  let selectedPortfolio = portfolioItems.find((p) => p.title === title);
  const firstBreadcrumb = { label: "Services", link: "/services" };
  const secondBreadcrumb = {
    label: "Service",
    link: "/service",
    active: true,
  };
  if (
    selectedPortfolio == undefined
      ? (selectedPortfolio = portfolioItems[0])
      : selectedPortfolio
  )
    return (
      <div className="page-wrapper">
        <Page_Heading
          title="Service Details"
          firstBreadcrumb={firstBreadcrumb}
          secondBreadcrumb={secondBreadcrumb}
        />

        <Container>
          <Row>
            <Col lg={12} className="col-12 pe-lg-10 my-4">
              <img
                className="img-fluid w-100 rounded-4 mb-5"
                src={selectedPortfolio.imgSrc}
                alt=""
              />
              <h2>{selectedPortfolio.title}</h2>
              <p className="lead text-dark mb-3">
                {selectedPortfolio.description}
              </p>
              <p>{selectedPortfolio.details}</p>
              <h5>Project Challenge</h5>
              <div className="d-flex align-items-start mb-2">
                <div className="me-2">
                  <i className="bi bi-check2-all fs-5 text-primary"></i>
                </div>
                <div>
                  <p className="mb-0">Collaborate on ideas 7x faster</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-2">
                <div className="me-2">
                  <i className="bi bi-check2-all fs-5 text-primary"></i>
                </div>
                <div>
                  <p className="mb-0">Easy ways to implement</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-2">
                <div className="me-2">
                  <i className="bi bi-check2-all fs-5 text-primary"></i>
                </div>
                <div>
                  <p className="mb-0">We make spending stress free</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="me-2">
                  <i className="bi bi-check2-all fs-5 text-primary"></i>
                </div>
                <div>
                  <p className="mb-0">We are proud of our works</p>
                </div>
              </div>
            </Col>
           
          </Row>
        </Container>

        <Contact />
      </div>
    );
}

export default PortFolioSingle;
