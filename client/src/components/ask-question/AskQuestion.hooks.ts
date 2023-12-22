import { useState, ChangeEvent } from "react";
import { CategoryModel } from "../../models/CategoryModel";
import { useNavigate } from "react-router-dom";

export const useAskQuestion = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [tags, setTags] = useState<CategoryModel[]>([]);

  const navigate = useNavigate();

  const changeBody = (value: string | undefined) => {
    setBody(value ?? "");
  };

  const changeTitle = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setTitle(value);
  };

  const cancelQuestion = () => {
    if (window.confirm("Are you sure you want to discard draft?")) {
      navigate(-1);
    }
  };

  return {
    body,
    changeBody,
    tags,
    setTags,
    title,
    changeTitle,
    cancelQuestion,
  };
};
