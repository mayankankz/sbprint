import React, { useState, useEffect } from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  Container,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import SideBar from "../../Components/sidebar/SideBar";
import CustomPagination from "../../Components/pagination";
import { setSelectedProduct } from "../../store/reducer/productReducer";
import Contact from "../../Components/contact/Contact";
function ProductList() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
 
  const firstBreadcrumb = { label: "Pages", link: "/product-list" };
  const secondBreadcrumb = {
    label: "Product List",
    link: "/product-list",
    active: true,
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 3;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (activePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  return (
    <div>
      <div className="page-wrapper">
        <Page_Heading
          title="Product List"
          firstBreadcrumb={firstBreadcrumb}
          secondBreadcrumb={secondBreadcrumb}
        />
        <Container>
          <Row className="mb-5">
            <Col>
              <Card className="border p-3 rounded">
                <Row className="align-items-center">
                  <Col md="5" className="mb-3 mb-md-0">
                    <CardText tag="span" className="text-muted">
                      Showing 1 to {productsToShow.length} of{" "}
                      {filteredProducts.length}
                    </CardText>
                  </Col>
                  <Col
                    md="7"
                    className="d-flex align-items-center justify-content-md-end"
                  >
                    <div className="view-filter me-3">
                      <Link
                        to="/product-grid"
                        className="active  me-2 text-primary"
                      >
                        <i className="fs-3 bi bi-grid-3x2"></i>
                      </Link>
                      <Link to="/product-list" className="text-dark">
                        <i className="fs-3 bi bi-card-list"></i>
                      </Link>
                    </div>
                    <div className="sort-filter ms-3 d-flex align-items-center">
                      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle
                          caret
                          className="bg-transparent text-dark  ms-3"
                        >
                          Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Newest Item</DropdownItem>
                          <DropdownItem>Populer</DropdownItem>
                          <DropdownItem>Best Match</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={9} md={12} className="order-lg-1">
              {productsToShow.map((product) => (
                <div className=" shadow p-4 rounded-4 mb-5">
                  <Row className="align-items-center">
                    <Col lg={4} md={5}>
                      <div>
                        <img
                          className="img-fluid rounded-4"
                          src={product.image}
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col lg={8} md={7}>
                      <CardBody>
                        <CardTitle>
                          <Link
                            to="/product-single"
                            onClick={() => {
                              dispatch(setSelectedProduct(product.id));
                            }}
                            className=" mb-2 d-block link-title h6"
                          >
                            {product.name}
                          </Link>
                        </CardTitle>
                        <span className="product-price text-dark">
                          <del className="text-muted mr-2">
                            ${product.price}
                          </del>
                          <span style={{ marginLeft: "4px" }}>
                            ${product.salePrice}
                          </span>
                        </span>
                        <p className="my-3">{product.description}</p>
                        <div className="product-link mt-3">
                          <Link
                            style={{ marginRight: "3px" }}
                            className="add-cart"
                            to="/product-single"
                            onClick={() => {
                              dispatch(setSelectedProduct(product.id));
                            }}
                          >
                            <i className="bi bi-bag-check me-2"></i>Add To Cart
                          </Link>
                          <Link className="wishlist-btn" to="/product-grid">
                            <i className="bi bi-bag-heart"></i>
                          </Link>
                        </div>
                      </CardBody>
                    </Col>
                  </Row>
                </div>
              ))}
              <Row
                className="mt-5"
                style={{ display: "grid", justifyContent: "center" }}
              >
                <CustomPagination
                  activePage={activePage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </Row>
            </Col>
            <Col lg={3} md={12}>
              <SideBar />
            </Col>
          </Row>
        </Container>
        <Contact />
      </div>
    </div>
  );
}

export default ProductList;
