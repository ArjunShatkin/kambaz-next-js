"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();

  // Remove trailing slash for comparison
  const normalize = (path: string) => path.replace(/\/$/, "");

  const links = [
    { href: "/Courses/1234/Home", label: "Home" },
    { href: "/Courses/1234/Modules", label: "Modules" },
    { href: "https://piazza.com/", label: "Piazza", external: true },
    { href: "https://www.zoom.com/", label: "Zoom", external: true },
    { href: "/Courses/1234/Assignments", label: "Assignments" },
    { href: "/Courses/1234/Quizzes", label: "Quizzes" },
    { href: "/Courses/1234/Grades", label: "Grades" },
    { href: "/Courses/1234/People/Table", label: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) =>
        link.external ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="list-group-item border-0 text-danger"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className={`list-group-item border-0 ${
              normalize(pathname) === normalize(link.href)
                ? "active"
                : link.label === "Home"
                ? "text-red"
                : "text-danger"
            }`}
          >
            {link.label}
          </Link>
        )
      )}
    </div>
  );
}
