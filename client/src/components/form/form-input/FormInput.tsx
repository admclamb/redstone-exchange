import { ChangeEvent } from "react";

type Props = {
  border?: string;
  className?: string;
  padding?: string;
  placeHolder?: string;
  value: string;
  changeValue: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  border = "border rounded border-zinc-300",
  className = "",
  padding = "p-2",
  placeHolder = "",
  value,
  changeValue,
}: Props) => {
  return (
    <input
      className={`${border} ${padding} ${className}`}
      placeholder={placeHolder}
      value={value}
      onChange={changeValue}
    />
  );
};

export default FormInput;
