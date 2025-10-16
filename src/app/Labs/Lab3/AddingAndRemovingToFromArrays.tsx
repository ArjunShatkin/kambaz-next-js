export default function AddingAndRemovingToFromArrays() {
  const numberArray1 = [1, 2, 3, 4, 5];
  const stringArray1 = ["string1", "string2"];
  const todoArray = [
    <li key="1">Buy milk</li>,
    <li key="2">Feed the pets</li>
  ];

  // Mutate arrays
  numberArray1.push(6); // add new items
  stringArray1.push("string3");
  todoArray.push(<li key="3">Walk the dogs</li>);

  numberArray1.splice(2, 1); // remove 1 item starting at index 2
  stringArray1.splice(1, 1);

  return (
    <div id="wd-adding-removing-from-arrays">
      <h4>Add/remove to/from arrays</h4>
      <p>numberArray1: {numberArray1.join(", ")}</p>
      <p>stringArray1: {stringArray1}</p>
      <p>Todo list:</p>
      <ol>{todoArray}</ol>
      <hr />
    </div>
  );
}

  