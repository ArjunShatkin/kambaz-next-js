import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4">
      <h3>React Icons Sampler</h3>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <VscAccount style={{ fontSize: "1.5rem" }} />
        <AiOutlineDashboard style={{ fontSize: "1.5rem" }} />
        <FaBookBible style={{ fontSize: "1.5rem" }} />
        <FaCalendar style={{ fontSize: "1.5rem" }} />
        <FaEnvelopeOpenText style={{ fontSize: "1.5rem" }} />
        <FaRegClock style={{ fontSize: "1.5rem" }} />
      </div>
    </div>
  );
}
