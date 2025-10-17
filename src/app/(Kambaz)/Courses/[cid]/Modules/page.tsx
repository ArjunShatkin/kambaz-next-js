"use client"; // <-- this is required for useState/useEffect

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlsButton";
import LessonControlButtons from "./LessonControlsButton";
import { courses, modules } from "../../../Database";

type Lesson = {
  _id: string;
  name: string;
};

type Module = {
  _id: string;
  course: string; // course id from modules.json
  name: string;
  lessons?: Lesson[];
};

type Course = {
  _id: string;
  name: string;
};

export default function Modules() {
  const { cid } = useParams();
  const [courseModules, setCourseModules] = useState<Module[]>([]);
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const foundCourse = courses.find((c) => c._id === cid);
    setCourse(foundCourse || null);

    const filteredModules = modules.filter((m) => m.course === cid);
    setCourseModules(filteredModules);
  }, [cid]);

  if (!course) return <p>Course not found</p>;
  if (!courseModules.length) return <p>No modules found for {course.name}</p>;

  return (
    <div>
      <ModulesControls />
      <br /><br /><br />
      <h2 className="text-danger">{course.name} &gt; Modules</h2>

      <ListGroup id="wd-modules" className="rounded-0">
        {courseModules.map((module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> {module.name}
              </span>
              <ModuleControlButtons />
            </div>

            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson) => (
                  <ListGroupItem
                    key={lesson._id}
                    className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                  >
                    <span>
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                    </span>
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
