import { useState } from "react";

export const useAskQuestion = () => {
  const [body, setBody] = useState("");

  const changeBody = (value: string) => {
    setBody(value);
  };
  return { body, changeBody };
};
