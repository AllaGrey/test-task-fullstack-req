import { FC } from "react";
import { RequestItem } from "../RequestItem";
import { RequestListStyled } from "./RequestList.styled";

type Props = {
  requests: string[];
};

export const RequestList: FC<Props> = ({ requests }) => {
  return (
    <>
      {requests.length > 0 && (
        <RequestListStyled>
          {requests.map((item, index) => (
            <RequestItem key={index} item={item} index={index} />
          ))}
        </RequestListStyled>
      )}
    </>
  );
};
