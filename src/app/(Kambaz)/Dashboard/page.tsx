"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
  FormControl,
} from "react-bootstrap";
import * as coursesClient from "../Courses/client";

interface Course {
  _id?: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  author?: string;
}

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const [courseForm, setCourseForm] = useState<Course>({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "D000",
    credits: 0,
    description: "New Description",
  });

  // Fetch courses from MongoDB on mount
  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const fetchedCourses = await coursesClient.getAllCourses();
      setCourses(fetchedCourses);
      setLoading(false);
    } catch (error) {
      console.error("Error loading courses:", error);
      setLoading(false);
    }
  };

  const addNewCourse = async () => {
    try {
      const newCourse = await coursesClient.createCourse(courseForm);
      setCourses([...courses, newCourse]);
      setCourseForm({ 
        name: "New Course", 
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        department: "D000",
        credits: 0,
        description: "New Description" 
      });
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const updateCourse = async () => {
    if (!courseForm._id) return;
    try {
      const updated = await coursesClient.updateCourse(courseForm._id, courseForm);
      setCourses(courses.map((c) => (c._id === updated._id ? updated : c)));
      setCourseForm({ 
        name: "New Course", 
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        department: "D000",
        credits: 0,
        description: "New Description" 
      });
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const deleteCourse = async (id: string) => {
    try {
      await coursesClient.deleteCourse(id);
      setCourses(courses.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const editCourse = (course: Course) => {
    setCourseForm(course);
  };

  if (loading) {
    return <div className="p-4">Loading courses...</div>;
  }

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Course Form */}
      <h5>
        Course Form
        <Button
          className="btn btn-primary float-end"
          onClick={addNewCourse}
          id="wd-add-new-course-click"
        >
          Add
        </Button>
        <Button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </Button>
      </h5>
      <br />

      <FormControl
        value={courseForm.name}
        className="mb-2"
        placeholder="Course Name"
        onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        rows={3}
        value={courseForm.description}
        className="mb-2"
        placeholder="Course Description"
        onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
      />
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      {/* Courses Grid */}
      <div id="wd-dashboard-courses">
        <Row xs={1} md={3} lg={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                {/* Image and Go button wrapped in Link */}
                <Link href={`/Courses/${course._id}/Home`} className="text-decoration-none text-dark">
                  <CardImg
                    variant="top"
                    src="/images/reactjs.jpg"
                    width="100%"
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary" className="me-2">
                      Go
                    </Button>
                  </CardBody>
                </Link>

                {/* Edit/Delete buttons outside the Link */}
                <CardBody>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => editCourse(course)}
                    id={`wd-edit-course-${course._id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteCourse(course._id!)}
                    id={`wd-delete-course-${course._id}`}
                  >
                    Delete
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
