import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 });

  return (
    <div className="p-4">
      <h2>Object State Variables</h2>

      {/* Display raw JSON of the object */}
      <pre>{JSON.stringify(person, null, 2)}</pre>

      {/* Input for name */}
      <FormControl
        defaultValue={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        className="mb-2"
      />

      {/* Input for age */}
      <FormControl
        defaultValue={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) })
        }
      />

      <hr />
    </div>
  );
}

// Notes:
// - Declare and initialize object state variable with multiple fields
// - Display raw JSON
// - Initialize input field with an object's field value
// - Update field as user types: copy old object and override specific field with new value
