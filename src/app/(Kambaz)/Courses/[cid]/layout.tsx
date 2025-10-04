import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course {cid}
      </h2>
      <hr />

      <div className="d-flex">
        {/* Left sidebar: hidden on small screens */}
        <div className="d-none d-md-block" style={{ width: "200px" }}>
          <CourseNavigation />
        </div>

        {/* Main content area */}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}


