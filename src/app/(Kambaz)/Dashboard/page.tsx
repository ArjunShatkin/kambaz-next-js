"use client";

import Link from "next/link";
import { Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button } from "react-bootstrap";

const courses = [
  {
    id: "1234",
    title: "CS1234 React JS",
    description: "Full Stack Software Developer",
    img: "/images/reactjs.jpg",
  },
  {
    id: "2345",
    title: "CS2345 Node.js",
    description: "Backend Development with Node",
    img: "/images/nodejs.jpg",
  },
  {
    id: "3456",
    title: "CS3456 Python",
    description: "Programming with Python",
    img: "/images/python.jpg",
  },
  {
    id: "4567",
    title: "CS4567 Data Science",
    description: "Data Analysis & Visualization",
    img: "/images/datasci.jpg",
  },
  {
    id: "5678",
    title: "CS5678 Machine Learning",
    description: "Intro to ML Models",
    img: "/images/ml.jpg",
  },
  {
    id: "6789",
    title: "CS6789 Databases",
    description: "SQL and NoSQL Databases",
    img: "/images/db.jpg",
  },
  {
    id: "7890",
    title: "CS7890 Artificial Intelligence",
    description: "Intro to AI Concepts",
    img: "/images/ai.jpg",
  },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={3} lg={5} className="g-4">
          {courses.map((course) => (
            <Col key={course.id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course.id}/Home`} className="text-decoration-none text-dark">
                  <CardImg
                    variant="top"
                    src={course.img}
                    width="100%"
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
