import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Team from "../../Components/team/Team";
import Contact from "../../Components/contact/Contact";

function TeamPage() {
  const firstBreadcrumb = { label: "Pages", link: "/team" };
  const secondBreadcrumb = {
    label: "Team",
    link: "/team",
    active: true,
  };

  return (
    <div>
      <Page_Heading
        title="Team"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <Team />
        <Contact />
      </div>
    </div>
  );
}

export default TeamPage;
