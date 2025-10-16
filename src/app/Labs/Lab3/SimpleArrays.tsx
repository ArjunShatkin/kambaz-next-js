export default function SimpleArrays() {
  const functionScoped = 2;
  const blockScoped = 5;
  const constant1 = functionScoped - blockScoped;

  const numberArray1 = [1, 2, 3, 4, 5];
  const stringArray1 = ["string1", "string2"];
  const htmlArray1 = [
    <li key="1">Buy milk</li>,
    <li key="2">Feed the pets</li>,
  ];
  const variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];

  return (
    <div id="wd-simple-arrays">
      <h4>Simple Arrays</h4>
      <p>numberArray1: {numberArray1.join(", ")}</p>
      <p>stringArray1: {stringArray1.join(", ")}</p>
      <p>variableArray1: [
        {functionScoped}, {blockScoped}, {constant1}, [{numberArray1.join(", ")}], [{stringArray1.join(", ")}]
      ]</p>
      <p>Todo list:</p>
      <ol>{htmlArray1}</ol>
      <hr />
    </div>
  );
}

  
  