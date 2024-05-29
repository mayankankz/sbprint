import React from "react";
import Feature from "../../Components/feature/Feature";
import About from "../../Components/about/About";
import Counter from "../../Components/counter/Counter";
import Testimonial from "../../Components/testimonial/Testimonial";
import Portfolio from "../../Components/portfolio/Protfolio";
import Pricing from "../../Components/pricing/Pricing";
import Blog from "../../Components/blog/Blog";
import Contact from "../../Components/contact/Contact";
import HeroBanner1 from "../../Components/heroBanner/HeroBanner";
function index() {
  return (
    <div>
      <HeroBanner1 />
      <div className="page-content">
        <Feature />
        <Counter />
        <About />
        <Testimonial />
        <Portfolio />
        <Pricing />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default index;
