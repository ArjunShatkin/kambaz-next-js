// app/(Kambaz)/Account/Profile/page.tsx
"use client";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function Profile() {
  return (
    <div
      id="wd-profile-screen"
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
    >
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Profile</h1>

        <Form>
          <Form.Group className="mb-3" controlId="wd-profile-username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" defaultValue="student123" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-profile-email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" defaultValue="student@northeastern.edu" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-profile-password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" defaultValue="••••••••" />
          </Form.Group>

          <Button variant="primary" className="w-100 mb-2">
            Save Changes
          </Button>

          <Button variant="outline-danger" className="w-100" as={Link} href="/Account/Signin">
            Sign Out
          </Button>
        </Form>
      </div>
    </div>
  );
}

