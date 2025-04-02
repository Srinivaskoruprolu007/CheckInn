import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const Filter = ({ filteredField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilteredValue = searchParams.get(filteredField) || options[0];
  const handleClick = (value) => {
    searchParams.set(filteredField, value);
    setSearchParams(searchParams);
  };
  return (
    <StyledFilter>
      {options &&
        options?.map((value) => (
          <FilterButton
            key={value}
            onClick={() => handleClick(value)}
            active={currentFilteredValue === value}
            disabled={currentFilteredValue === value}
          >
            {value.toUpperCase()}
          </FilterButton>
        ))}
    </StyledFilter>
  );
};

export default Filter;
