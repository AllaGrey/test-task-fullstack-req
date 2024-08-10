import { FC } from "react";
import { RequestItem } from "../RequestItem";

export const RequestList: FC = () => {
  const reqList = Array(1, 2, 3, 4, 5);
  return (
    <div>
      {reqList.map((item) => (
        <RequestItem key={item} />
      ))}
    </div>
  );
};
