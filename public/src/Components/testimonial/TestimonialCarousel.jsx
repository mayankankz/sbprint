import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TestimonialsCarousel = ({ items }) => {
  return (
    <>
      <OwlCarousel
        center
        dots={false}
        nav
        items={3}
        loop
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
        }}
        margin={30}
       
      >
        {items.map((item) => (
          <div className="item" key={item.id}     style={{padding: '15px'}}
>
            <Card className="p-3 p-md-5 border-0 bg-white rounded-4">
              <CardBody className="card-body p-0">
                <CardText className="font-w-5 lead mb-3">{item.quote}</CardText>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <CardImg
                        alt="Image"
                        src={item.image}
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="ms-3">
                      <CardTitle className="font-w-6 text-dark mb-0">
                        {item.name}
                      </CardTitle>
                      <CardSubtitle className="text-muted fst-italic">
                        - {item.position}
                      </CardSubtitle>
                    </div>
                  </div>
                  <i className="bi bi-quote fs-1 text-dark"></i>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

export default TestimonialsCarousel;
