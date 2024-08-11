import styled from "styled-components";

export const RequestItemStyled = styled.li`
  width: 100%;
  border-radius: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.successColor};
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ItemDetails = styled.span`
  width: fit-content;
`;
