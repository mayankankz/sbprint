import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Blog from "../../Components/blog/Blog";
import { Col, Container, Row } from "reactstrap";
import RemainingBlogItems from "../../Components/blog/RemainnigBlogItem";
import { useSelector } from "react-redux";
import BlogItem from "../../Components/blog/BlogItem";
import Contact from "../../Components/contact/Contact";

function BlogPage() {
  const blogList = useSelector((state) => state.blog.blogItems);
  const firstBreadcrumb = { label: "Pages", link: "/feature-blog" };
  const secondBreadcrumb = {
    label: "Blogs",
    link: "/feature-blog",
    active: true,
  };
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Blogs"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <Blog />

        <section>
          <Container>
            <Row>
              {blogList.map((blog, index) => (
                <BlogItem key={index} blog={blog} />
              ))}
            </Row>
          </Container>
        </section>
        <Contact />
      </div>
    </div>
  );
}

export default BlogPage;
