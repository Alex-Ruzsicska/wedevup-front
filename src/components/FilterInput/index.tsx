import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  onChange: (newValue: any) => void;
  value: string;
  label?: string;
};

function FilterInput({ onChange, value, label }: Props) {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const isNewValueGreaterThanZero = parseInt(event.target.value) > 0;
    const newValue = isNewValueGreaterThanZero ? event.target.value : "";

    onChange(newValue);
  };

  return (
    <TextField
      onChange={handleInputChange}
      value={value}
      variant={"outlined"}
      fullWidth
      label={label}
    />
  );
}

export default FilterInput;
