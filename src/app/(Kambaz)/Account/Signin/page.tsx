import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input className="wd-username" placeholder="username" /> <br />
      <input
        className="wd-password"
        placeholder="password"
        type="password"
      />{" "}
      <br />
      {/* Navigate to Dashboard after signing in */}
      <Link id="wd-signin-btn" href="/Dashboard">
        Sign in
      </Link>{" "}
      <br />
      {/* Navigate to Signup screen */}
      <Link id="wd-signup-link" href="Signup">
        Sign up
      </Link>
    </div>
  );
}

