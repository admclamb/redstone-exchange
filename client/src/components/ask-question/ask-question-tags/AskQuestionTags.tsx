import { Dispatch, SetStateAction } from "react";
import { CategoryModel } from "../../../models/CategoryModel";
import FormInput from "../../form/form-input/FormInput";
import { useAskQuestionTag } from "./AskQuestionTag.hooks";

type Props = {
  tags: CategoryModel[];
  setTags: Dispatch<SetStateAction<CategoryModel[]>>;
};

const AskQuestionTags = ({ tags, setTags }: Props) => {
  const { tagsInput, changeTagsInput, removeTag } = useAskQuestionTag(
    tags,
    setTags
  );

  console.log(tagsInput);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h4 className="font-semibold">Tags</h4>
        <p className="text-zinc-500">
          Add up to 5 tags to describe your problem.
        </p>
      </div>
      <ul
        className={`border rounded border-zinc-300 flex items-center gap-3 ${
          tags.length ? "px-3" : "p-0"
        }`}
      >
        {tags.map((tag, index) => (
          <li
            key={tag.name}
            className="px-1 py-0.5 bg-green-200 text-green-800 rounded text-sm flex items-center gap-1"
          >
            <span>{tag.name}</span>
            <button
              className="ml-1 w-4 h-4 hover:bg-green-400 active:bg-green-500 duration-200 ease-out flex justify-center items-center rounded"
              onClick={() => removeTag(index)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
        ))}
        <li className="w-full">
          <FormInput
            placeHolder="Tags"
            className="w-full"
            border="rounded"
            padding="p-3"
            value={tagsInput}
            changeValue={changeTagsInput}
          />
        </li>
      </ul>
    </div>
  );
};

export default AskQuestionTags;
