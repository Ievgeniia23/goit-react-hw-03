import css from './SearchBox.module.css'

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={css.searchBoxWrapper}>
          <p className={css.SearchBoxText}>Find contacts by name</p>
          <input className={css.SearchBoxInput}
              type="text"
              value={filter}
              onChange={(e) => onFilter(e.target.value)}
          />
    </div>
  )
}

export default SearchBox

