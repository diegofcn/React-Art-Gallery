import { SearchInput } from "evergreen-ui";

function Search({ query, onChange }) {
  return (
    <SearchInput
      placeholder="What are you looking for?"
      width="100%"
      autoFocus
      value={query}
      onChange={onChange}
    />
  );
}

export default Search;