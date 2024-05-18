import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Contact from "../../Components/contact/Contact";
import Faq from "../../Components/faq/Faq";

function AccordionPage() {
  const firstBreadcrumb = { label: "Accordion", link: "/feature-accordion" };
  const secondBreadcrumb = {
    label: "Accordion",
    link: "/feature-accordion",
    active: true,
  };
  return (
    <div>
      <Page_Heading
        title="Accordion"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-wrapper">
        <Faq />
        <Contact />
      </div>
    </div>
  );
}

export default AccordionPage;
