import React, { useEffect } from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import Team from "../../Components/team/Team";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

function TeamSingle() {
  const name = useSelector((state) => state.team.selectedTeamMember);
  useEffect(() => {}, [name]);
  const team = useSelector((state) => state.team.teamMembers);
  let teamMember = team.find((p) => p.name === name);
  const firstBreadcrumb = { label: "Pages", link: "/team-single" };
  const secondBreadcrumb = {
    label: "Team Single",
    link: "/team-single",
    active: true,
  };
  if (teamMember == undefined ? (teamMember = team[0]) : teamMember)
    return (
      <div>
        <Page_Heading
          title="Team Single"
          firstBreadcrumb={firstBreadcrumb}
          secondBreadcrumb={secondBreadcrumb}
        />
        <div className="page-content">
          <section className="bg-light">
            <Container>
              <Row className="align-items-center">
                <Col lg="5" md="12">
                  <div className="shadow p-4 bg-white rounded-4">
                    <img
                      className="img-fluid w-100 rounded-4"
                      src={teamMember.imgSrc}
                      alt=""
                    />
                  </div>
                </Col>
                <Col lg="7" md="12" className="mt-5 mt-lg-0 ps-lg-6">
                  <div>
                    <h2 className="mb-3">
                      {teamMember.name}
                      <span className="text-primary">
                        - {teamMember.position}
                      </span>
                    </h2>
                    <p className="lead my-3 text-dark">
                      We are focused on helping brands grow through digital
                      transformation services. We bring real solutions to each
                      client’s problems through a deep understanding of their
                      market, solution, and vision
                    </p>
                    <p className="mb-4">
                      Nunc, justo, diam orci, dictum purus convallis risus.
                      Suscipit hendrerit at egestas id id blandit interdum est.
                      Integer fames placerat turpis pretium quis hac leo lacus.
                      Orci, dictum nunc mus quis semper eu bibendum enim, morbi.
                    </p>
                    <div className="team-cntct d-flex justify-content-between">
                      <ul className="media-icon list-unstyled font-w-5">
                        <li className="mb-2">
                          <i className="text-primary fs-4 align-middle bi bi-envelope me-2"></i>
                          <a
                            className="btn-link"
                            href="mailto:themeht23@gmail.com"
                          >
                            {teamMember.emaiId}
                          </a>
                        </li>
                        <li>
                          <i className="text-primary fs-4 align-middle bi bi-telephone me-2"></i>
                          <a className="btn-link" href="tel:+912345678900">
                            {teamMember.phoneNo}
                          </a>
                        </li>
                      </ul>
                      <div>
                        <h6>Follow Us:</h6>

                        <ul className="list-inline mb-0">
                          {teamMember.socialMedia.map((media) => (
                            <li className="list-inline-item" key={media.icon}>
                              <Link
                                className="border rounded px-2 py-1 text-dark"
                                to={media.link}
                              >
                                <i className={`bi ${media.icon}`}></i>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Team />
        </div>
      </div>
    );
}

export default TeamSingle;
