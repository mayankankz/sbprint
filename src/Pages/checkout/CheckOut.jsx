import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useSelector } from "react-redux";
import Contact from "../../Components/contact/Contact";

function CheckOut() {
  const cart = useSelector((state) => state.products.cart);
  const firstBreadcrumb = { label: "Pages", link: "/product-checkout" };
  const secondBreadcrumb = {
    label: "Product Checkout",
    link: "/product-checkout",
    active: true,
  };
  function calculateSubtotal() {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.quantity * item.salePrice;
    });
    return subtotal.toFixed(2);
  }
  let shipping = 50.0;

  function calculateTotal() {
    const subtotal = calculateSubtotal();
    // const shipping = 50;

    const total = parseFloat(subtotal) + parseFloat(shipping);
    return total.toFixed(2);
  }
  return (
    <div>
      <div className="page-wrapper">
        <Page_Heading
          title="Product Checkout"
          firstBreadcrumb={firstBreadcrumb}
          secondBreadcrumb={secondBreadcrumb}
        />
        <div className="page-content">
          <Container>
            <Row>
              <Col lg={7} md={12}>
                <div className="checkout-form shadow bg-white p-5 rounded-4">
                  <h2 className="mb-4">Billing Details</h2>
                  <Form>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="fname" className="font-w-6">
                            First Name
                          </Label>
                          <Input
                            type="text"
                            id="fname"
                            placeholder="Your firstname"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="lname" className="font-w-6">
                            Last Name
                          </Label>
                          <Input
                            type="text"
                            id="lname"
                            placeholder="Your lastname"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="email" className="font-w-6">
                            E-mail Address
                          </Label>
                          <Input
                            type="text"
                            id="email"
                            placeholder="State Province"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="phone" className="font-w-6">
                            Phone Number
                          </Label>
                          <Input type="text" id="phone" placeholder="" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="companyname" className="font-w-6">
                            Company Name
                          </Label>
                          <Input
                            type="text"
                            id="companyname"
                            placeholder="Company Name"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="country" className="font-w-6">
                            Select Country
                          </Label>
                          <Input
                            type="select"
                            id="country"
                            className="form-select"
                          >
                            <option>Select country</option>
                            <option value="#">Alaska</option>
                            <option value="#">China</option>
                            <option value="#">Japan</option>
                            <option value="#">Korea</option>
                            <option value="#">Philippines</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Label for="address" className="font-w-6">
                            Address
                          </Label>
                          <Input
                            type="text"
                            id="address"
                            placeholder="Enter Your Address"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="text"
                            id="address2"
                            placeholder="Second Address"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Label for="towncity" className="font-w-6">
                            Town/City
                          </Label>
                          <Input
                            type="text"
                            id="towncity"
                            placeholder="Town or City"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="statename" className="font-w-6">
                            State/Province
                          </Label>
                          <Input
                            type="text"
                            id="statename"
                            placeholder="State Province"
                          />
                        </FormGroup>{" "}
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="zippostalcode" className="font-w-6">
                            Zip/Postal Code
                          </Label>
                          <Input
                            type="text"
                            id="zippostalcode"
                            placeholder="Zip / Postal"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col lg={5} md={12}>
                <Row className="my-5">
                  <Col md={12}>
                    <div className="p-3 p-lg-5 border rounded-4">
                      <h3 className="mb-3">Coupon Code</h3>
                      <label className="mb-3">
                        Enter your coupon code if you have one
                      </label>
                      <div className="d-flex align-items-center">
                        <Input
                          className="form-control"
                          id="c-code"
                          placeholder="Coupon Code"
                          aria-label="Coupon Code"
                          aria-describedby="button-addon2"
                          type="text"
                        />
                        <div className="input-group-append ms-3">
                          <Button
                            color="primary"
                            type="button"
                            id="button-addon2"
                          >
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 my-5 p-lg-5 border rounded-4">
                      <h3 className="mb-3">Your Order</h3>
                      <ListGroup className="list-unstyled">
                        {cart.map((item, index) => (
                          <ListGroupItem
                            className="mb-3 border-bottom pb-3"
                            key={index}
                          >
                            <span>
                              {item.quantity} x {item.name}
                            </span>
                            $ {item.salePrice * item.quantity}
                          </ListGroupItem>
                        ))}
                        <ListGroupItem className="mb-3 border-bottom pb-3">
                          <span>Shipping</span> $ {shipping}
                        </ListGroupItem>
                        <ListGroupItem className="mb-3 border-bottom pb-3">
                          <span>Subtotal</span> $ {calculateSubtotal()}
                        </ListGroupItem>
                        <ListGroupItem>
                          <span>
                            <strong className="cart-total">Total:</strong>
                          </span>
                          <strong className="cart-total">
                            $ {calculateTotal()}
                          </strong>
                        </ListGroupItem>
                      </ListGroup>
                    </div>
                    <div className="cart-detail mt-5 p-3 p-lg-5 border rounded-4">
                      <h3 className="mb-3">Payment Method</h3>
                      <FormGroup>
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="customRadio1"
                          />
                          <Label
                            className="form-check-label"
                            for="customRadio1"
                          >
                            Direct Bank Tranfer
                          </Label>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="customRadio2"
                          />
                          <Label
                            className="form-check-label"
                            for="customRadio2"
                          >
                            Check Payment
                          </Label>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="customRadio3"
                          />
                          <Label
                            className="form-check-label"
                            for="customRadio3"
                          >
                            Paypal Account
                          </Label>
                        </div>
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <Label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            I have read and accept the terms and conditions
                          </Label>
                        </div>
                      </FormGroup>
                      <Button color="primary" block className="mt-5">
                        Proceed to Payment
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
