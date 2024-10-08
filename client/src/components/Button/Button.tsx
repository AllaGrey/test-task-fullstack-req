import React, { FC } from "react";
import { ButtonStyled } from "./Button.styled";

type Props = {
  onClick: (value: string) => void;
  disabled?: boolean;
  value?: string;
  text?: string;
};

export const Button: FC<Props> = ({
  onClick,
  disabled = false,
  value = "",
  text = "Start",
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (value !== "") onClick(value);
  };

  return (
    <ButtonStyled
      type="submit"
      onClick={handleClick}
      disabled={disabled || value === ""}
    >
      {text}
    </ButtonStyled>
  );
};
