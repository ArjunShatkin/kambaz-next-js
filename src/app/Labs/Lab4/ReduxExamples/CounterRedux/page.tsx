"use client";

import { Provider } from "react-redux";
import { store } from "@/app/Labs/store";
import CounterReduxComponent from "./CounterReduxComponent";

export default function CounterReduxPage() {
  return (
    <Provider store={store}>
      <CounterReduxComponent />
    </Provider>
  );
}
