const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={searchValue}
        onChange={evt => setSearchValue(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
