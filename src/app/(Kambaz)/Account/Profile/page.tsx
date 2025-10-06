"use client";

import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/Account/Signin");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Add save logic here
    alert("Profile changes saved!");
  };

  return (
    <div
      id="wd-profile-screen"
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
    >
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Profile</h1>

        <Form onSubmit={handleSave}>
          <Form.Control
            type="text"
            defaultValue="student123"
            className="mb-3"
            placeholder="Username"
          />

          <Form.Control
            type="password"
            defaultValue="••••••••"
            className="mb-3"
            placeholder="Password"
          />

          <Form.Control
            type="text"
            defaultValue="Alice"
            className="mb-3"
            placeholder="First Name"
          />

          <Form.Control
            type="text"
            defaultValue="Wonderland"
            className="mb-3"
            placeholder="Last Name"
          />

          <Form.Control
            type="date"
            className="mb-3"
            placeholder="Birthday"
          />

          <Form.Control
            type="email"
            defaultValue="student@northeastern.edu"
            className="mb-3"
            placeholder="Email"
          />

          <Form.Control
            type="text"
            defaultValue="user"
            className="mb-3"
            placeholder="Box"
          />

          <Button variant="primary" className="w-100 mb-2" type="submit">
            Save Changes
          </Button>

          <Button
            variant="outline-danger"
            className="w-100"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </Form>
      </div>
    </div>
  );
}


