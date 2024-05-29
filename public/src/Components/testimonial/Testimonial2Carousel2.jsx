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

const TestimonialsCarousel2 = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

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
        {items.map((item,index) => (
         
            <div
    className="item"
    key={item.id}
    style={{ border: activeIndex === index ? 'none' : '' ,padding: '15px'}}
  >
    <div className="card p-3 p-md-5 my-3 bg-white rounded-4">
      <div className="card-body p-0">
        <div className="bg-dark mb-4 px-2 rounded-4 d-inline-block">
          <i className="bi bi-quote fs-3 text-white"></i>
        </div>
        <p className="font-w-5 lead mb-4">{item.quote}</p>
        <div className="d-flex align-items-center">
          <div>
            <img alt="Image" src={item.image} className="img-fluid rounded-circle" />
          </div>
          <div className="ms-3">
            <span className="font-w-6 text-dark mb-0">{item.name}</span>
            <small className="text-muted fst-italic">- {item.position}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
        ))}
      </OwlCarousel>
    </>
  );
};

export default TestimonialsCarousel2;
