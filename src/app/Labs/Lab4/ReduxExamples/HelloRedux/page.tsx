"use client";

import { Provider } from "react-redux";
import { store } from "@/app/Labs/store";
import HelloRedux from "./HelloRedux";

export default function HelloReduxPage() {
  return (
    <Provider store={store}>
      <HelloRedux />
    </Provider>
  );
}
