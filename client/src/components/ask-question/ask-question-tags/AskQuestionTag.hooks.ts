import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CategoryModel } from "../../../models/CategoryModel";

export const useAskQuestionTag = (
  tags: CategoryModel[],
  setTags: Dispatch<SetStateAction<CategoryModel[]>>
) => {
  const [tagsInput, setTagsInput] = useState<string>("");

  const changeTagsInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value.slice(-1) === " ") {
      if (!tags.find((tag) => tag.name === value.slice(0, -1).toLowerCase())) {
        setTags((curr) => {
          return [...curr, { name: tagsInput.toLowerCase() }];
        });
      }

      setTagsInput("");
    } else {
      setTagsInput(value);
    }
  };

  const removeTag = (index: number) => {
    console.log(index);
    setTags((curr) => {
      return [...curr.slice(0, index), ...curr.slice(index + 1)];
    });
  };

  return { tagsInput, changeTagsInput, removeTag };
};
