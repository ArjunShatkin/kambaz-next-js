import { BsPlus } from "react-icons/bs";
import LessonControlButtons from "./LessonControlsButton";

export default function ModuleControlButtons() {
  return (
    <div className="d-flex align-items-center">
      <LessonControlButtons />
      <BsPlus className="ms-2 fs-4 text-primary" />
    </div>
  );
}
