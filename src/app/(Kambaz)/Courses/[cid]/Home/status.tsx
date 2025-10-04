"use client";

import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaBullhorn, FaChartLine, FaBell } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  const handleClick = (message: string) => alert(message);

  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>

      {/* Unpublish and Publish side by side */}
      <div className="d-flex mb-2">
        <div className="w-50 pe-1">
          <Button
            variant="secondary"
            size="lg"
            className="w-100 text-nowrap"
            onClick={() => handleClick("Unpublish clicked!")}
          >
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button
            variant="success"
            size="lg"
            className="w-100 text-nowrap"
            onClick={() => handleClick("Publish clicked!")}
          >
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </Button>
        </div>
      </div>

      {/* Other buttons stacked below */}
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        onClick={() => handleClick("Import Existing Content clicked!")}
      >
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        onClick={() => handleClick("Import From Commons clicked!")}
      >
        <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        onClick={() => handleClick("Choose Home Page clicked!")}
      >
        <FaBullhorn className="me-2 fs-5" />
        Choose Home Page
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        onClick={() => handleClick("View Course Stream clicked!")}
      >
        <FaChartLine className="me-2 fs-5" />
        View Course Stream
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        onClick={() => handleClick("New Announcement clicked!")}
      >
        <FaBullhorn className="me-2 fs-5" />
        New Announcement
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        onClick={() => handleClick("New Analytics clicked!")}
      >
        <FaChartLine className="me-2 fs-5" />
        New Analytics
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        onClick={() => handleClick("View Course Notifications clicked!")}
      >
        <FaBell className="me-2 fs-5" />
        View Course Notifications
      </Button>
    </div>
  );
}
