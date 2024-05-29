import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import {
  Col,
  Row,
  Container,
  Input,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import {
  updateCartItemQuantity,
  removeCartItem,
} from "../../store/reducer/productReducer";
import { Link } from "react-router-dom";
import Contact from "../../Components/contact/Contact";

function ProductCart() {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstBreadcrumb = { label: "Pages", link: "/product-cart" };
  const secondBreadcrumb = {
    label: "Product Cart",
    link: "/product-cart",
    active: true,
  };
  const [quantities, setQuantities] = useState(
    cartItems.map((item) => item.quantity)
  );
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= cartItems[index].stock) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] = newQuantity;
      setQuantities(updatedQuantities);
      dispatch(updateCartItemQuantity({ index, quantity: newQuantity }));
    }
  };
  const handleDeleteItem = (index) => {
    // Dispatch the action to remove the cart item from the reducer
    dispatch(removeCartItem(index));
  };
  const handleApplyCoupon = () => {
    // Handle applying the coupon code
  };

  const handleUpdateCart = () => {
    // Handle updating the cart
  };

  const handleCancel = () => {
    // Handle canceling the cart update
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.quantity * item.salePrice;
      return total + itemTotal;
    }, 0);
  };
  let Tax = 1.0;
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Product Cart"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          <Container>
            <Row>
              <Col>
                <div className="table-responsive border-bottom-0 p-5 shadow rounded">
                  <Table className="cart-table text-center mb-5 table-bordered">
                    <thead>
                      <tr>
                        <th className="h5 mb-0 py-3 font-w-6" scope="col">
                          Product
                        </th>
                        <th className="h5 mb-0 py-3 font-w-6" scope="col">
                          Price
                        </th>
                        <th className="h5 mb-0 py-3 font-w-6" scope="col">
                          Quantity
                        </th>
                        <th className="h5 mb-0 py-3 font-w-6" scope="col">
                          Total
                        </th>
                        <th className="h5 mb-0 py-3 font-w-6" scope="col">
                          Remove
                        </th>
                      </tr>
                    </thead>

                    <tbody className="border-top-0">
                      {cartItems.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="d-md-flex align-items-center">
                              <a href="#">
                                <img
                                  className="img-fluid rounded me-lg-3 mb-2 mb-lg-0"
                                  style={{ height: "100px", width: "100px" }}
                                  src={item.image}
                                  alt={item.name}
                                />
                              </a>
                              <div className="text-start">
                                <div
                                  onClick={() =>
                                    navigate(`/product-single/${item.id}`)
                                  }
                                  className="product-name link-title h6"
                                >
                                  {item.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6 className="mb-0">{item.salePrice}</h6>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Button
                                className="btn-product btn-product-up"
                                onClick={() => {
                                  if (quantities[index] > 1) {
                                    handleQuantityChange(
                                      index,
                                      quantities[index] - 1
                                    );
                                  }
                                }}
                              >
                                <i className="bi bi-dash-lg"></i>
                              </Button>
                              <Input
                                className="form-product"
                                type="number"
                                name="form-product"
                                value={quantities[index]}
                                onChange={(e) => {
                                  const newQuantity = parseInt(e.target.value);
                                  handleQuantityChange(index, newQuantity);
                                }}
                                max={item.stock}
                              />
                              <Button
                                className="btn-product btn-product-down"
                                onClick={() => {
                                  if (quantities[index] < item.stock) {
                                    handleQuantityChange(
                                      index,
                                      quantities[index] + 1
                                    );
                                  }
                                }}
                              >
                                <i className="bi bi-plus-lg"></i>
                              </Button>
                            </div>
                          </td>
                          <td>
                            <h6 className="mb-0">
                              {item.quantity * item.salePrice}
                            </h6>
                          </td>
                          <td className="border-right-0">
                            <button
                              type="submit"
                              onClick={() => {
                                console.log("id", item.id);
                                handleDeleteItem(item.id);
                              }}
                              className="btn btn-primary py-2 px-3 fs-3"
                            >
                              <i className="bi bi-x-octagon"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
            <Row className="mt-8">
              <Col lg={6}>
                <div>
                  <Label className="text-dark h4">Coupon</Label>
                  <p>Enter your coupon code if you have one.</p>
                  <FormGroup className="input-group">
                    <Input
                      className="form-control"
                      id="c-code"
                      placeholder="Coupon Code"
                      aria-label="Coupon Code"
                      aria-describedby="button-addon2"
                      type="text"
                    />
                    <Button
                      className="btn btn-primary btn-sm"
                      id="button-addon2"
                      onClick={handleApplyCoupon}
                    >
                      Apply Coupon
                    </Button>
                  </FormGroup>
                  <div className="mt-5">
                    <Button
                      className="btn btn-primary me-2"
                      onClick={handleUpdateCart}
                    >
                      Update Cart
                    </Button>
                    <Button className="btn btn-dark" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="6" className="mt-5 mt-lg-0 ps-lg-10">
                <div className="rounded-4 p-5 bg-light">
                  <div className="rounded-4 p-5 bg-white">
                    <h4 className="text-dark text-center mb-2">Cart Totals</h4>
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                      <span className="text-muted">Subtotal</span>
                      <span className="text-dark">${calculateTotal()}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                      <span className="text-muted">Tax</span>
                      <span className="text-dark">{Tax}%</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-3 mb-5">
                      <span className="text-dark h5">Total</span>
                      <span className="text-dark font-weight-bold h5">
                        ${calculateTotal() + (calculateTotal() * Tax) / 100}
                      </span>
                    </div>
                    <Link className="btn btn-dark" to="/product-checkout">
                      Proceed To Checkout
                    </Link>
                    <Link
                      className="btn btn-outline-primary mt-3"
                      to="/product-grid"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Contact />
      </div>
    </div>
  );
}

export default ProductCart;
