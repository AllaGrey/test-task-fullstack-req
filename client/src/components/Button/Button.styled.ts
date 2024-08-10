import styled from "styled-components";

type ButtonProps = {
  disabled?: boolean;
};

export const ButtonStyled = styled.button<ButtonProps>`
  min-width: 100px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabledBg : theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: ${({ theme }) => theme.boxShadow.btn};
  transition: ${({ theme }) => theme.transition};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.disabledBg : theme.colors.successColor};
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.textColor : theme.colors.mainColor};
    box-shadow: ${({ theme }) => theme.boxShadow.btnHover};
  }
`;
