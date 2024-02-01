import { useState } from 'react';

const Formular = () => {

  const [value, setValue] = useState('Jhon Doe')

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  }

  console.log('render');

  return (
    <form onChange={handleChange}>
        <textarea type="text" name="firstname" defaultValue={value}  />
        <input type='checkbox' checked={checked} onChange={toggleCheck} />
        <button type="button" disabled={!checked}>Envoyer</button>
    </form>
  )
}

export default Formular