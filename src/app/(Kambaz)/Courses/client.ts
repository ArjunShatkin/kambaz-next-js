"use client";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

export interface Course {
  _id?: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description?: string;
}

export const getAllCourses = async () => {
  const response = await axios.get(COURSES_API);
  return response.data;
};

export const getCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}`);
  return response.data;
};

export const createCourse = async (course: Course) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};

export const updateCourse = async (courseId: string, course: Course) => {
  const response = await axios.put(`${COURSES_API}/${courseId}`, course);
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  const response = await axios.delete(`${COURSES_API}/${courseId}`);
  return response.data;
};
