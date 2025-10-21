"use client";

import { useState, KeyboardEvent } from "react";
import { Form, Button, Badge } from "react-bootstrap";
import Link from "next/link";
import { useParams } from "next/navigation";  
import * as db from "@/app/(Kambaz)/Database";

type Assignment = {
  _id: string;
  course: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
};

export default function AssignmentEditor() {
  const params = useParams();
  const courseId = params.cid;
  const assignmentId = params.aid;

  const [assignTo, setAssignTo] = useState<string[]>([]);
  const [currentEntry, setCurrentEntry] = useState("");

  const assigneditor = db.assigneditor as Assignment[];

  const assignment = assigneditor.find(
    (a) => a._id === assignmentId && a.course === courseId
  );

  if (!assignment) {
    return <div className="p-4">Assignment not found.</div>;
  }

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

  return (
    <div id="wd-assignments-editor" className="p-4" style={{ maxWidth: "600px" }}>
      <h2>Edit Assignment</h2>
      <div className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control id="wd-name" defaultValue={assignment.title} />
      </div>
      <div className="mb-3">
        <Form.Label htmlFor="wd-description">Description</Form.Label>
        <Form.Control as="textarea" id="wd-description" rows={4} defaultValue={assignment.description} />
      </div>
      <div className="mb-3">
        <Form.Label htmlFor="wd-points">Points</Form.Label>
        <Form.Control id="wd-points" type="number" defaultValue={assignment.points} />
      </div>
      <div className="border p-3 mb-3">
        <h5>Submission Type</h5>
        <Form.Group className="mb-3" controlId="wd-submission-type">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select defaultValue="Online">
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
      <div className="border p-3 mb-3">
        <h5>Assign & Dates</h5>
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
              <Badge key={index} bg="secondary" className="me-1" style={{ cursor: "pointer" }} onClick={() => handleRemoveAssignTo(index)}>
                {entry} ×
              </Badge>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="wd-due-date">Due Date</Form.Label>
          <Form.Control id="wd-due-date" type="date" defaultValue={assignment.dueDate} />
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
          <Form.Control id="wd-available-from" type="date" defaultValue={assignment.availableFrom} />
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
          <Form.Control id="wd-available-until" type="date" defaultValue={assignment.availableUntil} />
        </div>
      </div>
      <div className="mt-4">
        <Link href={`/Courses/${courseId}/Assignments`}><Button variant="secondary" className="me-2">Cancel</Button></Link>
        <Link href={`/Courses/${courseId}/Assignments`}><Button variant="primary">Save</Button></Link>
      </div>
    </div>
  );
}
