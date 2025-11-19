"use client";

import React, { useState } from "react";
import { FormControl, FormCheck } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  // Assignment state
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  // Module state
  const [moduleObj, setModuleObj] = useState({
    id: "M01",
    name: "Intro to NodeJS",
    description: "Learn NodeJS basics",
    course: "CS3500",
  });

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* Assignment retrieval */}
      <h4>Retrieving Assignment</h4>
      <a className="btn btn-primary me-2" href={ASSIGNMENT_API_URL}>
        Get Assignment
      </a>
      <a className="btn btn-primary" href={`${ASSIGNMENT_API_URL}/title`}>
        Get Assignment Title
      </a>
      <hr />

      {/* Modify Assignment */}
      <h4>Modify Assignment</h4>
      <FormControl
        className="w-50 mb-2"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <a
        className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>

      <FormCheck
        type="checkbox"
        label="Completed"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <a
        className="btn btn-primary ms-2"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <hr />

      {/* Module retrieval */}
      <h4>Retrieving Module</h4>
      <a className="btn btn-primary me-2" href={MODULE_API_URL}>
        Get Module
      </a>
      <a className="btn btn-primary" href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <hr />

      {/* Modify Module */}
      <h4>Modify Module</h4>
      <FormControl
        className="w-50 mb-2"
        type="text"
        value={moduleObj.name}
        onChange={(e) => setModuleObj({ ...moduleObj, name: e.target.value })}
      />
      <a
        className="btn btn-primary me-2"
        href={`${MODULE_API_URL}/name/${moduleObj.name}`}
      >
        Update Module Name
      </a>

      <FormControl
        className="w-50 mb-2"
        type="text"
        value={moduleObj.description}
        onChange={(e) =>
          setModuleObj({ ...moduleObj, description: e.target.value })
        }
      />
      <a
        className="btn btn-primary"
        href={`${MODULE_API_URL}/description/${moduleObj.description}`}
      >
        Update Module Description
      </a>
      <hr />
    </div>
  );
}



