import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      <div id="wd-dashboard-courses" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React JS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.jpg" width={200} height={150} alt="Node JS" />
            <div>
              <h5>CS2345 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend Development with Node</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/python.jpg" width={200} height={150} alt="Python" />
            <div>
              <h5>CS3456 Python</h5>
              <p className="wd-dashboard-course-title">Programming with Python</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image src="/images/datasci.jpg" width={200} height={150} alt="Data Science" />
            <div>
              <h5>CS4567 Data Science</h5>
              <p className="wd-dashboard-course-title">Data Analysis & Visualization</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/ml.jpg" width={200} height={150} alt="Machine Learning" />
            <div>
              <h5>CS5678 Machine Learning</h5>
              <p className="wd-dashboard-course-title">Intro to ML Models</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image src="/images/db.jpg" width={200} height={150} alt="Database" />
            <div>
              <h5>CS6789 Databases</h5>
              <p className="wd-dashboard-course-title">SQL and NoSQL Databases</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <Image src="/images/ai.jpg" width={200} height={150} alt="AI" />
            <div>
              <h5>CS7890 Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">Intro to AI Concepts</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
