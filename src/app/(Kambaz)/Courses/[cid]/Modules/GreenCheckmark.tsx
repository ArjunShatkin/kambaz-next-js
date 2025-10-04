import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span className="d-inline-flex align-items-center me-1">
      <FaCheckCircle className="text-success fs-5 me-1" />
      <FaCircle className="text-white fs-6" />
    </span>
  );
}
