"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";
import { BsGripVertical, BsCheck } from "react-icons/bs";
import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlsButton";
import LessonControlButtons from "./LessonControlsButton";
import { courses as allCourses, modules as allModules } from "../../../Database";

type Lesson = {
  _id: string;
  name: string;
};

type Module = {
  _id: string;
  course: string; // course id
  name: string;
  lessons?: Lesson[];
};

type Course = {
  _id: string;
  name: string;
};

export default function Modules() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid;

  const [courseModules, setCourseModules] = useState<Module[]>([]);
  const [course, setCourse] = useState<Course | null>(null);
  const [moduleName, setModuleName] = useState<string>(""); // for adding new modules
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null); // track which module is being edited

  useEffect(() => {
    const foundCourse = allCourses.find((c) => c._id === courseId);
    setCourse(foundCourse || null);

    const filteredModules = allModules.filter((m) => m.course === courseId);
    setCourseModules(filteredModules);
  }, [courseId]);

  if (!course) return <p>Course not found</p>;

  // Add new module
  const addModule = () => {
    if (!moduleName.trim()) return;
    const newModule: Module = {
      _id: Date.now().toString(),
      course: courseId!,
      name: moduleName,
      lessons: [],
    };
    setCourseModules([...courseModules, newModule]);
    setModuleName("");
  };

  // Delete a module
  const deleteModule = (moduleId: string) => {
    setCourseModules(courseModules.filter((m) => m._id !== moduleId));
  };

  // Update module name
  const updateModuleName = (moduleId: string, newName: string) => {
    setCourseModules(
      courseModules.map((m) => (m._id === moduleId ? { ...m, name: newName } : m))
    );
    setEditingModuleId(null);
  };

  return (
    <div>
      <ModulesControls />

      {/* Add Module Form */}
      <div className="d-flex mb-3 mt-3">
        <FormControl
          placeholder="New Module Name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          className="me-2"
        />
        <Button variant="primary" onClick={addModule}>
          Add Module
        </Button>
      </div>

      <ListGroup id="wd-modules" className="rounded-0">
        {courseModules.map((module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-3 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" />
                {editingModuleId === module._id ? (
                  <FormControl
                    value={module.name}
                    onChange={(e) =>
                      setCourseModules(
                        courseModules.map((m) =>
                          m._id === module._id ? { ...m, name: e.target.value } : m
                        )
                      )
                    }
                    size="sm"
                    style={{ width: "200px", display: "inline-block" }}
                  />
                ) : (
                  module.name
                )}
              </span>

              <div className="d-flex align-items-center ms-2">
                {/* Keep previous icons */}
                <ModuleControlButtons />

                {/* Green checkmark only */}
                {editingModuleId === module._id && (
                  <Button
                    variant="success"
                    size="sm"
                    className="me-2"
                    onClick={() => updateModuleName(module._id, module.name)}
                  >
                    <BsCheck />
                  </Button>
                )}

                {/* Edit button */}
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => setEditingModuleId(module._id)}
                >
                  Edit
                </Button>

                {/* Delete button */}
                <Button
                  variant="danger"
                  size="sm"
                  className="ms-2"
                  onClick={() => deleteModule(module._id)}
                >
                  Delete
                </Button>
              </div>
            </div>

            {module.lessons && module.lessons.length > 0 && (
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
