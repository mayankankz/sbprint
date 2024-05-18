import React, { useState, useEffect } from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  Container,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomPagination from "../../Components/pagination";
import SideBar from "../../Components/sidebar/SideBar";
import {
  addToCart,
  addToWishList,
  removeWishListItem,
  setSelectedProduct,
} from "../../store/reducer/productReducer";
import Contact from "../../Components/contact/Contact";

function ProductGrid() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allProducts = useSelector((state) => state.products.allProducts);

  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const filters = useSelector((state) => state.products.filters);

  const firstBreadcrumb = { label: "Pages", link: "/product-grid" };
  const secondBreadcrumb = {
    label: "Product Grid",
    link: "/product-grid",
    active: true,
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (activePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);
  const handleAddToCart = (product) => {
    const size = product.size[0];
    const color = product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: 1,
    };
    console.log(productToAdd);

    dispatch(addToCart(productToAdd));
  };
  const handleAddToWishList = (product) => {
    const size = product.size[0];
    const color = product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: 1,
    };

    dispatch(addToWishList(productToAdd));
  };
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Product Grid"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />

      <div className="page-content py-2">
        <Container>
          <Row className="mb-5">
            <Col>
              <Card className="border p-3 rounded">
                <Row className="align-items-center">
                  <Col md="5" className="mb-3 mb-md-0">
                    <CardText tag="span" className="text-muted">
                      Showing 1 to {productsToShow.length} of
                      {filteredProducts.length}
                    </CardText>
                  </Col>
                  <Col
                    md="7"
                    className="d-flex align-items-center justify-content-md-end"
                  >
                    <div className="me-3">
                      <Link
                        to="/product-grid"
                        className="active me-2 text-primary"
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
              <Row className="text-center">
                {productsToShow.map((product) => (
                  <Col lg="4" md="6" className="mt-5">
                    <Card className="shadow rounded-4 p-4" key={product.id}>
                      <img
                        className="img-fluid rounded-4"
                        src={product.image}
                        alt=""
                      />
                      <CardBody>
                        <CardTitle>
                          <Link
                            to="/product-single"
                            onClick={() => {
                              dispatch(setSelectedProduct(product.id));
                            }}
                            className="mt-4 mb-2 d-block link-title h6"
                          >
                            {product.name}
                          </Link>
                        </CardTitle>
                        <span className="product-price text-dark">
                          <del className="text-muted mr-2">
                            ${product.price}
                          </del>
                          <span style={{ marginLeft: "2px" }}>
                            ${product.salePrice}
                          </span>
                        </span>
                        <div className="product-link mt-3">
                          <Link
                            style={{ marginRight: "3px" }}
                            className="add-cart"
                            onClick={() => {
                              handleAddToCart(product);
                            }}
                          >
                            <i className="bi bi-bag-check me-2"></i>Add To Cart
                          </Link>
                          <Link
                            className="wishlist-btn"
                            to="/product-grid"
                            onClick={() => {
                              handleAddToWishList(product);
                            }}
                          >
                            <i className="bi bi-bag-heart"></i>
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
                <Row
                  className="mt-5"
                  style={{ display: "inline-grid", justifyContent: "center" }}
                >
                  <CustomPagination
                    activePage={activePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </Row>
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

export default ProductGrid;
