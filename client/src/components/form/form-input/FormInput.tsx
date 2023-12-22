import React from "react";

type Props = {
  border?: string;
  className?: string;
  padding?: string;
  placeHolder?: string;
};

const FormInput = ({
  border = "border rounded border-zinc-300",
  className = "",
  padding = "p-2",
  placeHolder = "",
}: Props) => {
  return (
    <input
      className={`${border} ${padding} ${className}`}
      placeholder={placeHolder}
    />
  );
};

export default FormInput;
