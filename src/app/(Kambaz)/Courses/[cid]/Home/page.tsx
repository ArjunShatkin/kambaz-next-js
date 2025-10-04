import Modules from "../Modules/page";
import CourseStatus from "./status";

export default function Home() {
  return (
    <div id="wd-courses" className="d-flex">
      {/* Main content */}
      <div className="flex-fill me-3">
        <Modules />
      </div>

      {/* Sidebar: visible only on extra-large screens */}
      <div className="d-none d-xl-block" style={{ width: "250px" }}>
        <CourseStatus />
      </div>
    </div>
  );
}
