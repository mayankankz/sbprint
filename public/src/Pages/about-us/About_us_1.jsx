import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import About2 from "../../Components/about/About2";
import Feature from "../../Components/feature/Feature";
import Testimonial from "../../Components/testimonial/Testimonial";
import Blog from "../../Components/blog/Blog";
import Contact from "../../Components/contact/Contact";

function About_us_1() {
  const firstBreadcrumb = { label: "Pages", link: "/about-us-1" };
  const secondBreadcrumb = {
    label: "About Us",
    link: "/about-us-1",
    active: true,
  };
  return (
    <div>
      <Page_Heading
        title="About Us"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />

      <div className="page-content">
        <About2 />
        <Feature />
        <Testimonial />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default About_us_1;
