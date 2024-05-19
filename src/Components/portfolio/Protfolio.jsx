import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from "reactstrap";

import { setSelectedPortFolio } from "../../store/reducer/portFolioReducer";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

function Portfolio() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("all");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const portfolioItems = useSelector((state) => state.portFolio.portFolioItems);

  const filteredPortfolioItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const prevSrc =
    filteredPortfolioItems[
      (photoIndex + filteredPortfolioItems.length - 1) %
        filteredPortfolioItems.length
    ].imgSrc;
  const nextSrc =
    filteredPortfolioItems[(photoIndex + 1) % filteredPortfolioItems.length]
      .imgSrc;
debugger
  return (
    <div>
      <section>
        <Container>
          <Row className="align-items-end mb-8">
            <Col xs="12" lg="5">
              <h2 className="mb-5 mb-lg-0">
                Our Services
              </h2>
            </Col>
            <Col xs="12" lg="6" className="ms-auto">
              <div className="portfolio-filter d-sm-flex align-items-center justify-content-lg-end overflow-scroll">
                <Nav>
                  <Button
                    className={activeTab === "all" ? "is-checked" : ""}
                    onClick={() => handleTabClick("all")}
                  >
                    All
                  </Button>
                  <Button
                    className={activeTab === "WebDesign" ? "is-checked" : ""}
                    onClick={() => handleTabClick("Web Design")}
                  >
                    Web Design
                  </Button>
                  <Button
                    className={activeTab === "AppDesign" ? "is-checked " : ""}
                    onClick={() => handleTabClick("App Design")}
                  >
                    App Design
                  </Button>
                  
                  <Button
                    className={activeTab === "Branding" ? "is-checked" : ""}
                    onClick={() => handleTabClick("Branding")}
                  >
                    Branding
                  </Button>
                </Nav>
              </div>
            </Col>
          </Row>
          <Row>
            {filteredPortfolioItems.map((item, index) => (
              <Col key={index} lg="4" md="6" className="mb-5">
                <div className="hover-translate position-relative bg-white shadow p-3 rounded-4">
                  <img
                    className="img-fluid w-100 rounded-4"
                    src={item.imgSrc}
                    alt=""
                  />
                  <div className="portfolio-title d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small className="mb-2">{item.category}</small>
                      <h6 className="mb-0">
                        <Link
                          className="btn-link"
                          to="/service"
                          onClick={() => {
                            dispatch(setSelectedPortFolio(item.title));
                          }}
                        >
                          {item.title}
                        </Link>
                      </h6>
                    </div>
                    <a
                      className="popup-img btn-link"
                      href={item.imgSrc}
                      onClick={(e) => {
                        e.preventDefault();
                        setPhotoIndex(index);
                        setIsOpen(true);
                      }}
                    >
                      <i className="bi bi-patch-plus fs-4"></i>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
    </div>
  );
}

export default Portfolio;
