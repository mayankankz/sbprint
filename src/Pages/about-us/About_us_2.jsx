import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Counter from "../../Components/counter/Counter";
import Faq from "../../Components/faq/Faq";
import About from "../../Components/about/About";
import Team from "../../Components/team/Team";
import Blog from "../../Components/blog/Blog";
import Contact from "../../Components/contact/Contact";
import About2 from "../../Components/about/About2";
function About_us_2() {
  const firstBreadcrumb = { label: "Pages", link: "/about-us-1" };
  const secondBreadcrumb = {
    label: "About Us",
    link: "/about-us",
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
       
        <Faq />
        <About2 />
        <Team />
        
        <Contact />
      </div>
    </div>
  );
}

export default About_us_2;
