"use client";

import React, { useEffect, useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "./client";

export default function WorkingWithObjectsAsynchronously() {
  // Default empty assignment
  const defaultAssignment: client.Assignment = {
    id: "",
    title: "",
    description: "",
    due: "",
    completed: false,
  };

  const [assignment, setAssignment] = useState<client.Assignment>(
    defaultAssignment
  );

  // Fetch assignment on component load
  const fetchAssignment = async () => {
    const data = await client.fetchAssignment();
    setAssignment(data);
  };

  // Update assignment title
  const updateTitle = async () => {
    const updated = await client.updateTitle(assignment.title);
    setAssignment(updated);
  };

  // Update assignment description
  const updateDescription = async () => {
    const updated = await client.updateDescription(assignment.description);
    setAssignment(updated);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>

      <h4>Assignment</h4>

      {/* Title input and update */}
      <FormControl
        defaultValue={assignment.title}
        className="mb-2"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <Button className="btn btn-primary mb-2" onClick={updateTitle}>
        Update Title
      </Button>

      {/* Description input and update */}
      <FormControl
        as="textarea"
        rows={3}
        defaultValue={assignment.description}
        className="mb-2"
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <Button className="btn btn-secondary mb-2" onClick={updateDescription}>
        Update Description
      </Button>

      {/* Due date */}
      <FormControl
        type="date"
        className="mb-2"
        value={assignment.due}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />

      {/* Completed checkbox */}
      <div className="form-check form-switch mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-completed"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="wd-completed">
          Completed
        </label>
      </div>

      {/* Display current assignment */}
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}
