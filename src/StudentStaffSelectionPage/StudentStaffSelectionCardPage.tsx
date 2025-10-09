import { useNavigate } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";


export const StudentStaffSelectionCardPage = () => {
  const navigate = useNavigate();

  const handleClick = (type: "student" | "staff") => {
    const existing = JSON.parse(localStorage.getItem("selectedRole") || "[]");
    const updated = [...existing, { type, time: new Date().toISOString() }];
    localStorage.setItem("selectedRole", JSON.stringify(updated));
    navigate("/signin");
  };

  return (
    <div className="container my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={5} className="mb-4">
          <Card
            className="p-5"
            style={{ backgroundColor: "#FAF9F6", cursor: "pointer" }}
            onClick={() => handleClick("student")}
          >
            <Card.Body>
              <i
                className="fa-solid fa-graduation-cap d-flex justify-content-center mb-3"
                style={{ fontSize: "40px" }}
              ></i>
              <h1 className="mb-4 d-flex justify-content-center">
                Student Login
              </h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={5} className="mb-4">
          <Card
            className="p-5"
            style={{ backgroundColor: "#FAF9F6", cursor: "pointer" }}
            onClick={() => handleClick("staff")}
          >
            <Card.Body>
              <i
                className="fa-solid fa-chalkboard-user d-flex justify-content-center mb-3"
                style={{ fontSize: "40px" }}
              ></i>
              <h1 className="mb-4 d-flex justify-content-center">
                Staff Login
              </h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
