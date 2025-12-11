"use client";

import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import { FaAlignJustify } from "react-icons/fa6";
import { useParams } from "next/navigation";

type Course = {
  _id: string;
  name: string;
  number: string;
  description?: string;
};

export default function Courses() {
  const params = useParams();
  const { cid } = params;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const fetchedCourse = await coursesClient.getCourse(cid as string);
        setCourse(fetchedCourse);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course:", error);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [cid]);

  if (loading) {
    return <div className="p-4">Loading course...</div>;
  }

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