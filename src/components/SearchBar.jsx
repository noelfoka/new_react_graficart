import Input from "./header/Input"
import { Checkbox } from './header/Checkbox';

const SearchBar = () => {
  return (
    <div>
        <div className="mb-3">
            <Input 
                value=""
                onChange={() => null}
                placeholder="Search..."
            />
            <Checkbox 
              checked={false}
              onChange={() => null}
              label="N'afficher que les produits en stock..."
            />
        </div>
    </div>
  )
}

export default SearchBar