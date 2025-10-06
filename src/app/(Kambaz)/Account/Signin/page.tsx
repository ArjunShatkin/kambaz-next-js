// app/(Kambaz)/Account/Signin/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  const router = useRouter();

  const handleSignIn = () => {
    // TODO: Add authentication logic here
    router.push("/Account/Profile");
  };

  return (
    <div
      id="wd-signin-screen"
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
    >
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h1 className="text-center mb-4">Sign In</h1>

        <Form>
          <Form.Group className="mb-3" controlId="wd-username">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          
          <Button
            id="wd-signin-btn"
            variant="primary"
            className="w-100 mb-3"
            onClick={handleSignIn}
          >
            Sign In
          </Button>

          <div className="text-center">
            <a id="wd-signup-link" href="/Account/Signup">
              Don’t have an account? Sign up
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}
