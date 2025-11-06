"use client";

import Link from "next/link";
import {store} from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
      <div id="wd-labs" className="container-fluid p-4">
        <h1>Labs - Arjun Shatkin</h1>
        <ul>
          <li>
            <Link href="/Labs/Lab1" id="wd-lab1-link">
              Lab 1: HTML Examples
            </Link>
          </li>
          <li>
            <Link href="/Labs/Lab2" id="wd-lab2-link">
              Lab 2: CSS Basics
            </Link>
          </li>
          <li>
            <Link href="/Labs/Lab3" id="wd-lab3-link">
              Lab 3: JavaScript Fundamentals
            </Link>
          </li>
          <li>
            <Link href="/" id="kambaz-link">
              Kambaz
            </Link>
          </li>
        </ul>
      </div>
    </Provider>
  );
}

