import { useState } from 'react';

const Formular = () => {

  const [value, setValue] = useState('Jhon Doe')

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  console.log('render');

  return (
    <form onChange={handleChange}>
        <input type="text" name="firstname" value={value}  />
        <input type='checkbox' checcked={checked} onChange={toggleCheckbox} />
        <button type="button">Envoyer</button>
    </form>
  )
}

export default Formular