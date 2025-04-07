import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.6rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease, opacity 0.2s ease;

  &:hover {
    background-color: var(--color-grey-200);
    transform: scale(1.1);
  }

  &:active {
    background-color: var(--color-grey-300);
    transform: scale(1);
  }

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
