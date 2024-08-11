import { FC } from "react";
import { RequestItem } from "../RequestItem";

type Props = {
  requests: string[];
};

export const RequestList: FC<Props> = ({ requests }) => {
  return (
    <div>
      {requests &&
        requests.map((item, index) => (
          <RequestItem key={index} item={item} index={index} />
        ))}
    </div>
  );
};
