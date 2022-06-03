import { FilterStyled } from "./FilterStyled";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <FilterStyled>
      <label htmlFor="filter-id">Find contact by name:</label>
      <input
        id="filter-id"
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterStyled>
  );
};

export default Filter;
