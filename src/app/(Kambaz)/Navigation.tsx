"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid, LiaFlaskSolid } from "react-icons/lia";

export default function KambazNavigation() {
  const pathname = usePathname();

  // Make /Account the default screen
  const active = (path: string) => pathname === path;

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed top-0 bottom-0 d-none d-md-flex flex-column align-items-center bg-black text-white"
      style={{ width: 110 }}
    >
      {/* Northeastern Logo / External Link */}
      <ListGroupItem className="bg-black border-0 text-center">
        <a
          href="https://www.northeastern.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/NEUREDNOLATIN.svg"
            alt="Northeastern University"
            width="70"
          />
        </a>
      </ListGroupItem>

      {/* Account (white icon & text, black background) */}
      <ListGroupItem
        as={Link}
        href="/Account"
        id="wd-account-link"
        className={`d-flex flex-column align-items-center border-0 text-decoration-none ${
          active("/Account") ? "bg-black text-white" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser className="fs-1 mb-1 text-white" />
        Account
      </ListGroupItem>

      {/* Dashboard (white background, red text/icon) */}
      <ListGroupItem
        as={Link}
        href="/Dashboard"
        id="wd-dashboard-link"
        className={`d-flex flex-column align-items-center border-0 text-decoration-none ${
          active("/Dashboard") ? "bg-white text-danger" : "bg-white text-danger"
        }`}
      >
        <AiOutlineDashboard className="fs-1 mb-1 text-danger" />
        Dashboard
      </ListGroupItem>

      {/* Courses (black background, white text, red icon) */}
      <ListGroupItem
        as={Link}
        href="/Dashboard" // same as Dashboard
        id="wd-courses-link"
        className="d-flex flex-column align-items-center border-0 text-decoration-none bg-black text-white"
      >
        <LiaBookSolid className="fs-1 mb-1 text-danger" />
        Courses
      </ListGroupItem>

      {/* Calendar (black background, white text, red icon) */}
      <ListGroupItem
        as={Link}
        href="/Calendar"
        id="wd-calendar-link"
        className="d-flex flex-column align-items-center border-0 text-decoration-none bg-black text-white"
      >
        <IoCalendarOutline className="fs-1 mb-1 text-danger" />
        Calendar
      </ListGroupItem>

      {/* Inbox (black background, white text, red icon) */}
      <ListGroupItem
        as={Link}
        href="/Inbox"
        id="wd-inbox-link"
        className="d-flex flex-column align-items-center border-0 text-decoration-none bg-black text-white"
      >
        <FaInbox className="fs-1 mb-1 text-danger" />
        Inbox
      </ListGroupItem>

      {/* Labs (black background, white text, red icon) */}
      <ListGroupItem
        as={Link}
        href="/Labs"
        id="wd-labs-link"
        className="d-flex flex-column align-items-center border-0 text-decoration-none bg-black text-white"
      >
        <LiaFlaskSolid className="fs-1 mb-1 text-danger" />
        Labs
      </ListGroupItem>
    </ListGroup>
  );
}
