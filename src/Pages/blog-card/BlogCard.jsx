import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import { Container, Row } from "reactstrap";
import BlogItem from "../../Components/blog/BlogItem";
import { useSelector } from "react-redux";
import Contact from "../../Components/contact/Contact";

function BlogCard() {
  const blogList = useSelector((state) => state.blog.blogItems);

  const firstBreadcrumb = { label: "Pages", link: "/blog-card" };
  const secondBreadcrumb = {
    label: "Blog Card",
    link: "/blog-card",
    active: true,
  };
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Blog Card"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
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

export default BlogCard;
