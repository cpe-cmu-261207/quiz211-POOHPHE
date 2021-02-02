import { useEffect, useState } from "react";
import Tab from "./component";

function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Pherawat Wongsawad 620610802",
      gender: "male",
      age: "20"
    }
  ];
  const [id, setId] = useState(620610802);

  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}
      {persons.map((i) => {
        return <Tab i={i} />;
      })}

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>{id}</p>
      <button
        onClick={() => {
          let num = id - 1;
          setId(num);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          let num = 620610802;
          setId(num);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          let num = id + 1;
          setId(num);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
