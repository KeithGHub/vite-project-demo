import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppyList);

  return (
    <>
      {puppies.map((puppy) => (
        <div key={puppy.id}>
          <h1>{puppy.name}</h1>
          <p>{puppy.age}</p>
          <ol>
            <li>{puppy.email}</li>
          </ol>
        </div>
      ))}
    </>
  );
}

export default App;
