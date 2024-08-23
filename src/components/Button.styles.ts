import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  danger: 'bg-red-500 text-white',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;

  ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`