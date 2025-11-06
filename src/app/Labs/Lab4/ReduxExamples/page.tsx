"use client";

import React from "react";
import { Provider, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { store, RootState } from "../../store";
import HelloRedux from "./HelloRedux/HelloRedux";
import CounterReduxComponent from "./CounterRedux/page";
import AddRedux from "./AddRedux/AddRedux";

export default function ReduxExamples() {
  return (
    <Provider store={store}>
      <ReduxExamplesContent />
    </Provider>
  );
}

// Separate component to use useSelector inside Provider
function ReduxExamplesContent() {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="p-4">
      <h2>Redux Examples</h2>

      {/* Display Redux todos */}
      <h4>Todos from Redux Store</h4>
      <ListGroup className="mb-4">
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>

      {/* Existing Redux example components */}
      <HelloRedux />
      <CounterReduxComponent />
      <AddRedux />
      <h2> Todo List in Lab 3 </h2>
    </div>
  );
}
