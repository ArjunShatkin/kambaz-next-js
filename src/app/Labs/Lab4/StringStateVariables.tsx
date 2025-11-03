import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");

  return (
    <div className="p-4">
      <h2>String State Variables</h2>
      <p>{firstName}</p>

      <FormControl
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <hr />
    </div>
  );
}
