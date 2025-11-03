"use client";

import { useState } from "react";

export default function Counter() {
  // Create and initialize state variable
  const [count, setCount] = useState(7);

  console.log(count);

  return (
    <div id="wd-counter-use-state" className="p-4">
      <h2>Counter: {count}</h2>

      {/* Increment count */}
      <button
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        className="btn btn-success me-2"
      >
        Up
      </button>

      {/* Decrement count */}
      <button
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        className="btn btn-danger"
      >
        Down
      </button>

      <hr />
    </div>
  );
}

// import useState
// create and initialize state variable
// render state variable
// handle events and update state variable with mutator
// now updates to the state variable update the DOM as desired
