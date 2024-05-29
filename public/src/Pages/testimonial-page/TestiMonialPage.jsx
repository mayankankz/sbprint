import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Testimonial from "../../Components/testimonial/Testimonial";

function TestiMonialPage() {
  const firstBreadcrumb = { label: "Pages", link: "/feature-testimonial" };
  const secondBreadcrumb = {
    label: "Testimonial",
    link: "/feature-testimonial",
    active: true,
  };
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Testimonial"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <section className="px-lg-7 px-1 pb-0">
        <div className="bg-light-2 py-10 px-1 px-lg-8 rounded-4">
          <Testimonial />
        </div>
        <Testimonial />
        <div className="bg-light-2 py-10 px-1 px-lg-8 rounded-4">
          <Testimonial />
        </div>
      </section>
    </div>
  );
}

export default TestiMonialPage;
