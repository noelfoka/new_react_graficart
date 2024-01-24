import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    firstName: "Noel",
    lastName: "NOMGNE FOKA",
    age: 15
  });

  const addCount = () => setCount(count + 1);

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={addCount}>increment</button>
      <p>Age de {person.firstName} {person.lastName}: {person.age}</p>
      <button type="button" onClick={ajouter}>Ajouter une année</button>
    </div>
  );
}

export default App
