import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Accordion from "../../Components/faq/Accordian";
import { Col, Container, Row, Card } from "reactstrap";
import Contact from "../../Components/contact/Contact";

function FaqPage() {
  const firstBreadcrumb = { label: "Pages", link: "/faq" };
  const secondBreadcrumb = {
    label: "F.A.Q",
    link: "/faq",
    active: true,
  };
  const accordionItems = [
    {
      id: 1,
      title: "Hoe Does The Free Trial ?",
      content:
        "Synergistically visualize alternative content before cross functional core Rapidiously focused benefits.",
    },
    {
      id: 2,
      title: "What are your social media ?",
      content:
        "Synergistically visualize alternative content before cross functional core Rapidiously focused benefits.",
    },
    {
      id: 3,
      title: "Which is the same as saying through ?",
      content:
        "Synergistically visualize alternative content before cross functional core Rapidiously focused benefits.",
    },
    {
      id: 4,
      title: "Which is the same as saying through ?",
      content:
        "Synergistically visualize alternative content before cross functional core Rapidiously focused benefits.",
    },
    {
      id: 5,
      title: "Hoe Does The Free Trial ?",
      content:
        "Synergistically visualize alternative content before cross functional core Rapidiously focused benefits.",
    },
  ];
  return (
    <div>
      <Page_Heading
        title="Frequently Asked Questions"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section className="pb-10">
          <Container>
            <Row>
              <Col>
                <div className="bg-light-2 p-lg-8 p-4 rounded-4">
                  <Accordion accordionItems={accordionItems} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Contact />
      </div>
    </div>
  );
}

export default FaqPage;
