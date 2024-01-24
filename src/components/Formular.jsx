import { useState } from 'react';

const Formular = () => {

    const [firstname, setFirstname] = useState("Noel Joel")
  return (
    <input type="text" name="firstname" />
  )
}

export default Formular