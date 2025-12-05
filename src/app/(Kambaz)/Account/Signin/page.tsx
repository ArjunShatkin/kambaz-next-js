// app/(Kambaz)/Account/Signin/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const signin = async () => {
    try {
      // Call the API
      await client.signin(credentials);
      
      // If successful, navigate to profile
      router.push("/Account/Profile");
    } catch (err) {
      console.error("Signin failed:", err);
      if (err instanceof Error) {
        setError(err.message || "Invalid credentials");
      } else if (typeof err === 'object' && err !== null && 'response' in err) {
        const axiosError = err as { response?: { data?: { message?: string } } };
        setError(axiosError.response?.data?.message || "Invalid credentials");
      } else {
        setError("Invalid credentials");
      }
    }
  };

  return (
    <div
      id="wd-signin-screen"
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
    >
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h1 className="text-center mb-4">Sign In</h1>

        <Form>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <Form.Group className="mb-3" controlId="wd-username">
            <Form.Control
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </Form.Group>

          <Button
            id="wd-signin-btn"
            variant="primary"
            className="w-100 mb-3"
            onClick={signin}
            type="button"
          >
            Sign In
          </Button>

          <div className="text-center">
            <Link id="wd-signup-link" href="/Account/Signup">
              Dont have an account? Sign up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}