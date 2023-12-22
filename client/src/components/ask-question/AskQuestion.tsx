import Card from "../card/Card";
import AskQuestionEditor from "./ask-question-editor/AskQuestionEditor";
import FormInput from "../form/form-input/FormInput";
import { useAskQuestion } from "./AskQuestion.hooks";
import { useAuth0 } from "@auth0/auth0-react";

const AskQuestion = () => {
  const { user } = useAuth0();
  const { body, changeBody } = useAskQuestion();

  return (
    <Card className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="font-semibold">Title</h4>
          <p className="text-zinc-500">
            Base your title on what your problem is.
          </p>
        </div>

        <FormInput placeHolder="Title of your question" className="w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="font-semibold">Body</h4>
          <p className="text-zinc-500">
            Include all the relevant infromation so users acan help you find a
            solution.
          </p>
        </div>
        <AskQuestionEditor />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="font-semibold">Tags</h4>
          <p className="text-zinc-500">
            Add up to 5 tags to describe your problem.
          </p>
          <FormInput placeHolder="Tags" className="w-full" />
        </div>
      </div>
    </Card>
  );
};

export default AskQuestion;
