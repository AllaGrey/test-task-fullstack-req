import styled from "styled-components";
import { theme } from "../../theme";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (${theme.media.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.errorColor};
  font-size: ${theme.fontSizes.xs};
`;
