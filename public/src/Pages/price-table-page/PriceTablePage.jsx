import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Pricing from "../../Components/pricing/Pricing";
import Pricing2 from "../../Components/pricing2/Pricing";
import Contact from "../../Components/contact/Contact";

function PriceTablePage() {
  const firstBreadcrumb = { label: "Pages", link: "/feature-pricing" };
  const secondBreadcrumb = {
    label: "Price Table",
    link: "/feature-pricing",
    active: true,
  };
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Price Table"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <Pricing />
        <Pricing2 />
        <Contact />
      </div>
    </div>
  );
}

export default PriceTablePage;
