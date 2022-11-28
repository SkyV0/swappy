import SearchBarProps from '../src/constants/SearchBarProps';

export const SearchBar: FC<SearchBarProps> = ({onChange, filter, setFilter}) => {
    return (
        <div className="background-color-black height-100 width-100">
            <div className="height-100 width-100">
            <input
                type="text"
                placeholder="Search Planets"
                value={filter}
                onChange={(e) => {
                    setFilter(e.target.value)
                }}
            />
        </div>
        </div>
    )
}
    
export default SearchBar;