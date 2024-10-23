import { ButtonProps } from 'interfaces/ButtonProps'
import styled from 'styled-components'
import { colors } from 'styles/variablesCss'

export const Button = styled.button<ButtonProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $variant }) =>
    $variant === 'primary'
      ? colors.blue
      : $variant === 'secondary'
        ? 'transparent'
        : 'gray'};

  color: ${({ $variant }) =>
    $variant === 'primary'
      ? '#FFFFFF'
      : $variant === 'secondary'
        ? colors.blue
        : 'gray'};

  border-color: ${colors.blue};
  border-width: thin;
  border-style: solid;
`
