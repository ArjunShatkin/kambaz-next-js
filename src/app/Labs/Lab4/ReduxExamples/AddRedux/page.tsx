"use client";

import { Provider } from "react-redux";
import { store } from "@/app/Labs/store";
import AddRedux from "./AddRedux"; // your actual component with inputs

export default function AddReduxPage() {
  return (
    <Provider store={store}>
      <AddRedux />
    </Provider>
  );
}
