// app/(Kambaz)/Account/AccountNavigation.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  return (
    <div
      id="wd-account-navigation"
      className="bg-light border-end vh-100 p-3"
      style={{ minWidth: "200px" }}
    >
      <h5 className="mb-4 text-secondary">Account</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-1">
          <Link
            href="/Account/Signin"
            className={`nav-link ${pathname === "/Account/Signin" ? "active text-white bg-primary rounded" : "text-dark"}`}
          >
            Sign In
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link
            href="/Account/Signup"
            className={`nav-link ${pathname === "/Account/Signup" ? "active text-white bg-primary rounded" : "text-dark"}`}
          >
            Sign Up
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link
            href="/Account/Profile"
            className={`nav-link ${pathname === "/Account/Profile" ? "active text-white bg-primary rounded" : "text-dark"}`}
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
