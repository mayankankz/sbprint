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

const FeatureCarousel = ({ items }) => {
  const options = {
    dots: false,
    items: 5,
    margin: 30,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
    },
  };
  return (
    <>
      <OwlCarousel loop {...options}>
        {items.map((client) => (
          <div className="item" key={client.id}>
            <div className="clients-logo">
              <img className="img-fluid" src={client.logo} alt="" />
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

export default FeatureCarousel;
