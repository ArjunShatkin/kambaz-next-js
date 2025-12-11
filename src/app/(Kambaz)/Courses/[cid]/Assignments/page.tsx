"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBook, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import * as assignmentsClient from "./client";

type Assignment = {
  _id?: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableDate?: string;
  availableUntilDate?: string;
};

export default function Assignments() {
  const params = useParams();
  const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAssignments();
  }, [cid]);

  const loadAssignments = async () => {
    try {
      const fetchedAssignments = await assignmentsClient.getAssignmentsForCourse(cid!);
      setAssignments(fetchedAssignments);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load assignments:", err);
      setLoading(false);
    }
  };

  const handleAddAssignment = async () => {
    try {
      const newAssignment = await assignmentsClient.createAssignment(cid!, {
        title: "New Assignment",
        course: cid!,
        description: "New Assignment Description",
        points: 100,
        dueDate: new Date().toISOString().split("T")[0],
      });
      setAssignments([...assignments, newAssignment]);
    } catch (error) {
      console.error("Error creating assignment:", error);
    }
  };

  const handleDeleteAssignment = async (assignmentId: string) => {
    try {
      await assignmentsClient.deleteAssignment(assignmentId);
      setAssignments(assignments.filter((a) => a._id !== assignmentId));
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
  };

  if (loading) return <p className="p-4">Loading assignments...</p>;
  if (!assignments.length) return <p className="p-4">No assignments found for this course.</p>;

  return (
    <div id="wd-assignments" className="container mt-3">
      <div className="d-flex mb-3">
        <div className="input-group me-2 flex-fill">
          <span className="input-group-text bg-white border-secondary">
            <FaSearch />
          </span>
          <input type="text" className="form-control" placeholder="Search for Assignments" />
        </div>
        <button className="btn btn-secondary me-2">+ Group</button>
        <button className="btn btn-danger" onClick={handleAddAssignment}>
          + Assignment
        </button>
      </div>

      <h3 className="mb-3">ASSIGNMENTS 40% of Total</h3>

      <ul className="list-unstyled">
        {assignments.map((assignment) => (
          <li
            key={assignment._id}
            className="d-flex align-items-center mb-3 border border-secondary rounded"
            style={{ borderLeft: "5px solid green" }}
          >
            <div className="px-3 d-flex align-items-center">
              <FaBook className="fs-4 text-secondary" />
            </div>

            <div className="flex-fill py-2">
              <a
                href={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                className="fw-bold text-decoration-none text-dark"
              >
                {assignment.title}
              </a>

              <div className="text-muted small mt-1">
                <div>{assignment.description || "No description"}</div>
                <div>
                  Due: {assignment.dueDate || "No due date"} | Points: {assignment.points || 0}
                </div>
              </div>
            </div>

            <div className="px-3 d-flex align-items-center">
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => handleDeleteAssignment(assignment._id!)}
              >
                Delete
              </button>
              <IoEllipsisVertical className="fs-4 text-secondary" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
