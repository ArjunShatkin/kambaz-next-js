// app/Labs/Lab5/client.ts
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

// Define the Assignment type
export interface Assignment {
  id: string;
  title: string;
  description: string;
  due: string;
  completed: boolean;
}

// Fetch welcome message
export const fetchWelcomeMessage = async (): Promise<string> => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;

// Fetch assignment object
export const fetchAssignment = async (): Promise<Assignment> => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data as Assignment; // type cast
};

// Update assignment title
export const updateTitle = async (title: string): Promise<Assignment> => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data as Assignment;
};

// Update assignment description (optional, if you want this too)
export const updateDescription = async (description: string): Promise<Assignment> => {
  const response = await axios.get(`${ASSIGNMENT_API}/description/${encodeURIComponent(description)}`);
  return response.data as Assignment;
};
