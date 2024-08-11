import { FC } from "react";
import { ItemDetails, RequestItemStyled } from "./RequestItem.styled";

type Props = {
  item: string;
  index: number;
};

export const RequestItem: FC<Props> = ({ item, index }) => {
  return (
    <RequestItemStyled>
      <ItemDetails>{item}</ItemDetails>
      <ItemDetails>{index + 1}</ItemDetails>
    </RequestItemStyled>
  );
};
