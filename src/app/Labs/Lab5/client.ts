
import axios from "axios";


// Use the proper environment variable for Next.js
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

// Fetch welcome message
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

// Base API endpoint for the assignment object
const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;

// Fetch the assignment object
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};

// Update the title of the assignment
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${encodeURIComponent(title)}`);
  return response.data;
};
