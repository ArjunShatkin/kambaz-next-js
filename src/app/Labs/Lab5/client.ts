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

// Define the Todo type (ONLY ONCE with all properties)
export interface Todo {
  id: number;
  title: string;
  description?: string;  // Optional property
  due?: string;          // Optional property
  completed: boolean;
}

// Fetch welcome message
export const fetchWelcomeMessage = async (): Promise<string> => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;
const TODOS_API = `${HTTP_SERVER}/lab5/todos`;

// Fetch assignment object
export const fetchAssignment = async (): Promise<Assignment> => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data as Assignment;
};

// Update assignment title
export const updateTitle = async (title: string): Promise<Assignment> => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data as Assignment;
};

// Update assignment description
export const updateDescription = async (description: string): Promise<Assignment> => {
  const response = await axios.get(`${ASSIGNMENT_API}/description/${encodeURIComponent(description)}`);
  return response.data as Assignment;
};

// Fetch todos array
export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(`${TODOS_API}`);
  return response.data as Todo[];
};

// Remove todo
export const removeTodo = async (todo: Todo): Promise<Todo[]> => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

// Create new todo (GET method - returns all todos)
export const createNewTodo = async (): Promise<Todo[]> => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};

// Post new todo (POST method - returns only the new todo)
export const postNewTodo = async (todo: Todo): Promise<Todo> => {
  const response = await axios.post(`${TODOS_API}`, todo);
  return response.data;
};