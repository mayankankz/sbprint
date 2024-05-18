import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import { Container, Row, Col, Button } from "reactstrap";
import Contact from "../../Components/contact/Contact";

function tAndC() {
  const firstBreadcrumb = { label: "Pages", link: "/terms-and-conditions" };
  const secondBreadcrumb = {
    label: "Terms & Condition",
    link: "/terms-and-conditions",
    active: true,
  };
  const data = [
    {
      title: "Description of Service",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi at fuga alias harum quo quibusdam odit eum reprehenderit consectetur suscipit!",
    },
    {
      title: "Your Registration Obligations",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt officia culpa nostrum maxime vero architecto, corporis placeat repudiandae minima facere animi, pariatur fugit dignissimos qui error est nulla. Doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt officia culpa nostrum maxime vero architecto, corporis placeat repudiandae minima facere animi, pariatur fugit dignissimos qui error est nulla. Doloribus.",
    },
    {
      title: "User Account, Password, and Security",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi.",
    },
    {
      title: "User Conduct",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vel recusandae ad impedit ipsum, vitae facere expedita! Voluptatem iure dolorem dignissimos nisi magni a dolore, et inventore optio, voluptas, obcaecati.",
      items: [
        "Lorem ipsum dolor sit amet, consectetur",
        "Quidem error quae illo excepturi nostrum blanditiis laboriosam",
        "Molestias, eum nihil expedita dolorum odio dolorem",
        "Eum nihil expedita dolorum odio dolorem",
        "Explicabo rem illum magni perferendis",
      ],
    },
    {
      title: "International Use",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vel recusandae ad impedit ipsum, vitae facere expedita! Voluptatem iure dolorem dignissimos nisi magni a dolore, et inventore optio, voluptas, obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate incidunt aliquam sint, magnam excepturi quas a, id doloremque quasi iusto quo consequuntur dolorum neque optio ipsum, rerum nesciunt illo iure.",
    },
  ];
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Terms & Conditions"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              {data.map((section, index) => (
                <div key={index}>
                  <h4 className="text-dark mt-5">{section.title}</h4>
                  <p className="mb-3">{section.content}</p>
                  {section.items && section.items.length > 0 && (
                    <React.Fragment>
                      {section.items.map((item, itemIndex) => (
                        <div
                          className="d-flex align-items-center mb-3"
                          key={itemIndex}
                        >
                          <div className="bg-light rounded px-2 py-1">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-check"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <p className="mb-0 ms-3">{item}</p>
                        </div>
                      ))}
                    </React.Fragment>
                  )}
                </div>
              ))}
              <div className="d-flex mt-5">
                <Button color="primary" className="me-1">
                  Accept
                </Button>
                <Button color="dark">Close</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Contact />
      );
    </div>
  );
}

export default tAndC;
