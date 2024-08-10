export const inputValueValidation = (inputValue: string) => {
  const inputNumberValue = Number(inputValue);
  if (inputNumberValue < 0 || inputNumberValue > 100) {
    return { error: "Please enter a number between 1 and 100" };
  }
  return { error: null };
};
