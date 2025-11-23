"use client";

import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "./client";

export default function WorkingWithArrays() {
  const API = `${process.env.NEXT_PUBLIC_HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState<client.Todo>({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const postTodo = async () => {
    const newTodo = await client.postNewTodo(todo);
    setTodo(newTodo);
  };

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* Get all todos */}
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      {/* Get todo by ID */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <div className="d-flex mb-2">
        <FormControl
          id="wd-todo-id"
          className="w-50 me-2"
          type="number"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
        />
        <a
          id="wd-retrieve-todo-by-id"
          className="btn btn-primary"
          href={`${API}/${todo.id}`}
        >
          Get Todo by ID
        </a>
      </div>
      <hr />

      {/* Filtered todos */}
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      {/* Create new todo */}
      <h3>Creating New Items in an Array</h3>
      <a
        id="wd-create-todo"
        className="btn btn-success me-2"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />

      {/* POST new todo */}
      <h3>Creating New Items in an Array Using POST</h3>
      <div className="mb-2">
        <FormControl
          className="mb-2"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          placeholder="Title"
        />
        <FormControl
          className="mb-2"
          as="textarea"
          rows={3}
          value={todo.description || ""}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          placeholder="Description"
        />
        <FormControl
          className="mb-2"
          type="date"
          value={todo.due}
          onChange={(e) => setTodo({ ...todo, due: e.target.value })}
        />
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
            id="wd-post-todo-completed"
          />
          <label
            className="form-check-label"
            htmlFor="wd-post-todo-completed"
          >
            Completed
          </label>
        </div>
        <Button
          id="wd-post-todo"
          className="btn btn-success"
          onClick={postTodo}
        >
          Post Todo
        </Button>
      </div>
      <hr />

      {/* Remove todo */}
      <h3>Removing from an Array</h3>
      <div className="d-flex mb-2">
        <FormControl
          className="w-50 me-2"
          type="number"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
        />
        <a
          id="wd-remove-todo"
          className="btn btn-primary"
          href={`${API}/${todo.id}/delete`}
        >
          Remove Todo with ID = {todo.id}
        </a>
      </div>
      <hr />

      {/* Update todo title */}
      <h3>Updating an Item in an Array</h3>
      <div className="d-flex mb-2">
        <FormControl
          className="w-25 me-2"
          type="number"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
        />
        <FormControl
          className="w-50 me-2"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <a
          id="wd-update-todo-title"
          className="btn btn-warning"
          href={`${API}/${todo.id}/title/${todo.title}`}
        >
          Update Todo
        </a>
      </div>
      <hr />

      {/* Update completed */}
      <h3>Updating Completed Property</h3>
      <div className="d-flex mb-2 align-items-center">
        <FormControl
          type="number"
          className="w-25 me-2"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
        />
        <div className="form-check me-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
            id="wd-todo-completed-checkbox"
          />
          <label
            className="form-check-label"
            htmlFor="wd-todo-completed-checkbox"
          >
            Completed
          </label>
        </div>
        <a
          id="wd-update-todo-completed"
          className="btn btn-warning"
          href={`${API}/${todo.id}/completed/${todo.completed}`}
        >
          Update Completed
        </a>
      </div>
      <hr />

      {/* Update description */}
      <h3>Updating Description</h3>
      <div className="d-flex mb-2">
        <FormControl
          type="number"
          className="w-25 me-2"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
        />
        <FormControl
          className="w-50 me-2"
          value={todo.description || ""}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          placeholder="Enter new description"
        />
        <a
          id="wd-update-todo-description"
          className="btn btn-warning"
          href={`${API}/${todo.id}/description/${encodeURIComponent(
            todo.description || ""
          )}`}
        >
          Update Description
        </a>
      </div>
      <hr />
    </div>
  );
}
