import styled from "styled-components";

const ButtonText = styled.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease, opacity 0.3s ease;

  &:hover {
    color: var(--color-brand-700);
    transform: translateY(-2px);
  }

  &:active {
    color: var(--color-brand-800);
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid var(--color-brand-200);
    outline-offset: 2px;
  }

  &:disabled {
    color: var(--color-grey-400);
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
  }
`;

export default ButtonText;
