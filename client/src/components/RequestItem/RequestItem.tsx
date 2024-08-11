import { FC } from "react";

type Props = {
  item: string;
  index: number;
};

export const RequestItem: FC<Props> = ({ item, index }) => {
  return (
    <div>
      {item} {index}
    </div>
  );
};
