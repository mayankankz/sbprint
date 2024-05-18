import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Portfolio from "../../Components/portfolio/Protfolio";
import Contact from "../../Components/contact/Contact";

function PortFolioCard() {
  const firstBreadcrumb = { label: "Pages", link: "/portfolio-card" };
  const secondBreadcrumb = {
    label: "Portfolio Card",
    link: "/portfolio-card",
    active: true,
  };
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Portfolio Card"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default PortFolioCard;
