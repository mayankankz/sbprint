import React, { useState } from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";
import Contact from "../../Components/contact/Contact";
import CustomPagination from "../../Components/pagination";
import articles from "../../api/articles";
import tags from "../../api/tags";
function BlogList1() {
  const firstBreadcrumb = { label: "Pages", link: "/blog-listing" };
  const secondBreadcrumb = {
    label: "Blog Listing 1",
    link: "/blog-listing",
    active: true,
  };
  const blogList = useSelector((state) => state.blog.blogItems);

  const [activePage, setActivePage] = useState(1);
  const pageSize = 3;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalPages = Math.ceil(blogList.length / pageSize);
  const startIndex = (activePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const blogToShow = blogList.slice(startIndex, endIndex);

  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Blog Listing"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          <Container>
            <Row>
              <div className="col-12 col-lg-7 mb-6 mb-lg-0">
                {blogToShow.map((blog) => (
                  <Card
                    key={blog.id}
                    className="p-4 border-0 shadow rounded-4 mb-5"
                  >
                    <CardImg
                      className="rounded-4 img-fluid"
                      src={blog.image}
                      alt="Image"
                    />
                    <CardBody className="p-0 pt-4">
                      <div>
                        <div className="d-inline-block bg-light text-center px-2 py-1 rounded me-2">
                          <i className="bi bi-calendar3 text-dark me-1"></i>{" "}
                          {blog.date}
                        </div>
                        <a className="d-inline-block btn-link" href="#">
                          {blog.category}
                        </a>
                      </div>
                      <h2 className="h5 my-3">
                        <a className="link-title" href="blog-single.html">
                          {blog.title}
                        </a>
                      </h2>
                      <p className="mb-0">{blog.description}</p>
                    </CardBody>
                  </Card>
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
              </div>
              <div className="col-12 col-lg-5 ms-auto ps-lg-8">
                <div className="p-5 rounded-4 border border-light">
                  <Form className="border-bottom border-light pb-5 row mb-5">
                    <Input
                      className="form-control me-2 col h-auto"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <Button className="btn btn-primary col-auto" type="submit">
                      <i className="bi bi-search"></i>
                    </Button>
                  </Form>
                  <Container className="mb-5 border-bottom border-light pb-5">
                    <h4 className="mb-3">Categories</h4>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <a
                          className="btn-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          All{" "}
                          <span className="small bg-light-2 p-2 rounded text-dark">
                            74
                          </span>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          className="btn-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Arts and Entertainment{" "}
                          <span className="small bg-light-2 p-2 rounded text-dark">
                            23
                          </span>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          className="btn-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Featured{" "}
                          <span className="small bg-light-2 p-2 rounded text-dark">
                            14
                          </span>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          className="btn-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Daily news{" "}
                          <span className="small bg-light-2 p-2 rounded text-dark">
                            48
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Blog Post{" "}
                          <span className="small bg-light-2 p-2 rounded text-dark">
                            32
                          </span>
                        </a>
                      </li>
                    </ul>
                  </Container>
                  <Container className="mb-5 border-bottom border-light pb-5">
                    <h4 className="mb-3">Recent Stories</h4>
                    {articles.map((article, index) => (
                      <article key={index}>
                        <div className="row align-items-center">
                          <div className="col-sm-4">
                            <img
                              src={article.imageSrc}
                              className="rounded-4 img-fluid shadow"
                              alt="..."
                            />
                          </div>
                          <div className="col-sm-8 mt-3 mt-sm-0">
                            <h5 className="h6">
                              <a className="link-title" href="blog-single.html">
                                {article.title}
                              </a>
                            </h5>
                            <a className="d-inline-block text-muted" href="#">
                              {article.date}
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </Container>
                  <Container>
                    <h4 className="mb-3">Tags</h4>
                    <div>
                      {tags.map((tag, index) => (
                        <a
                          key={index}
                          className="btn-link rounded-4 d-inline-block py-2 px-3 bg-light-3 m-1"
                          href="#"
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </Container>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <Contact />
      </div>
    </div>
  );
}

export default BlogList1;
