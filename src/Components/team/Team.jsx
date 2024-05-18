import React from "react";
import { Container, Row, Col } from "reactstrap";
import TeamMembers from "./TeamMemberCard";
function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "shailendra goswami",
      position: "Founder / CEO",
      imgSrc: "images/team/chintu.jpeg",
      emaiId: "themeht23@gmail.com",
      phoneNo: "+91 9584730838",
      socialMedia: [
        { icon: "bi-facebook", link: "/index-2" },
        { icon: "bi-dribbble", link: "/index-2" },
        { icon: "bi-twitter", link: "/index-2" },
        { icon: "bi-linkedin", link: "/index-2" },
      ],
    },
    {
      id: 2,
      name: "Mayank GiriGoswami",
      position: "CTO / Tech Specialist",
      imgSrc: "images/team/mayank.jpg",
      emaiId: "mayankgirigoswami2212@gmail.com",
      phoneNo: "+91-7869498557",
      socialMedia: [
        { icon: "bi-facebook", link: "/index-2" },
        { icon: "bi-dribbble", link: "/index-2" },
        { icon: "bi-twitter", link: "/index-2" },
        { icon: "bi-linkedin", link: "/index-2" },
      ],
    },
    {
      id: 3,
      name: "Sachin",
      position: "Marketing/Oprations Head",
      imgSrc: "images/team/sachin.jpeg",
      emaiId: "themeht23@gmail.com",
      phoneNo: "+91-234-567-8900",
      socialMedia: [
        { icon: "bi-facebook", link: "/index-2" },
        { icon: "bi-dribbble", link: "/index-2" },
        { icon: "bi-twitter", link: "/index-2" },
        { icon: "bi-linkedin", link: "/index-2" },
      ],
    },
    {
      id: 4,
      name: "Naman",
      position: "Marketing analyst",
      imgSrc: "images/team/Naman.jpeg",
      emaiId: "themeht23@gmail.com",
      phoneNo: "+91-234-567-8900",
      socialMedia: [
        { icon: "bi-facebook", link: "/index-2" },
        { icon: "bi-dribbble", link: "/index-2" },
        { icon: "bi-twitter", link: "/index-2" },
        { icon: "bi-linkedin", link: "/index-2" },
      ],
    },
  ];
  return (
    <div>
      <section>
        <Container>
          <div className="row justify-content-center text-center mb-6">
            <Col xs="12" lg="8">
              <div>
                <h6 className="border-bottom border-dark border-2 d-inline-block">
                  Team
                </h6>
                <h2 className="font-w-6">Meet Our Expert Advisor</h2>
                <p className="lead mb-0">
                We are a team of experienced developers passionate about delivering cutting-edge technology solutions. No effort required for seamless customizations.
                </p>
              </div>
            </Col>
          </div>
          <Row>
            <TeamMembers teamMembers={teamMembers} />
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Team;
