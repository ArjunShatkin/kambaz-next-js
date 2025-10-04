"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import ModulesControls from "./ModuleControls";
import LessonControlButtons from "./LessonControlsButton";
import ModuleControlButtons from "./ModuleControlsButton";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br /><br /><br />

      <ListGroup className="rounded-0" id="wd-modules">
        {/* Module 1 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <span>
              <BsGripVertical className="me-2 fs-3" /> Week 1
            </span>
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> Introduction to the course
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development
              </span>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Module 2 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <span>
              <BsGripVertical className="me-2 fs-3" /> Week 2
            </span>
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> LESSON 1
              </span>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> LESSON 2
              </span>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Module 3 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <span>
              <BsGripVertical className="me-2 fs-3" /> Week 3
            </span>
            <ModuleControlButtons />
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
