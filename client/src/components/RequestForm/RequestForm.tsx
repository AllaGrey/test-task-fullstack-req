import { FC, useState } from "react";
import { inputValueValidation } from "../../utils";
import { Input } from "../Input";
import { Button } from "../Button";
import { ErrorMessage, FormStyled, Label } from "./RequestForm.styled";

type Props = {
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onclick: (value: string) => void;
  // value: string;
};

export const RequestForm: FC<Props> = ({ onclick }) => {
  const [value, setValue] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const { error } = inputValueValidation(inputValue);
    if (error) return setInputError(error);
    setInputError("");
    setValue(inputValue);
  };

  return (
    <FormStyled>
      <Label>
        <Input
          onChange={handleChangeValue}
          value={value}
          inputError={!!inputError}
        />
        {inputError && <ErrorMessage>{inputError}</ErrorMessage>}
      </Label>
      <Button onClick={onclick} disabled={!!inputError} value={value} />
    </FormStyled>
  );
};
