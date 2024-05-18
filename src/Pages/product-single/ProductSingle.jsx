import React, { useEffect, useState } from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import {
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Table,
  Progress,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { addToCart, addToWishList } from "../../store/reducer/productReducer";
import { useSelector, useDispatch } from "react-redux";

import Contact from "../../Components/contact/Contact";

function ProductSingle() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);

  const id = useSelector((state) => state.products.selectedProduct);
  useEffect(() => {}, [id]);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  let product = filteredProducts.find((p) => p.id === Number(id));

  const firstBreadcrumb = { label: "Pages", link: "/product-single" };
  const secondBreadcrumb = {
    label: "Product Single",
    link: "/product-single",
    active: true,
  };
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const starRatings = [
    { stars: 5, percentage: 90, color: "success" },
    { stars: 4, percentage: 60, color: "success" },
    { stars: 3, percentage: 40, color: "success" },
    { stars: 2, percentage: 20, color: "warning" },
    { stars: 1, percentage: 10, color: "danger" },
  ];

  const RatingBar = ({ stars, percentage, color }) => (
    <div className="d-flex align-items-center mb-2">
      <div className="text-nowrap me-3">{stars} Star</div>
      <div className="w-100">
        <Progress value={percentage} color={color} style={{ height: "5px" }} />
      </div>
      <span className="text-muted ms-3">{percentage}%</span>
    </div>
  );
  const items = [
    {
      image: "../../images/thumbnail/01.jpg",
      name: "Small Karlo",
      description:
        "Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus",
      rating: 5,
    },
    {
      image: "../../images/thumbnail/02.jpg",
      name: "Leely Mac",
      description:
        "Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus",
      rating: 5,
    },
    {
      image: "../../images/thumbnail/03.jpg",
      name: "Racheal Farrera",
      description:
        "Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus",
      rating: 5,
    },
  ];

  const ReviewItem = ({ image, name, description, rating }) => (
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

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSetlectedColor] = useState("");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleColorClick = (color) => {
    setSetlectedColor(color);
  };
  const handleAddToCart = (product) => {
    const size = selectedSize || product.size[0];
    const color = selectedColor || product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity,
    };

    dispatch(addToCart(productToAdd));
  };
  const handleAddToWishList = (product) => {
    const size = selectedSize || product.size[0];
    const color = selectedColor || product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity,
    };

    dispatch(addToWishList(productToAdd));
  };
  if (product == undefined ? (product = allProducts[0]) : product)
    return (
      <div className="page-wrapper">
        <Page_Heading
          title="Product Single"
          firstBreadcrumb={firstBreadcrumb}
          secondBreadcrumb={secondBreadcrumb}
        />
        <div className="page-content">
          <div>
            <section>
              <Container>
                <Row className="align-items-center">
                  <Col lg={5} md={6}>
                    <img
                      className="img-fluid w-100 rounded-4"
                      src={`../../${product.image}`}
                      alt={product.name}
                    />
                  </Col>
                  <Col lg={7} md={6} className=" mt-5 mt-md-0">
                    <div className="product-details">
                      <h3> {product.name} </h3>
                      <div className="product-price my-4">
                        <span className="product-price text-dark">
                          <del className="text-muted">${product.price}</del> $
                          {product.salePrice}
                        </span>
                        <span className="text-primary">
                          {Array.from({ length: product.rating }).map(
                            (_, i) => (
                              <i key={i} className="bi bi-star-fill"></i>
                            )
                          )}
                        </span>
                      </div>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2">
                          <span className="text-dark"> Availibility: </span>{" "}
                          {product.stock}
                        </li>
                        <li>
                          <span className="text-dark"> Categories :</span>{" "}
                          {product.category}'s
                        </li>
                      </ul>
                      <p>{product.description}</p>
                      <Row className="my-4">
                        <Col lg={5} md={6}>
                          <FormGroup>
                            <h6>Size</h6>
                            <Input
                              type="select"
                              name="size"
                              id="size"
                              placeholder="Size"
                              onChange={handleSizeChange}
                            >
                              <option disabled selected hidden>
                                Size
                              </option>
                              {/* <option value="">Size</option> */}
                              {product.size.map((size) => (
                                <option key={size} value={size}>
                                  {size}
                                </option>
                              ))}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg={7} sm={6} className=" mt-3 mt-sm-0">
                          <h6>Color</h6>
                          <div className="d-flex">
                            {product.colors.map((color) => (
                              <div className="form-check pl-2">
                                <input
                                  type="radio"
                                  value={color}
                                  className="form-check-input"
                                  id={color}
                                  style={{
                                    background: color,
                                    width: "24px",
                                    height: "24px",
                                    paddingLeft: "2px",
                                    borderRadius: "0",
                                  }}
                                  //   checked={filters.colors === color}
                                  onClick={() => handleColorClick(color)}
                                />
                              </div>
                            ))}
                          </div>
                        </Col>
                      </Row>
                      <FormGroup className="d-flex align-items-center">
                        <h6 style={{ paddingRight: "4px" }}>Quantity: </h6>
                        <div className="d-flex align-items-center">
                          <Button
                            className="btn-product btn-product-up"
                            onClick={() => {
                              if (quantity > 1) setQuantity(quantity - 1);
                            }}
                          >
                            <i className="bi bi-dash-lg"></i>
                          </Button>
                          <Input
                            className="form-product"
                            type="number"
                            name="form-product"
                            value={quantity}
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value);
                              if (
                                newQuantity >= 1 &&
                                newQuantity <= product.stock
                              ) {
                                setQuantity(newQuantity);
                              }
                            }}
                            max={product.stock}
                          />
                          <Button
                            className="btn-product btn-product-down"
                            onClick={() => {
                              if (quantity < product.stock)
                                setQuantity(quantity + 1);
                            }}
                          >
                            <i className="bi bi-plus-lg"></i>
                          </Button>
                        </div>
                      </FormGroup>
                      <div className="product-link d-flex align-items-center mt-4">
                        <Button
                          className="btn btn-primary me-3"
                          type="button"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add To Cart
                        </Button>
                        <Button
                          className="btn btn-dark"
                          type="button"
                          onClick={() => {
                            handleAddToWishList(product);
                          }}
                        >
                          Add To Wishlist
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section>
              <Container>
                <Row>
                  <Col md={12}>
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          className={
                            activeTab === "1"
                              ? "text-dark active ms-0"
                              : "text-dark ms-0"
                          }
                          onClick={() => {
                            toggle("1");
                          }}
                        >
                          Description
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={
                            activeTab === "2" ? "text-dark active" : "text-dark"
                          }
                          onClick={() => {
                            toggle("2");
                          }}
                        >
                          Additional Information
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={
                            activeTab === "3" ? "active text-dark" : "text-dark"
                          }
                          onClick={() => {
                            toggle("3");
                          }}
                        >
                          Reviews (3)
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} className="pt-5">
                      <TabPane tabId="1">
                        <h5 className="mb-3">Product Description</h5>
                        <p className="mb-0">{product.description}</p>
                      </TabPane>
                      <TabPane tabId="2">
                        <h5 className="mb-3">Additional information</h5>
                        <Table bordered className="mb-0">
                          <tbody>
                            <tr>
                              <td>Size</td>
                              <td>{product.size.join(" ")}</td>
                            </tr>
                            <tr>
                              <td>Color</td>
                              <td>{product.colors.join(" ")}</td>
                            </tr>
                            <tr>
                              <td>Chest</td>
                              <td>38 inches</td>
                            </tr>
                            <tr>
                              <td>Waist</td>
                              <td>20 cm</td>
                            </tr>
                            <tr>
                              <td>Length</td>
                              <td>35 cm</td>
                            </tr>
                            <tr>
                              <td>Fabric</td>
                              <td>Cotton, Silk &amp; Synthetic</td>
                            </tr>
                            <tr>
                              <td>Warranty</td>
                              <td>6 Months</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="3">
                        <Row className="total-rating align-items-center">
                          <Col md="6">
                            <div className="bg-dark shadow-sm rounded text-center p-5">
                              <h5 className="text-white">Overall</h5>
                              <h4 className="text-white">{product.rating}</h4>
                              <h6 className="text-white">(03 Reviews)</h6>
                            </div>
                          </Col>
                          <Col md="6" className="mt-3 mt-lg-0">
                            <div className="rating-list">
                              {starRatings.map(
                                ({ stars, percentage, color }) => (
                                  <RatingBar
                                    stars={stars}
                                    percentage={percentage}
                                    color={color}
                                  />
                                )
                              )}
                            </div>
                          </Col>
                        </Row>
                        <Row className="mt-7">
                          <Col md={7}>
                            <div className="review-list border border-light rounded-4 p-5">
                              {items.map(
                                ({ image, name, description, rating }, i) => (
                                  <ReviewItem
                                    key={i}
                                    image={image}
                                    name={name}
                                    description={description}
                                    rating={rating}
                                  />
                                )
                              )}
                            </div>
                          </Col>
                          <Col md="5">
                            <div className="post-comments bg-white rounded-4 shadow p-4">
                              <h4 className="mb-4">Add Review</h4>
                              <Form id="contact-form" onSubmit={handleSubmit}>
                                <FormGroup>
                                  <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="form-control"
                                    value={name}
                                    onChange={(event) =>
                                      setName(event.target.value)
                                    }
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    required
                                    value={email}
                                    onChange={(event) =>
                                      setEmail(event.target.value)
                                    }
                                  />
                                </FormGroup>
                                <FormGroup>
                                  {/* <Label for="ratingSelect">Rating</Label> */}
                                  <Input
                                    type="select"
                                    name="rating"
                                    id="ratingSelect"
                                    value={rating}
                                    className="form-control"
                                    onChange={(event) =>
                                      setRating(event.target.value)
                                    }
                                  >
                                    <option value="" disabled selected hidden>
                                      -- Select --
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </Input>
                                </FormGroup>
                                <FormGroup>
                                  <Input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    required
                                    value={phone}
                                    onChange={(event) =>
                                      setPhone(event.target.value)
                                    }
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Input
                                    type="textarea"
                                    name="comment"
                                    className="form-control rounded-4 h-auto"
                                    placeholder="Type Comment"
                                    rows="4"
                                    required
                                    value={comment}
                                    onChange={(event) =>
                                      setComment(event.target.value)
                                    }
                                  />
                                </FormGroup>
                                <Button color="primary" className="mt-3">
                                  Post Review
                                </Button>
                              </Form>
                            </div>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
        <Contact />
      </div>
    );
}

export default ProductSingle;
