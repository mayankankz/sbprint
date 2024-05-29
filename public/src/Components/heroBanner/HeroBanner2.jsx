import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "reactjs-popup/dist/index.css";
import LottiePlayer from "../player";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import Hero2 from "../../assets/lottie/hero2.json";
import Bg from "../../assets/lottie/hero2bg.json";


function HeroBanner2() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    navigate("/contact-us");
  };

  return (
    <div>
      <section className="px-lg-10 pb-0 pt-5">
        <div className="overflow-hidden position-relative bg-light-3 z-index-1 rounded-4 py-10">
          <Container className="z-index-1">
            <Row className="align-items-center">
              <Col xs={12} lg={6} className="mb-8 mb-lg-0">
                <LottiePlayer src={Hero2} />
              </Col>
              <Col xs={12} lg={6} className="ps-lg-8">
                <h1 className="font-w-6 mb-5">
                <span className="title-bg text-primary position-relative font-w-7 d-inline-block">
                Empowering
                </span> Your Digital Vision.{" "}
               
                </h1>
                <p className="lead mb-6">
                Unleash Innovation With Our Comprehensive Solutions And IT Services.
                </p>
                <div>
                  <Button color="dark" className="me-3" onClick={handleClick}>
                    Let's Get Started
                  </Button>
                

                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Video Modal"
                    style={{
                      overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        zIndex: 9999, // Higher zIndex to appear on top
                      },
                      content: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxWidth: "80%",
                        maxHeight: "80%",
                        overflow: "auto",
                        outline: "none",
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <div>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Nv7RgGpu6ME"
                        title="Video Player"
                        //allowFullScreen
                      ></iframe>
                    </div>
                  </Modal>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="position-absolute animation-1 w-100">
            <LottiePlayer src={Bg} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroBanner2;
