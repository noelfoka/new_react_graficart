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
    </form>
  )
}

export default Formular