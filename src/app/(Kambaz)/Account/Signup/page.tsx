// app/(Kambaz)/Account/Signup/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const signup = async () => {
    try {
      // Validate passwords match
      if (user.password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      // Call the API
      await client.signup(user);
      
      // If successful, navigate to profile
      router.push("/Account/Profile");
    } catch (err) {
      console.error("Signup failed:", err);
      if (err instanceof Error) {
        setError(err.message || "Signup failed");
      } else if (typeof err === 'object' && err !== null && 'response' in err) {
        const axiosError = err as { response?: { data?: { message?: string } } };
        setError(axiosError.response?.data?.message || "Signup failed");
      } else {
        setError("Signup failed");
      }
    }
  };

  return (
    <div
      id="wd-signup-screen"
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
    >
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h1 className="text-center mb-4">Sign Up</h1>

        <Form>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <Form.Group className="mb-3" controlId="wd-new-username">
            <Form.Control
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-new-password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-confirm-password">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            id="wd-create-account-btn"
            variant="success"
            className="w-100 mb-3"
            onClick={signup}
            type="button"
          >
            Create Account
          </Button>

          <div className="text-center">
            <Link id="wd-signin-link" href="/Account/Signin">
              Already have an account? Sign in
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}