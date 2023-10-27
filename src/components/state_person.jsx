import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({
    firstName: "Noel",
    lastName: "NOMGNE FOKA",
    age: 30
  });

  return (
    <div>
      <h1>Person</h1>
      <p>
        Age de {person.firstName} {person.lastName}: {person.age}
      </p>
      <button onClick={() => setPerson({...person, age: person.age + 1 })}>
        Gagner une année
      </button>
      <button onClick={() => setPerson({...person, age: person.age - 1 })}>
        Perdre une année
      </button>
    </div>
  );
}

export default Person;