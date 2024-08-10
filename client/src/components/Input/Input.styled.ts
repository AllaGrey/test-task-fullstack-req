import styled from "styled-components";

type InputProps = {
  $error: boolean;
};

export const InputStyled = styled.input<InputProps>`
  width: 100%;
  min-width: 250px;
  height: 40px;
  border-radius: 8px;
  border: ${({ $error, theme }) =>
    $error ? `solid 2px ${theme.colors.errorColor}` : "none"};
  outline: ${({ theme }) => theme.colors.accentColor};
  padding: 10px;
`;
