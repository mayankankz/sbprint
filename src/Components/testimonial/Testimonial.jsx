import React, { useState, useRef, useEffect } from "react";
import TestimonialsCarousel from "./TestimonialCarousel";
import { Col, Row } from "reactstrap";

function Testimonial() {
  const items = [
    {
      id: 1,
      image: "images/testimonial/01.jpg",
      name: "Preston Short",
      position: "CEO",
      quote:
        "Taypo is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.",
    },
    {
      id: 2,
      image: "images/testimonial/02.jpg",
      name: "Jonas Rain",
      position: "Founder",
      quote:
        "Taypo is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.",
    },
    {
      id: 3,
      image: "images/testimonial/03.jpg",
      name: "Kendra Luna",
      position: "Manager",
      quote:
        "Taypo is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.",
    },
    {
      id: 4,
      image: "images/testimonial/04.jpg",
      name: "Rechale John",
      position: "Supervisor",
      quote:
        "Taypo is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.",
    },
  ];

  return (
    <div>
      <section className="px-lg-7 px-2 pb-0">
        <div className="bg-light-2 py-10 px-3 px-lg-8 rounded-4">
          <div className="container">
            <div className="row justify-content-center text-center mb-6">
              <div className="col-12 col-lg-8">
                <div>
                  <h2>Client All Over The World Sent Us Awesome Feedback</h2>
                </div>
              </div>
            </div>
            <Row className="mx-lg-n10">
              <Col>
                <TestimonialsCarousel items={items} />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
