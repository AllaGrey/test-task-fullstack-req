import { FC } from "react";
import { InputStyled } from "./Input.styled";

type Props = {
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputError?: boolean;
};

export const Input: FC<Props> = ({
  placeholder = "Enter number from 1 to 100",
  type = "number",
  value,
  onChange,
  inputError = false,
}) => {
  return (
    <InputStyled
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      min={1}
      max={100}
      $error={inputError}
    />
  );
};
