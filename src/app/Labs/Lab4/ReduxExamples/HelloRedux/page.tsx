"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/app/Labs/store";

export default function HelloRedux() {
  const message = useSelector((state: RootState) => state.hello.message);

  return (
    <div id="wd-hello-redux">
      <h3>Hello Redux</h3>
      <h4>{message}</h4>
      <hr />
    </div>
  );
}