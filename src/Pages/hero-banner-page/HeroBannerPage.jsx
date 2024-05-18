import React, { useEffect, useState } from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import HeroBanner1 from "../../Components/heroBanner/HeroBanner";
import HeroBanner2 from "../../Components/heroBanner/HeroBanner2";
import HeroBanner3 from "../../Components/heroBanner/HeroBanner3";
import Contact from "../../Components/contact/Contact";

function HeroBannerPage() {
  const firstBreadcrumb = { label: "Pages", link: "/feature-hero" };
  const secondBreadcrumb = {
    label: "Hero Banner",
    link: "/feature-hero",
    active: true,
  };

  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Hero Banner"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <HeroBanner1 />
        <HeroBanner2 />
        <HeroBanner3 />
        <Contact />
      </div>
    </div>
  );
}

export default HeroBannerPage;
