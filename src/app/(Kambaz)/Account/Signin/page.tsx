import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" style={{ padding: "2rem" }}>
      {/* Top header */}
      <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
        This website was designed by Arjun Shatkin for CS4550
      </h4>

      {/* GitHub link */}
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        <a
          href="https://github.com/ArjunShatkin/kambaz-next-js"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0366d6", textDecoration: "underline" }}
        >
          View Project on GitHub
        </a>
      </p>

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