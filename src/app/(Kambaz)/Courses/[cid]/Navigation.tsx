"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !cid) return null;

  const courseId = cid as string; // assert type for TS
  const normalize = (path: string) => path.replace(/\/$/, "");

  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "", external: true, href: "https://piazza.com/" },
    { label: "Zoom", path: "", external: true, href: "https://www.zoom.com/" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "Grades", path: "Grades" },
    { label: "People", path: "People/Table" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const isExternal = link.external ?? false;
        const href = isExternal ? link.href! : `/Courses/${courseId}/${link.path}`;
        const isActive = !isExternal && normalize(pathname) === normalize(href);

        return isExternal ? (
          <a
            key={link.label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="list-group-item border-0 text-danger"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.label}
            href={href}
            className={`list-group-item border-0 ${
              isActive ? "active bg-white text-black" : "text-danger"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
