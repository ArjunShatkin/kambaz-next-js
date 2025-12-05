"use client";

import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER"
  });
  const [error, setError] = useState("");
  const router = useRouter();

  // Load profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await client.profile();
        if (userProfile) {
          // Ensure all fields have default values to avoid controlled/uncontrolled input warnings
          setProfile({
            _id: userProfile._id || "",
            username: userProfile.username || "",
            password: userProfile.password || "",
            firstName: userProfile.firstName || "",
            lastName: userProfile.lastName || "",
            dob: userProfile.dob || "",
            email: userProfile.email || "",
            role: userProfile.role || "USER"
          });
        } else {
          router.push("/Account/Signin");
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        router.push("/Account/Signin");
      }
    };
    fetchProfile();
  }, [router]);

  const updateProfile = async () => {
    try {
      await client.updateUser(profile);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      if (err instanceof Error) {
        setError(err.message || "Failed to update profile");
      } else if (typeof err === 'object' && err !== null && 'response' in err) {
        const axiosError = err as { response?: { data?: { message?: string } } };
        setError(axiosError.response?.data?.message || "Failed to update profile");
      } else {
        setError("Failed to update profile");
      }
    }
  };

  const signout = async () => {
    await client.signout();
    router.push("/Account/Signin");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile();
  };

  return (
    <div
      id="wd-profile-screen"
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
    >
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Profile</h1>

        <Form onSubmit={handleSave}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <Form.Control
            type="text"
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            className="mb-3"
            placeholder="Username"
          />

          <Form.Control
            type="password"
            value={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            className="mb-3"
            placeholder="Password"
          />

          <Form.Control
            type="text"
            value={profile.firstName}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            className="mb-3"
            placeholder="First Name"
          />

          <Form.Control
            type="text"
            value={profile.lastName}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            className="mb-3"
            placeholder="Last Name"
          />

          <Form.Control
            type="date"
            value={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            className="mb-3"
            placeholder="Birthday"
          />

          <Form.Control
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="mb-3"
            placeholder="Email"
          />

          <Form.Control
            type="text"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="mb-3"
            placeholder="Role"
          />

          <Button variant="primary" className="w-100 mb-2" type="submit">
            Save Changes
          </Button>

          <Button
            variant="danger"
            className="w-100"
            onClick={signout}
            type="button"
          >
            Sign out
          </Button>
        </Form>
      </div>
    </div>
  );
}