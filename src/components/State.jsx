import { useState } from "react";

function State() {
  const [count, setcount] = useState(0);

  const handleSubmit = () => {
    setcount(count => count + 1)
  }

  const handleDecrement = () => {
    setcount(count => count - 1)
  }

  return (
    <>
      <p>Le compteur d'incrementation est à: {count}</p>
      <button onClick={handleSubmit}>Incrementer</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default State;