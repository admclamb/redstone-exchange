import { useState } from "react";

export const useAskQuestionEditor = () => {
  const [body, setBody] = useState<string>("");

  const changeBody = (value: string | undefined) => {
    setBody(value ?? "");
  };

  return { body, changeBody };
};
