import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import { Col, Container, Row } from "reactstrap";
import Contact from "../../Components/contact/Contact";

function privacy() {
  const firstBreadcrumb = { label: "Pages", link: "/privacy-policy" };
  const secondBreadcrumb = {
    label: "Privacy & Policy",
    link: "/privacy-policy",
    active: true,
  };
  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      text: "Quidem error quae illo excepturi nostrum blanditiis laboriosam",
    },
    {
      text: "Molestias, eum nihil expedita dolorum odio dolorem",
    },
    {
      text: "Eum nihil expedita dolorum odio dolorem",
    },
    {
      text: "Explicabo rem illum magni perferendis",
    },
  ];
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Privacy & Policy"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          <Container>
            <Row>
              <Col lg="12" md="12">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem error quae illo excepturi nostrum blanditiis laboriosam
                  magnam explicabo.
                </p>
                <p>
                  eum nihil expedita dolorum odio dolorem, explicabo rem illum
                  magni perferendis. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Quidem error quae illo excepturi nostrum
                  blanditiis laboriosam magnam explicabo. Molestias, eum nihil
                  expedita dolorum odio dolorem, explicabo rem illum magni
                  perferendis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem error quae illo excepturi nostrum blanditiis laboriosam
                  magnam explicabo. Molestias, eum nihil expedita dolorum odio
                  dolorem, explicabo rem illum magni perferendis.
                </p>
                <h4 className="mt-5 text-primary">Personal Information</h4>
                {data.map((item, index) => (
                  <div className="d-flex align-items-center mb-3" key={index}>
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
                    <p className="mb-0 ms-3">{item.text}</p>
                  </div>
                ))}
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt
                  sed omnis expedita, commodi dolores. Debitis nemo animi quia
                  deleniti commodi nesciunt illo. Deserunt.
                </p>
                <h4 className="mt-5 text-primary">Use of User Information.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt
                  sed omnis expedita, commodi dolores. Debitis nemo animi quia
                  deleniti commodi nesciunt illo. Deserunt.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Possimus, ex, quisquam.
                  Nulla excepturi sint iusto incidunt sed omnis expedita,
                  commodi dolores. Debitis nemo animi quia deleniti commodi
                  nesciunt illo. Deserunt. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Possimus, ex, quisquam. Nulla
                  excepturi sint iusto incidunt sed omnis expedita, commodi
                  dolores. Debitis nemo animi quia deleniti commodi nesciunt
                  illo. Deserunt.
                </p>
                <h4 className="mt-5 text-primary">
                  Disclosure of User Information.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem ullam nostrum dolor alias aspernatur nobis suscipit
                  eaque cumque distinctio eos, beatae deserunt, nihil nam
                  maiores vero, eius harum. Reprehenderit, aspernatur.
                </p>
                {data.map((item, index) => (
                  <div className="d-flex align-items-center mb-3" key={index}>
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
                    <p className="mb-0 ms-3">{item.text}</p>
                  </div>
                ))}
                <p className="mt-5 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt
                  sed omnis expedita, commodi dolores. Debitis nemo animi quia
                  deleniti commodi nesciunt illo. Deserunt.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <Contact />
      </div>
    </div>
  );
}

export default privacy;
