import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, CardBody } from "reactstrap";
import { setSelectedBlog } from "../../store/reducer/blogReducer";
import { useDispatch } from "react-redux";

const RemainingBlogItems = ({ blogs }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {blogs.map((blog, index) => (
        <Card key={index} className="p-4 border-0 shadow rounded-4 mt-4">
          <Row>
            <Col md="5">
              <img
                className="rounded-4 img-fluid h-100"
                src={blog.image}
                alt="Image"
              />
            </Col>
            <Col md="7">
              <CardBody className="ps-0">
                <div>
                  <div className="d-inline-block bg-light text-center px-2 py-1 rounded me-2">
                    <i className="bi bi-calendar3 text-dark me-1"></i>{" "}
                    {blog.date}
                  </div>
                  <div className="d-inline-block btn-link">{blog.category}</div>
                </div>
                <h2 className="h5 my-3">
                  <Link
                    className="link-title"
                    to="/blog-single"
                    onClick={() => {
                      dispatch(setSelectedBlog(blog.title));
                    }}
                  >
                    {blog.title}
                  </Link>
                </h2>
                <p className="mb-0">{blog.description}</p>
              </CardBody>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default RemainingBlogItems;
