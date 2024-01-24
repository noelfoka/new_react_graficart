import { useState } from 'react';

const Formular = () => {

  const [firstname, setFirstname] = useState("Noel Joel");

  const handleChange = (e) => {
    setFirstname(e.target.value);
  }
  return (
    <form>
        <input type="text" name="firstname" value={firstname} onChange={handleChange} />
        {firstname}
        <button type="button" onClick={reset}></button>
    </form>
  )
}

export default Formular