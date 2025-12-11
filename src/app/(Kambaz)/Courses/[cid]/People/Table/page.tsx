"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as enrollmentsClient from "./client";

interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob?: string;
  role: string;
  loginId?: string;
  section?: string;
  lastActivity?: string;
  totalActivity?: string;
}

export default function PeopleTable() {
  const params = useParams();
  const cid = Array.isArray(params?.cid) ? params.cid[0] : params?.cid;
  const [enrolledUsers, setEnrolledUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEnrolledUsers();
  }, [cid]);

  const loadEnrolledUsers = async () => {
    try {
      const users = await enrollmentsClient.getUsersForCourse(cid!);
      setEnrolledUsers(users);
      setLoading(false);
    } catch (error) {
      console.error("Error loading enrolled users:", error);
      setLoading(false);
    }
  };

  if (loading) return <div className="p-4">Loading people...</div>;
  if (!enrolledUsers.length) return <div className="p-4">No users enrolled in this course.</div>;

  return (
    <div id="wd-people-table" className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId || 'N/A'}</td>
              <td className="wd-section">{user.section || 'N/A'}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity || 'N/A'}</td>
              <td className="wd-total-activity">{user.totalActivity || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}