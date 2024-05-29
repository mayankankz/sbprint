import React from "react";
import Counter from "../../Components/counter/Counter";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Contact from "../../Components/contact/Contact";

function CounterPage() {
  const firstBreadcrumb = { label: "Pages", link: "/feature-counter" };
  const secondBreadcrumb = {
    label: "Counter",
    link: "/feature-counter",
    active: true,
  };
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Counter"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <Counter />
        <Contact />
      </div>
    </div>
  );
}

export default CounterPage;
