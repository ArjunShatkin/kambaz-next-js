"use client";

export default function AssignmentEditor() {
  const handleCancel = () => alert("Changes canceled!");
  const handleSave = () => alert("Changes saved!");

  return (
    <div id="wd-assignments-editor" style={{ padding: "1rem", maxWidth: "600px" }}>
      {/* Assignment Name */}
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br /><br />

      {/* Description */}
      <label htmlFor="wd-description">Description</label>
      <textarea id="wd-description" rows={4}>
The assignment is available online. Submit a link to the landing page of the project.
      </textarea>
      <br /><br />

      {/* Points and other fields */}
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} type="number" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-group">Group</label>
            </td>
            <td>
              <input id="wd-group" type="checkbox" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Points</option>
                <option>Percentage</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-text-entry">Text Entry</label>
            </td>
            <td>
              <input id="wd-text-entry" type="checkbox" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-website-url">Website URL</label>
            </td>
            <td>
              <input id="wd-website-url" type="checkbox" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </td>
            <td>
              <input id="wd-media-recordings" type="checkbox" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </td>
            <td>
              <input id="wd-student-annotation" type="checkbox" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
            <td>
              <input id="wd-file-upload" type="checkbox" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" placeholder="All Students" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Buttons at the bottom */}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleCancel} style={{ marginRight: "1rem" }}>
          Cancel
        </button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
