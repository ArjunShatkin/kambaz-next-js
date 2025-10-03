// src/app/(Kambaz)/page.tsx
import { redirect } from "next/navigation";

export default function Kambaz() {
  // Redirect immediately when this page is accessed
  redirect("/Account/Signin");

  // You must still return something (even null) for the component
  return null;
}