import Input from "./header/Input"

const SearchBar = () => {
  return (
    <div>
        <div className="mb-3">
            <Input 
                value=''
                onChange={() => null}
                placeHolder='Search...'
            />
        </div>
    </div>
  )
}

export default SearchBar