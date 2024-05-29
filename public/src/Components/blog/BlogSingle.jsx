import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Media,
  Button,
  ListGroupItem,
  ListGroup,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import RemainingBlogItems from "./RemainnigBlogItem";
import comments from "../../api/comments";
import Contact from "../contact/Contact";
import Page_Heading from "../page-heading/Page_Heading";

function BlogSingle() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const firstBreadcrumb = { label: "Pages", link: "/blog-single" };
  const secondBreadcrumb = {
    label: "Blog Card",
    link: "/blog-single",
    active: true,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic or API request here
    // You can access the form data using formData.name, formData.email, formData.message
  };

  const blogList = useSelector((state) => state.blog.blogItems);
  const title = useSelector((state) => state.blog.selectedBlog);
  useEffect(() => {}, [title]);
  let blog = blogList.find((p) => p.title === title);
  const otherBlogs = blogList.filter((blog) => blog.title !== title);
  if (blog == undefined ? (blog = blogList[0]) : blog)
    return (
      <div className="page-wrapper">
        <Page_Heading
          title="Blog Card"
          firstBreadcrumb={firstBreadcrumb}
          secondBreadcrumb={secondBreadcrumb}
        />
        <section>
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Card className="post-card rounded border-0 shadow-none">
                  <CardImg
                    top
                    className="rounded img-fluid"
                    src={blog.image}
                    alt="Image"
                  />
                  <CardBody className="pt-4 pb-0 px-0">
                    <div>
                      <div className="d-inline-block bg-light text-center px-2 py-1 rounded me-2">
                        <i className="bi bi-calendar3 text-dark me-1"></i>{" "}
                        {blog.date}
                      </div>
                      <a className="d-inline-block btn-link" href="#">
                        {blog.category}
                      </a>
                    </div>
                    <CardTitle tag="h2">{blog.title}</CardTitle>
                  </CardBody>
                </Card>
                <p className="mt-5 mb-0 lead">{blog.description}</p>
                <blockquote className="shadow rounded-4 border-0 fst-italic p-lg-5 p-3 my-5 h6 font-w-4">
                  <CardText className="mb-0">
                    “These cases are perfectly simple and easy to distinguish.
                    In a free hour, when our power of choice is untrammelled
                    data structures manages data in technology..”
                  </CardText>
                  <CardText className="mt-2 d-block text-dark font-w-6">
                    - Abigail Rain
                  </CardText>
                </blockquote>
                <div className="d-md-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <h6 className="mb-0 me-4">Share It:</h6>
                    <div className="social-icons">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a
                            className="border rounded px-2 py-1 text-dark"
                            href="#"
                          >
                            <i className="bi bi-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="border rounded px-2 py-1 text-dark"
                            href="#"
                          >
                            <i className="bi bi-dribbble"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="border rounded px-2 py-1 text-dark"
                            href="#"
                          >
                            <i className="bi bi-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="border rounded px-2 py-1 text-dark"
                            href="#"
                          >
                            <i className="bi bi-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="border rounded px-2 py-1 text-dark"
                            href="#"
                          >
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-md-end mt-5 mt-md-0">
                    <h6 className="mb-0 me-4">Tags: </h6>
                    <ul className="list-inline mb-0 widget-tags">
                      <li className="list-inline-item">
                        <a
                          className="btn-link rounded-4 d-inline-block py-2 px-3 bg-light-3"
                          href="#"
                        >
                          Bootstrap 5
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="btn-link rounded-4 d-inline-block py-2 px-3 bg-light-3"
                          href="#"
                        >
                          Data Science
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="btn-link rounded-4 d-inline-block py-2 px-3 bg-light-3"
                          href="#"
                        >
                          Analytics
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Row className="my-6">
                  <RemainingBlogItems blogs={otherBlogs} />
                </Row>
                <div className="my-6 border border-light rounded-4 p-5">
                  <div className="mb-4">
                    <h2>Recent Comments</h2>
                  </div>
                  {comments.map((comment) => (
                    <div
                      className="d-block d-md-flex align-items-center border-bottom border-light pb-5 mb-5"
                      key={comment.id}
                    >
                      <Media>
                        <Media left className="me-5">
                          <Media
                            object
                            src={comment.imageSrc}
                            alt="image"
                            className="img-fluid rounded"
                          />
                        </Media>
                        <Media body>
                          <div className="mb-3">
                            <h5 className="mb-0 d-inline-block me-1 align-middle">
                              {comment.author}
                            </h5>
                            <small className="text-muted">
                              - {comment.date}
                            </small>
                          </div>
                          <p className="mb-md-0">{comment.content}</p>
                        </Media>
                      </Media>
                      <Button className="btn-link fs-3" href="#">
                        <i className="bi bi-box-arrow-up-right"></i>
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="post-comments mt-5">
                  <div className="mb-4">
                    <h2>Leave A Comment</h2>
                  </div>
                  <Form
                    id="contact-form"
                    className="row"
                    onSubmit={handleSubmit}
                  >
                    <div id="formmessage"></div>
                    <FormGroup className="mb-3 col-md-6">
                      <Input
                        type="text"
                        name="name"
                        id="form_name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </FormGroup>
                    <FormGroup className="mb-3 col-md-6">
                      <Input
                        type="email"
                        name="email"
                        id="form_email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </FormGroup>
                    <FormGroup className="mb-3 col-md-12">
                      <Input
                        type="textarea"
                        name="message"
                        id="form_message"
                        placeholder="Message"
                        rows="3"
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </FormGroup>
                    <div className="col-12 mt-4">
                      <Button color="primary" type="submit">
                        <span>Post Comment</span>
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Contact />
      </div>
    );
}

export default BlogSingle;
