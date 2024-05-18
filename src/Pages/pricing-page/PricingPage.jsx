import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Pricing from "../../Components/pricing/Pricing";
import Contact from "../../Components/contact/Contact";

function PricingPage() {
  const firstBreadcrumb = { label: "Pages", link: "/pricing" };
  const secondBreadcrumb = {
    label: "Price Table",
    link: "/v",
    active: true,
  };
  return (
    <div>
      <div>
        <Page_Heading
          title="Price Table"
          firstBreadcrumb={firstBreadcrumb}
          secondBreadcrumb={secondBreadcrumb}
        />
        <div className="page-content">
          <Pricing />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
