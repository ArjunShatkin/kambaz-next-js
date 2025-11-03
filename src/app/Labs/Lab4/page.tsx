"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";

export default function Lab4() {
  // Callback function to be passed as a prop
  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab4" className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lab 4: Click Event Example</h1>

      {/* Components demonstrating event handling */}
      <ClickEvent />
      <PassingDataOnEvent />

      <hr />

      {/* Passing function as a prop example */}
      <div id="wd-passing-functions">
        <h2>Lab 4: Passing Functions</h2>
        <PassingFunctions theFunction={sayHello} />
      </div>
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />

    </div>
  );
}

// import the component
// implement callback function
// pass callback function as a parameter
