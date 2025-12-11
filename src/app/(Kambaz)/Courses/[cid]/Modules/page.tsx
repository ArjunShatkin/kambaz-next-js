"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";
import { BsGripVertical, BsCheck } from "react-icons/bs";
import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlsButton";
import LessonControlButtons from "./LessonControlsButton";
import * as coursesClient from "../../client";
import * as modulesClient from "./client";

type Lesson = {
  _id?: string;
  name: string;
  description?: string;
  module: string;
};

type Module = {
  _id?: string;
  course: string;
  name: string;
  description?: string;
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
  const [moduleName, setModuleName] = useState<string>("");
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [courseId]);

  const loadData = async () => {
    try {
      const [fetchedCourse, fetchedModules] = await Promise.all([
        coursesClient.getCourse(courseId!),
        modulesClient.getModulesForCourse(courseId!)
      ]);
      setCourse(fetchedCourse);
      setCourseModules(fetchedModules);
      setLoading(false);
    } catch (error) {
      console.error("Error loading data:", error);
      setLoading(false);
    }
  };

  const addModule = async () => {
    if (!moduleName.trim()) return;
    try {
      const newModule = await modulesClient.createModule(courseId!, {
        name: moduleName,
        course: courseId!,
        lessons: []
      });
      setCourseModules([...courseModules, newModule]);
      setModuleName("");
    } catch (error) {
      console.error("Error adding module:", error);
    }
  };

  const deleteModule = async (moduleId: string) => {
    try {
      await modulesClient.deleteModule(moduleId);
      setCourseModules(courseModules.filter((m) => m._id !== moduleId));
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  const updateModuleName = async (moduleId: string, newName: string) => {
    try {
      const moduleToUpdate = courseModules.find(m => m._id === moduleId);
      if (!moduleToUpdate) return;
      
      await modulesClient.updateModule(moduleId, { ...moduleToUpdate, name: newName });
      setCourseModules(
        courseModules.map((m) => (m._id === moduleId ? { ...m, name: newName } : m))
      );
      setEditingModuleId(null);
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };

  if (loading) return <div className="p-4">Loading modules...</div>;
  if (!course) return <p>Course not found</p>;

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
                <ModuleControlButtons />

                {editingModuleId === module._id && (
                  <Button
                    variant="success"
                    size="sm"
                    className="me-2"
                    onClick={() => updateModuleName(module._id!, module.name)}
                  >
                    <BsCheck />
                  </Button>
                )}

                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => setEditingModuleId(module._id!)}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  size="sm"
                  className="ms-2"
                  onClick={() => deleteModule(module._id!)}
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