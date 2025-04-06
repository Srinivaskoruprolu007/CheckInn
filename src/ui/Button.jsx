import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    border-radius: var(--border-radius-sm);
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
    font-weight: 500;
    border-radius: var(--border-radius-md);
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    border-radius: var(--border-radius-lg);
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-0);
    background-color: var(--color-brand-600);
    box-shadow: var(--shadow-md);
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: var(--color-brand-700);
      transform: translateY(-2px);
    }

    &:active {
      background-color: var(--color-brand-800);
      transform: translateY(0);
    }
  `,
  secondary: css`
    color: var(--color-grey-700);
    background: var(--color-grey-100);
    border: 1px solid var(--color-grey-300);
    box-shadow: var(--shadow-sm);
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: var(--color-grey-200);
      transform: translateY(-2px);
    }

    &:active {
      background-color: var(--color-grey-300);
      transform: translateY(0);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
    box-shadow: var(--shadow-md);
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: var(--color-red-800);
      transform: translateY(-2px);
    }

    &:active {
      background-color: var(--color-red-900);
      transform: translateY(0);
    }
  `,
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--color-brand-200);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

Button.defaultProps = {
  size: "medium",
  variation: "primary",
};

export default Button;
