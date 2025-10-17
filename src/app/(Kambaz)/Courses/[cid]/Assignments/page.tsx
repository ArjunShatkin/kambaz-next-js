"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBook, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

type Assignment = {
  _id: string;
  title: string;
  course: string; // course _id
  line1: string;
  line2: string;
};

export default function Assignments() {
  const params = useParams();
  const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid; // ensure string
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const db = await import("../../../Database/assignments.json");
        const allAssignments: Assignment[] = db.default || db;

        // Filter assignments for current course
        const filtered = allAssignments.filter((a) => a.course === cid);
        setAssignments(filtered);
      } catch (err) {
        console.error("Failed to load assignments:", err);
      } finally {
        setLoading(false);
      }
    }
    if (cid) loadData();
  }, [cid]);

  const handleAddGroup = () => alert("Add Group clicked!");
  const handleAddAssignment = () => alert("Add Assignment clicked!");
  const handleAssignmentClick = (title: string) => alert(`${title} clicked!`);

  if (loading) return <p>Loading assignments...</p>;
  if (!assignments.length) return <p>No assignments found for this course.</p>;

  return (
    <div id="wd-assignments" className="container mt-3">
      {/* Top controls */}
      <div className="d-flex mb-3">
        <div className="input-group me-2 flex-fill">
          <span className="input-group-text bg-white border-secondary">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <button className="btn btn-secondary me-2" onClick={handleAddGroup}>
          + Group
        </button>
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
            {/* Book Icon */}
            <div className="px-3 d-flex align-items-center">
              <FaBook className="fs-4 text-secondary" />
            </div>

            {/* Assignment info */}
            <div className="flex-fill py-2">
              <a
                href={`/Courses/${assignment.course}/Assignments/${assignment._id}`}
                className="fw-bold text-decoration-none text-dark"
                onClick={() => handleAssignmentClick(assignment.title)}
              >
                {assignment.title}
              </a>
              <div className="text-muted small mt-1">
                <div>{assignment.line1}</div>
                <div>{assignment.line2}</div>
              </div>
            </div>

            {/* Options bar */}
            <div className="px-3">
              <IoEllipsisVertical className="fs-4 text-secondary" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
