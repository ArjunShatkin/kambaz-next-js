// app/(Kambaz)/Account/Signup/page.tsx
"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div
      id="wd-signup-screen"
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
    >
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h1 className="text-center mb-4">Sign Up</h1>

        <Form>
          <Form.Group className="mb-3" controlId="wd-new-username">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-new-password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-confirm-password">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button
            id="wd-create-account-btn"
            variant="success"
            className="w-100 mb-3"
            as={Link}
            href="/Account/Profile"
          >
            Create Account
          </Button>

          <div className="text-center">
            <Link href="/Account/Signin">Already have an account? Sign in</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
