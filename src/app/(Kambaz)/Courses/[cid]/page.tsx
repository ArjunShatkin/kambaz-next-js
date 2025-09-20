import { redirect } from "next/navigation";

interface CoursesPageProps {
  params: { cid: string };
}

export default function CoursesPage({ params }: CoursesPageProps) {
  redirect(`/Courses/${params.cid}/Home`);
  return null;
}
