import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Feature from "../../Components/feature/Feature";
import Feature2 from "../../Components/feature2/Feature";
import Feature3 from "../../Components/feature3/Feature";
import About from "../../Components/about/About";
import Contact from "../../Components/contact/Contact";

function FeatureBox() {
  const firstBreadcrumb = { label: "Pages", link: "/feature-icon-box" };
  const secondBreadcrumb = {
    label: "Feature Box",
    link: "/feature-icon-box",
    active: true,
  };
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Feature Box"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <Feature />
        <About />
        <Feature2 />
        <Feature3 />
        <Contact />
      </div>
    </div>
  );
}

export default FeatureBox;
