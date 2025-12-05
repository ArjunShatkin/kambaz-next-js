"use client";
import { useEffect } from "react";
import * as client from "../client";

export default function Session({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await client.profile();
        console.log("Current user:", currentUser);
      } catch (err) {
        console.error("No user logged in:", err);
      }
    };
    fetchProfile();
  }, []);

  return <>{children}</>;
}