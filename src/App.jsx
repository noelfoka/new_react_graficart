import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={addCount}>increment</button>
    </div>
  );
}

export default App
