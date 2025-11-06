"use client";

import React from "react";
import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import type { RootState } from "../../../store";

export default function TodoForm() {
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todos.todo);

  const isEditing = todo.id !== "-1";

  return (
    <ListGroupItem>
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        placeholder="Enter todo..."
      />
      <div className="mt-2">
        <Button
          onClick={() => dispatch(addTodo(todo))}
          className="me-2"
          id="wd-add-todo-click"
          disabled={!todo.title.trim() || isEditing}
        >
          Add
        </Button>
        <Button
          onClick={() => dispatch(updateTodo(todo))}
          className="me-2"
          id="wd-update-todo-click"
          disabled={!todo.title.trim() || !isEditing}
        >
          Update
        </Button>
      </div>
    </ListGroupItem>
  );
}


