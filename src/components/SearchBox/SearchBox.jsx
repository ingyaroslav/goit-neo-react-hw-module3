import css from './SearchBox.module.css'

const SearchBox = ({handleSearchChange, value}) => {    
    return (
        <div className={css.searchform}>
            <label>
                Find contacts by name
            </label>
            <input
                type="text"
                name="filter"                
                onChange={handleSearchChange}
                className={css.input}
                value={value}
            />
        </div>
    )
}

export default SearchBox