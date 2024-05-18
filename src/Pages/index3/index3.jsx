import React from "react";
import HeroBanner from "../../Components/heroBanner/HeroBanner2";
import Feature from "../../Components/feature3/Feature";
import Portfolio from "../../Components/portfolio/Protfolio";
import Testimonial from "../../Components/testimonial/Testimonial";
import Blog from "../../Components/blog/Blog";
import Contact from "../../Components/contact/Contact";
import About from "../../Components/about/About3";
import Pricing from "../../Components/pricing2/Pricing";
import HeroBanner3 from "../../Components/heroBanner/HeroBanner3";

function index3() {
  return (
    <div>
      <HeroBanner3 />
      <div className="page-content">
        <Feature />
        <About />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default index3;
