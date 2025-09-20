"use client";

export default function CourseStatus() {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <div id="wd-course-status" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <h2>Course Status</h2>

      {/* Unpublish and Publish side by side */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={() => handleClick("Unpublish clicked!")}>Unpublish</button>
        <button onClick={() => handleClick("Publish clicked!")}>Publish</button>
      </div>

      {/* Other buttons stacked below */}
      <button onClick={() => handleClick("Import Existing Content clicked!")}>Import Existing Content</button>
      <button onClick={() => handleClick("Import From Commons clicked!")}>Import From Commons</button>
      <button onClick={() => handleClick("Choose Home Page clicked!")}>Choose Home Page</button>
      <button onClick={() => handleClick("View Course Stream clicked!")}>View Course Stream</button>
      <button onClick={() => handleClick("New Announcement clicked!")}>New Announcement</button>
      <button onClick={() => handleClick("New Analytics clicked!")}>New Analytics</button>
      <button onClick={() => handleClick("View Course Notifications clicked!")}>View Course Notifications</button>
    </div>
  );
}
