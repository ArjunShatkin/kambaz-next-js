"use client";

import * as db from "../../Database"; // adjust relative path
import { FaAlignJustify } from "react-icons/fa6";
import { useParams } from "next/navigation"; // Next.js 13 app router hook

type Course = {
  _id: string;
  name: string;
  // add other course properties if needed
};

export default function Courses() {
  const params = useParams(); // returns { cid: string }
  const { cid } = params;

  // Find course by _id
  const course = (db.courses as Course[]).find((course: Course) => course._id === cid);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course.name}
      </h2>

      
      ...
    </div>
  );
}
