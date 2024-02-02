import Input from "./header/Input"

const SearchBar = () => {
  return (
    <div>
        <div className="mb-3">
            <Input 
                value=""
                onChange={() => null}
                placeholder="Search..."
            />
        </div>
    </div>
  )
}

export default SearchBar