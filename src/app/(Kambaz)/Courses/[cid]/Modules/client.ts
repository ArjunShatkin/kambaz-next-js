"use client";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;

export interface Lesson {
    _id?: string;
    name: string;
    description?: string;
    module: string;
  }
  
  export interface Module {
    _id?: string;
    name: string;
    description?: string;
    course: string;
    lessons?: Lesson[];
  }

export const getModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: string, module: Module) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

export const updateModule = async (moduleId: string, module: Module) => {
  const response = await axios.put(`${MODULES_API}/${moduleId}`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};