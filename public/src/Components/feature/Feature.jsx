import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardComponent from "./FeatureCard";
import LottiePlayer from "../player";
import Bg from "../../assets/lottie/feature.json";

function Feature() {
  const cardData = [
    {
      title: "Develop Business",
      description:
        "Get the most of reduction in your team’s operating let’s come up with taypo. But I must idea of denouncing pleasure.",
      backgroundColor: "#ffebda",
      iconClass: "bi bi-sliders2",
    },
    {
      title: "Easy Customize",
      description:
        "Get the most of reduction in your team’s operating let’s come up with taypo. But I must idea of denouncing pleasure.",
      backgroundColor: "#dbf9f9",
      iconClass: "bi bi-gear",
    },
    {
      title: "Global Design",
      description:
        "Get the most of reduction in your team’s operating let’s come up with taypo. But I must idea of denouncing pleasure.",
      backgroundColor: "#faedff",
      iconClass: "bi bi-images",
    },
  ];

  return (
    <div>
      <section className="px-lg-7 px-2 pb-0 pt-0">
        <div className="bg-light py-10 px-3 px-lg-8 rounded-4 position-relative overflow-hidden">
          <Container className="z-index-1">
            <Row className="align-items-end justify-content-between mb-6">
              <Col xs={12} lg={6} xl={5}>
                <div>
                  <h2>We Provide Quality Features Service</h2>
                </div>
              </Col>
              <Col xs={12} lg={6} xl={5} className="ms-auto mt-5 mt-lg-0">
                <p className="lead">
                  We are a team of experienced developers who are passionate
                  about their work. No coding required to make customizations.
                </p>
              </Col>
            </Row>
            <Row className="gx-5">
              {cardData.map((data, index) => (
                <Col
                  style={{
                    marginTop: "2.5rem",
                    "@media screen and (minWidth: 700px)": { marginTop: 0 },
                  }}
                  lg={4}
                  md={6}
                  key={index}
                >
                  <CardComponent
                    title={data.title}
                    description={data.description}
                    backgroundColor={data.backgroundColor}
                    iconClass={data.iconClass}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <div className="position-absolute animation-2">
            <LottiePlayer src={Bg} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
