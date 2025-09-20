"use client";

export default function Assignments() {
  const assignments = [
    {
      id: "123",
      title: "A1 - ENV + HTML",
      details:
        "Multiple Modules | Not Available Until May 1 at 12:00 p.m. | Due Date May 7 at 11:59 p.m. | 100 pts",
    },
    {
      id: "124",
      title: "A2 - CSS + Bootstrap",
      details:
        "Multiple Modules | Not Available Until May 8 at 12:00 p.m. | Due Date May 14 at 11:59 p.m. | 100 pts",
    },
    {
      id: "125",
      title: "A3 - Javascript + React",
      details:
        "Multiple Modules | Not Available Until May 15 at 12:00 p.m. | Due Date May 21 at 11:59 p.m. | 100 pts",
    },
  ];

  const handleAddGroup = () => alert("Add Group clicked!");
  const handleAddAssignment = () => alert("Add Assignment clicked!");
  const handleAssignmentClick = (title: string) =>
    alert(`${title} clicked!`);
  const handlePlusClick = () => alert("Plus button clicked!");

  return (
    <div id="wd-assignments">
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      />
      <button id="wd-add-assignment-group" onClick={handleAddGroup}>
        + Group
      </button>
      <button id="wd-add-assignment" onClick={handleAddAssignment}>
        + Assignment
      </button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total{" "}
        <button onClick={handlePlusClick}>+</button>
      </h3>

      <ul id="wd-assignment-list">
        {assignments.map((assignment) => (
          <li key={assignment.id} className="wd-assignment-list-item">
            <a
              href={`/Courses/1234/Assignments/${assignment.id}`}
              className="wd-assignment-link"
              onClick={() => handleAssignmentClick(assignment.title)}
            >
              {assignment.title}
            </a>
            <div
              className="wd-assignment-details"
              style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", color: "#555" }}
            >
              {assignment.details}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
