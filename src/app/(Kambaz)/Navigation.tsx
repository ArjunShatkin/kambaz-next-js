"use client";

import Link from "next/link";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid, LiaFlaskSolid } from "react-icons/lia";

export default function KambazNavigation() {
  const [activeLink, setActiveLink] = useState<string>("Dashboard"); // default active

  const links = [
    { label: "Account", href: "/Account", icon: FaRegCircleUser },
    { label: "Dashboard", href: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", href: "/Dashboard", icon: LiaBookSolid }, // same href
    { label: "Calendar", href: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", href: "/Inbox", icon: FaInbox },
    { label: "Labs", href: "/Labs", icon: LiaFlaskSolid },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed top-0 bottom-0 d-none d-md-flex flex-column align-items-center bg-black"
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

      {/* Navigation Links */}
      {links.map((link) => {
        const isActive = activeLink === link.label;
        const Icon = link.icon;

        return (
          <ListGroupItem
            key={link.label}
            as={Link}
            href={link.href}
            className={`d-flex flex-column align-items-center border-0 text-decoration-none ${
              isActive ? "bg-white" : "bg-black"
            }`}
            onClick={() => setActiveLink(link.label)}
          >
            <Icon className={`fs-1 mb-1 ${isActive ? "text-danger" : "text-danger"}`} />
            <span className={isActive ? "text-black" : "text-white"}>{link.label}</span>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}

