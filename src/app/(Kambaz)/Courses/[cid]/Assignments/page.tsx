"use client";

import { FaBook, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  const assignments = [
    {
      id: "123",
      title: "A1 - ENV + HTML",
      line1: "Multiple Modules | Not Available Until May 1 at 12:00 p.m.",
      line2: "Due Date May 7 at 11:59 p.m. | 100 pts",
    },
    {
      id: "124",
      title: "A2 - CSS + Bootstrap",
      line1: "Multiple Modules | Not Available Until May 8 at 12:00 p.m.",
      line2: "Due Date May 14 at 11:59 p.m. | 100 pts",
    },
    {
      id: "125",
      title: "A3 - Javascript + React",
      line1: "Multiple Modules | Not Available Until May 15 at 12:00 p.m.",
      line2: "Due Date May 21 at 11:59 p.m. | 100 pts",
    },
  ];

  const handleAddGroup = () => alert("Add Group clicked!");
  const handleAddAssignment = () => alert("Add Assignment clicked!");
  const handleAssignmentClick = (title: string) =>
    alert(`${title} clicked!`);

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
        <button
          className="btn btn-secondary me-2"
          onClick={handleAddGroup}
        >
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
            key={assignment.id}
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
                href={`/Courses/1234/Assignments/${assignment.id}`}
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


