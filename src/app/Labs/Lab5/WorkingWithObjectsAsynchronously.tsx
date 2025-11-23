"use client";

import React, { useEffect, useState } from "react";
import { FormControl, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import * as client from "./client";

export default function WorkingWithObjectsAndArraysAsynchronously() {
  // Default empty assignment
  const defaultAssignment: client.Assignment = {
    id: "",
    title: "",
    description: "",
    due: "",
    completed: false,
  };

  const [assignment, setAssignment] = useState<client.Assignment>(
    defaultAssignment
  );
  const [todos, setTodos] = useState<client.Todo[]>([]);

  // Fetch assignment on component load
  const fetchAssignment = async () => {
    const data = await client.fetchAssignment();
    setAssignment(data);
  };

  // Fetch todos on component load
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  // Remove todo
  const removeTodo = async (todo: client.Todo) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };

  // Create new todo (GET method - returns all todos)
  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };

  // Post new todo (POST method - returns only the new todo)
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ 
      id: 0,
      title: "New Posted Todo", 
      completed: false 
    });
    setTodos([...todos, newTodo]);
  };

  // Update assignment title
  const updateTitle = async () => {
    const updated = await client.updateTitle(assignment.title);
    setAssignment(updated);
  };

  // Update assignment description
  const updateDescription = async () => {
    const updated = await client.updateDescription(assignment.description);
    setAssignment(updated);
  };

  useEffect(() => {
    fetchAssignment();
    fetchTodos();
  }, []);

  return (
    <div>
      <div id="wd-asynchronous-objects">
        <h3>Working with Objects Asynchronously</h3>

        <h4>Assignment</h4>

        {/* Title input and update */}
        <FormControl
          defaultValue={assignment.title}
          className="mb-2"
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
        <Button className="btn btn-primary mb-2" onClick={updateTitle}>
          Update Title
        </Button>

        {/* Description input and update */}
        <FormControl
          as="textarea"
          rows={3}
          defaultValue={assignment.description}
          className="mb-2"
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
        <Button className="btn btn-secondary mb-2" onClick={updateDescription}>
          Update Description
        </Button>

        <FormControl
          type="date"
          className="mb-2"
          value={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
        />

        {/* Completed checkbox */}
        <div className="form-check form-switch mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-completed"
            checked={assignment.completed}
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })
            }
          />
          <label className="form-check-label" htmlFor="wd-completed">
            Completed
          </label>
        </div>

        <pre>{JSON.stringify(assignment, null, 2)}</pre>
        <hr />
      </div>

      <div id="wd-asynchronous-arrays">
        <h3>Working with Arrays Asynchronously</h3>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">Todos</h4>
          <div className="d-flex gap-3">
            <FaPlusCircle 
              onClick={postNewTodo} 
              className="text-primary fs-3" 
              id="wd-post-todo"
              style={{ cursor: 'pointer' }}
            />
            <FaPlusCircle 
              onClick={createNewTodo} 
              className="text-success fs-3" 
              id="wd-create-todo"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <ListGroup>
          {todos.map((todo) => (
            <ListGroupItem key={todo.id}>
              <FaTrash 
                onClick={() => removeTodo(todo)}
                className="text-danger float-end mt-1" 
                id="wd-remove-todo"
              />
              <input
                type="checkbox"
                className="form-check-input me-2"
                defaultChecked={todo.completed}
              />
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
        <hr />
      </div>
    </div>
  );
}