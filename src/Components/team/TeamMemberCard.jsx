import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  Row,
} from "reactstrap";
import { setSelectedTeamMember } from "../../store/reducer/teamReducer";
import { useDispatch, useSelector } from "react-redux";

const TeamMembers = ({ teamMembers }) => {
  const dispatch = useDispatch();

  return (
    <Row>
      {teamMembers.map((member) => (
        <Col key={member.id} lg="3" md="6" className="mb-4 mb-lg-0">
          <Card className="hover-translate bg-white shadow px-3 pt-4 pb-5 rounded-4">
            <div className="">
              <h6 className="mb-0 me-2">
                <Link
                  className="btn-link"
                  to="/team-single"
                  onClick={() => {
                    dispatch(setSelectedTeamMember(member.name));
                  }}
                >
                  {member.name}
                </Link>
              </h6>
              <span className="text-muted">{member.position}</span>
            </div>
            <div className="mt-3 mb-4">
              <CardImg
                top
                width="100%"
                src={`../src/assets/${member.imgSrc}`}
                alt={member.name}
                className="img-fluid rounded-4"
              />
            </div>
            <ul className="list-inline mb-0">
              {member.socialMedia.map((media) => (
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
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TeamMembers;
