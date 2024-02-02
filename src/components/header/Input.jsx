/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @returns {JSX.Element}
 */
const Input = ({placeholder, value, onChange}) => {
  return (
    <input 
        type='text' 
        className='form-control'
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input