import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { BsCartPlus } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from '../../assets/img/1.png'
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import {
  addToCart,
  removeCartItem,
  removeWishListItem,
} from "../../store/reducer/productReducer";

function Header() {
  const wishListItems = useSelector((state) => state.products.wishList);
  const cartItems = useSelector((state) => state.products.cart);
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [wishListOpen, setWishListOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the window width is below a certain value (e.g., 768px)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNav = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggle = () => setIsOpen(!isOpen);
  const togglewWishList = () => setWishListOpen(!wishListOpen);
  const toggleCartList = () => setCartOpen(!cartOpen);

  const navItems = [
    {
      label: "Home",
      to: "/",
      dropdown: false,
      items: [
        { label: "Landing 1", to: "/" },
        { label: "Landing 2", to: "/index-2" },
        { label: "Landing 3", to: "/index-3" },
      ],
    },
    {
      label: "Services",
      to: "/services",
      dropdown: true,
      items: [
        { label: "Accordion", to: "/feature-accordion" },
        { label: "Blog", to: "/feature-blog" },
        { label: "Counter", to: "/feature-counter" },
        { label: "Feature Box", to: "/feature-icon-box" },
        { label: "Hero Banner", to: "/feature-hero" },
        { label: "Price Table", to: "/feature-pricing" },
        { label: "Team", to: "/feature-team" },
        { label: "Testimonial", to: "/feature-testimonial" },
      ],
    },
    {
      label: "About-Us",
      to: "/about-us",
      dropdown: true,
      items: [
        { label: "Blog Card", to: "/blog-card" },
        { label: "Blog Listing 1", to: "/blog-listing" },
        { label: "Blog Listing 2", to: "/blog-listing-2" },
        { label: "Blog Single", to: "/blog-single" },
      ],
    },
    {
      label: "Contact",
      dropdown: true,
      to: "/contact-us",
      items: [
        { label: "Contact 1", to: "/contact-us" },
        { label: "Contact 2", to: "/contact-us-2" },
      ],
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(
    Array(navItems.length).fill(false)
  );

  const toggleDropdown = (index) => {
    const newArray = [...dropdownOpen];
    newArray[index] = !newArray[index];
    setDropdownOpen(newArray);
  };
  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    navigate(to, { replace: true });
    window.location.reload(); // Refresh the page
  };
  const handleDeleteItem = (index) => {
    // Dispatch the action to remove the cart item from the reducer
    dispatch(removeWishListItem(index));
  };
  const subtotal = wishListItems.reduce((total, item) => {
    //const product = allProducts.find((prod) => prod.id === item.id);
    if (item) {
      return total + item.salePrice * item.quantity;
    }
    // console.log("product", total);
    return total;
  }, 0);
  const subtotalCart = cartItems.reduce((total, item) => {
    //const product = allProducts.find((prod) => prod.id === item.id);
    if (item) {
      return total + item.salePrice * item.quantity;
    }
    // console.log("product", total);
    return total;
  }, 0);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // dispatch(removeWishListItem(product.id));
    toast("Product goes to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [cartItems1, setCartItems] = useState(3); // Replace with your actual cart items count

  // console.log(wishListItems?.length);
  return (
    <div className="">
      <header className="site-header">
        <div id="header-wrap">
          <Container className="container">
            <Row className="row">
              {/* <!--menu start--> */}
              <Col className="col">
                <Nav className="navbar navbar-expand-lg p-4 shadow bg-white">
                  <NavbarBrand href="/" className="navbar-brand logo">
                    <img height={80} width={80} src={logo} alt="" />
                  </NavbarBrand>

                  <NavbarToggler onClick={toggleNav} className="me-2" />
                  <Collapse className="navbar-collapse" isOpen={!isCollapsed}>
                    <Nav className="navbar-nav mx-auto">
                      {navItems.map((item, index) => (

                        <Dropdown
                         
                          nav
                          isOpen={dropdownOpen[index]}
                          toggle={() => toggleDropdown(index)}
                        >
                          <DropdownToggle nav caret>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={item.to}>{item.label}</Link>
                          </DropdownToggle>
                          
                        </Dropdown>
                      ))}
                    </Nav>
                  </Collapse>

                  <Nav className="navbar-nav ml-auto align-items-center">
                    <div className="d-flex align-items-center">
                      {/* <Link
                        className="add-cart btn-link bg-white px-2 py-1 shadow-sm rounded"
                        onClick={toggleCartList}
                      >
                        <i className="bi bi-cart fs-5"></i>
                    </Link> */}

                      {/* <Link
                        className="wishlist-btn btn-link ms-3"
                        onClick={togglewWishList}
                      >
                        <i className="bi bi-heart me-2 fs-5"></i>
                      </Link> */}
                      <Link className="login-btn btn-link ms-3" to="/login">
                        <i className="bi bi-person me-2 fs-3 align-middle"></i>
                      </Link>

                      {/* <div
                        style={{ cursor: "pointer" }}
                        className="ms-2 togglerCanvas d-inline-block border-0 px-2 py-1 bg-white shadow"
                        onClick={toggle}
                      >
                        <i className="bi bi-list-nested fs-3 text-dark"></i>
                      </div> */}
                      {!isMobile && (
                        <div
                          style={{ cursor: "pointer" }}
                          className="ms-2 togglerCanvas d-inline-block border-0 px-2 py-1 bg-white shadow"
                          onClick={toggle}
                        >
                          <i className="bi bi-list-nested fs-3 text-dark"></i>
                        </div>
                      )}
                    </div>
                  </Nav>
                </Nav>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <Offcanvas
        className="bg-dark"
        direction="end"
        isOpen={isOpen}
        toggle={toggle}
      >
        <OffcanvasHeader>
          <Button
            className="btn-close bg-transparent fs-1 ms-auto"
            onClick={toggle}
          >
            <i className="bi bi-x-octagon"></i>
          </Button>
        </OffcanvasHeader>
        <OffcanvasBody className="px-md-10 px-4 py-8">
          <img
            className="img-fluid side-logo mb-3"
            src="images/logo-white.png"
            alt=""
          />
          <p className="mb-0 text-white lead">
          At SB ONLINE SERVICES, we transform your digital experience with custom mobile apps, cutting-edge security systems, seamless networking solutions, and more. Join us to elevate your business to new heights with our comprehensive tech services.
          </p>
          <div className="form-info border-top border-dark pt-6 mt-6">
            <h5 className=" text-white border-bottom border-white d-inline-block">
              Contact info
            </h5>
            <ListGroup className="mt-4 bg-transparent px-0">
              <ListGroupItem className="mb-2 h6 text-light bg-transparent px-0">
                <i className="text-primary fs-4 align-middle bi bi-geo-alt me-2"></i>
                Gadarwara, Hospital Road, Narsinghpur-487551, Madhya Pradesh, India.
              </ListGroupItem>
              <ListGroupItem className="mb-2 h6 bg-transparent px-0">
                <i className="text-primary fs-4 align-middle bi bi-telephone me-2"></i>
                <a className="text-light" href="tel:+919584730838">
                +91 9584730838
                </a>
              </ListGroupItem>
              <ListGroupItem className="h6 bg-transparent px-0">
                <i className="text-primary fs-4 align-middle bi bi-envelope me-2"></i>
                <a
                  className="text-light"
                  href="mailto:sbonlineservicesgar@gmail.com"
                >
                sbonlineservicesgar@gmail.com
                </a>
              </ListGroupItem>
            </ListGroup>
          </div>
          <div className="border-top border-dark pt-6 mt-6">
            <h5 className="text-white border-bottom border-white">
              Follow Us:
            </h5>
            <ListGroup className="mt-4 px-0" horizontal>
              <ListGroupItem className="me-2 bg-transparent px-0">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-facebook"></i>
                </Link>
              </ListGroupItem>

              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-dribbble"></i>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-instagram"></i>
                </Link>
              </ListGroupItem>

              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-twitter"></i>
                </Link>
              </ListGroupItem>

              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </OffcanvasBody>
      </Offcanvas>
      <Offcanvas
        className="bg-dark"
        direction="end"
        isOpen={wishListOpen}
        toggle={togglewWishList}
      >
        <div>
          <Row>
            <Col xs={9} className="py-4 align-items-center">
              {" "}
              <h5 className="text-white px-4">
                Your Wishlist ({wishListItems?.length})
              </h5>
            </Col>
            <Col xs={3} className="align-items-center">
              {" "}
              <Button
                className="btn-close bg-transparent fs-1 ms-auto"
                onClick={togglewWishList}
              >
                <i className="bi bi-x-octagon"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <OffcanvasBody className="">
          {wishListItems.map((product) => {
            if (product) {
              return (
                <div>
                  <Row className="align-items-center my-4">
                    <Col xs={5} className="d-flex align-items-center">
                      <div
                        type="submit"
                        className="btn-close bg-transparent fs-1 ms-auto mx-2"
                        onClick={() => {
                          handleDeleteItem(product.id);
                        }}
                      >
                        <AiOutlineCloseCircle />
                      </div>
                      <a>
                        <img
                          className="img-fluid"
                          src={product.image}
                          alt="..."
                        />
                      </a>
                    </Col>
                    <Col xs={5}>
                      <h6>
                        <div className="link-title text-white">
                          {product.name}{" "}
                        </div>
                      </h6>
                      <div className="product-meta">
                        <span className="mx-2 text-primary">
                          ${product.salePrice}
                        </span>
                        <span className="text-muted">x {product.quantity}</span>
                      </div>
                      <div className="product-meta"></div>
                    </Col>
                    <Col xs={2} className="d-flex align-items-center mt-4">
                      <span
                        onClick={() => handleAddToCart(product)}
                        className="mx-2 btn text-white fs-1 ms-auto bg-transparent"
                      >
                        <BsFillCartCheckFill />
                      </span>
                    </Col>
                  </Row>
                </div>
              );
            }

            return null;
          })}
          <hr className="my-5" />
          <div className="d-flex justify-content-between align-items-center mb-8">
            <span className="text-muted">Subtotal:</span>
            <span className="text-white">${subtotal}</span>
          </div>
          <Link
            to="/product-cart"
            className="btn btn-primary btn-animated mr-2"
          >
            <i className="las la-shopping-cart mr-1"></i>View Cart
          </Link>
          <Link to="/product-checkout" className="btn btn-dark">
            <i className="las la-money-check mr-1"></i>Continue To Checkout
          </Link>
        </OffcanvasBody>
      </Offcanvas>
      <Offcanvas
        className="bg-dark"
        direction="end"
        isOpen={cartOpen}
        toggle={toggleCartList}
      >
        <div>
          <Row>
            <Col xs={9} className="py-4 align-item-center">
              {" "}
              <h5 className="text-white px-4">
                Your Cart ({cartItems?.length})
              </h5>
            </Col>
            <Col xs={3} className="align-item-center">
              {" "}
              <Button
                className="btn-close bg-transparent fs-1 ms-auto"
                onClick={toggleCartList}
              >
                <i className="bi bi-x-octagon"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <OffcanvasBody>
          {cartItems.map((product) => {
            if (product) {
              return (
                <div>
                  <Row className="align-items-center my-5">
                    <Col xs="5" className="d-flex align-items-center">
                      <div className="mr-4">
                        <Button
                          type="submit"
                          className="btn-close bg-transparent mx-2 fs-1 ms-auto"
                          onClick={() => {
                            dispatch(removeCartItem(product.id));
                          }}
                        >
                          <AiOutlineCloseCircle />
                        </Button>
                      </div>
                      <a>
                        <img
                          className="img-fluid"
                          src={product.image}
                          alt="..."
                        />
                      </a>
                    </Col>
                    <Col xs="5">
                      <h6>
                        <div className="link-title text-white">
                          {product.name}{" "}
                        </div>
                      </h6>
                      <div className="product-meta">
                        <span className="mx-2 text-primary">
                          ${product.salePrice}
                        </span>
                        <span className="text-muted">x {product.quantity}</span>
                      </div>
                      <div className="product-meta"></div>
                    </Col>
                  </Row>
                </div>
              );
            }

            return null;
          })}
          <hr className="my-5" />
          <div className="d-flex justify-content-between align-items-center mb-8">
            <span className="text-muted">Subtotal:</span>
            <span className="text-white">${subtotalCart}</span>
          </div>
          <Link
            to="/product-cart"
            className="btn btn-primary btn-animated mr-2"
          >
            <i className="las la-shopping-cart mr-1"></i>View Cart
          </Link>
          <Link to="/product-checkout" className="btn btn-dark">
            <i className="las la-money-check mr-1"></i>Continue To Checkout
          </Link>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Header;
