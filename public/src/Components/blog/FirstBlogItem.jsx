import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { setSelectedBlog } from "../../store/reducer/blogReducer";

const FirstBlogItem = ({ blog }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card className="p-4 border-0 shadow rounded-4">
        <img className="rounded-4 img-fluid" src={blog.image} alt="Image" />
        <CardBody className="p-0 pt-4">
          <div>
            <div className="d-inline-block bg-light text-center px-2 py-1 rounded me-2">
              <i className="bi bi-calendar3 text-dark me-1"></i> {blog.date}
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
      </Card>
    </div>
  );
};

export default FirstBlogItem;
