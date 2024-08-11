import styled from "styled-components";

export const RequestListStyled = styled.ol`
  width: 100%;
  height: fit-content;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.successColor};
`;
