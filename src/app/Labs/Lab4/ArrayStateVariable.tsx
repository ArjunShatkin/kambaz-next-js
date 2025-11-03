import { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  // Add a random element to the array
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  // Delete an element by index
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="p-4">
      <h2>Array State Variable</h2>

      <button onClick={addElement} className="btn btn-primary mb-2">
        Add Element
      </button>

      <ul>
        {array.map((item, index) => (
          <li key={index} className="mb-1">
            {item}{" "}
            <button
              onClick={() => deleteElement(index)}
              className="btn btn-danger btn-sm ms-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
}
