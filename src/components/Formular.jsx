import { useState } from 'react';

const Formular = () => {

    const [firstname, setFirstname] = useState("Noel Joel")
  return (
    <input type="text" name="firstname" value={firstname} onChange={handleChange} />
  )
}

export default Formular