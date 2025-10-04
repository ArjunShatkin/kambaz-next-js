"use client";

import { useState, KeyboardEvent } from "react";
import { Form, Button, Badge } from "react-bootstrap";

export default function AssignmentEditor() {
  const [assignTo, setAssignTo] = useState<string[]>([]);
  const [currentEntry, setCurrentEntry] = useState("");

  const handleAddAssignTo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentEntry.trim() !== "") {
      e.preventDefault();
      setAssignTo([...assignTo, currentEntry.trim()]);
      setCurrentEntry("");
    }
  };

  const handleRemoveAssignTo = (index: number) => {
    setAssignTo(assignTo.filter((_, i) => i !== index));
  };

  const handleCancel = () => alert("Changes canceled!");
  const handleSave = () => alert("Changes saved!");

  return (
    <div id="wd-assignments-editor" className="p-4" style={{ maxWidth: "600px" }}>
      <h2>Edit Assignment</h2>

      {/* Assignment Name */}
      <div className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control id="wd-name" defaultValue="A1 - ENV + HTML" />
      </div>

      {/* Description */}
      <div className="mb-3">
        <Form.Label htmlFor="wd-description">Description</Form.Label>
        <Form.Control
          as="textarea"
          id="wd-description"
          rows={4}
          defaultValue="The assignment is available online. Submit a link to the landing page of the project."
        />
      </div>

      {/* Points & Group */}
      <div className="mb-3">
        <Form.Label htmlFor="wd-points">Points</Form.Label>
        <Form.Control id="wd-points" type="number" defaultValue={100} />
      </div>

      <div className="mb-3">
        <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
        <Form.Control id="wd-group" placeholder="e.g., Homework, Labs" />
      </div>

      {/* Display Grade As */}
      <div className="mb-3">
        <Form.Label htmlFor="wd-display-grade-as">Display Grade As</Form.Label>
        <Form.Select id="wd-display-grade-as">
          <option>Points</option>
          <option>Percentage</option>
        </Form.Select>
      </div>

      {/* Submission Type Section */}
      <div className="border p-3 mb-3">
        <h5>Submission Type</h5>
        <Form.Group className="mb-3" controlId="wd-submission-type">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select>
            <option>Online</option>
            <option>On Paper</option>
          </Form.Select>
        </Form.Group>

        <div className="mt-2">
          <h6>Online Entry Options</h6>
          <Form.Check id="wd-text-entry" label="Text Entry" />
          <Form.Check id="wd-website-url" label="Website URL" />
          <Form.Check id="wd-media-recordings" label="Media Recordings" />
          <Form.Check id="wd-student-annotation" label="Student Annotation" />
          <Form.Check id="wd-file-upload" label="File Upload" />
        </div>
      </div>

      {/* Assign To / Dates Section */}
      <div className="border p-3 mb-3">
        <h5>Assign & Dates</h5>

        {/* Assign To with multiple entries */}
        <div className="mb-3">
          <Form.Label htmlFor="wd-assign-to">Assign To</Form.Label>
          <Form.Control
            id="wd-assign-to"
            placeholder="Type student name and press Enter"
            value={currentEntry}
            onChange={(e) => setCurrentEntry(e.target.value)}
            onKeyDown={handleAddAssignTo}
          />
          <div className="mt-2">
            {assignTo.map((entry, index) => (
              <Badge
                key={index}
                bg="secondary"
                className="me-1"
                style={{ cursor: "pointer" }}
                onClick={() => handleRemoveAssignTo(index)}
              >
                {entry} ×
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-due-date">Due Date</Form.Label>
          <Form.Control id="wd-due-date" type="date" />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
          <Form.Control id="wd-available-from" type="date" />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
          <Form.Control id="wd-available-until" type="date" />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4">
        <Button variant="secondary" className="me-2" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
