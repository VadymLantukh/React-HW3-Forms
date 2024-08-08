import css from './SearchBox.module.css'

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className={css.boxSeacrh}>
      <p className={css.searchPara}>Find contacts by name</p>
      <input
        type="text"
        value={searchValue}
        onChange={evt => setSearchValue(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
