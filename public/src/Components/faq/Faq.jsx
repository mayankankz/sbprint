import React, { useState } from "react";
import { Col, Container, Row, Card } from "reactstrap";
import Accordion from "./Accordian";
import LottiePlayer from "../player";

function Faq() {
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
      <section className="py-4">
        <Container>
          <Row>
            <Col>
              <div className="bg-light-2 p-lg-8 p-4 rounded-4">
                <Row className="align-items-center justify-content-between">
                  <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                    <Card className="bg-transparent border-0">
                      <div>
                        <h6 className="border-bottom border-dark border-2 d-inline-block">
                          F.A.Q.
                        </h6>
                        <h2 className="font-w-6">
                          Find All Your Related Questions
                        </h2>
                      </div>
                      <lottie-player
                        src="https://lottie.host/f57c02a8-9265-4873-b44a-f00a5a068318/eDbndF0d2e.json"
                        background="transparent"
                        speed="1"
                        //style="width: auto; height: auto;"
                        loop
                        autoplay
                      ></lottie-player>
                    </Card>
                  </Col>
                  <Col xs={12} lg={6} xl={5}>
                    <Accordion accordionItems={accordionItems} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Faq;
