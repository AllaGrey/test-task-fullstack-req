import { FC, useState } from "react";
import { inputValueValidation } from "../../utils";
import { Input } from "../Input";
import { Button } from "../Button";
import { ErrorMessage, FormStyled, Label } from "./RequestForm.styled";

type Props = {
  onclick: (value: string) => void;
  isLoadingRequest: boolean;
};

export const RequestForm: FC<Props> = ({ onclick, isLoadingRequest }) => {
  const [value, setValue] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const { error } = inputValueValidation(inputValue);
    if (error) {
      setInputError(error);
    } else {
      setInputError("");
    }
    setValue(inputValue);
  };

  const handleClick = () => {
    onclick(value);
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
      <Button
        onClick={handleClick}
        disabled={!!inputError || isLoadingRequest}
        value={value}
      />
    </FormStyled>
  );
};
