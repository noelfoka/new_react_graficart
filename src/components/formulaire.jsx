import { useState } from "react";

function Formular() {

  const [firstName, setFirstName] = useState('Noel');

  const handleChange = (e) => {
    setFirstName(e.target.value);
  }

  const reset = () => {
    setFirstName('');
  }
  return (
    <form>
        <input type="text" name="firstName" value={firstName} onChange={handleChange} />{firstName}
        <button type="button" onClick={reset}>Reset</button>
       
    </form>
  );
}

export default Formular;