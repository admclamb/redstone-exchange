import Card from "../card/Card";
import AskQuestionEditor from "./ask-question-editor/AskQuestionEditor";
import FormInput from "../form/form-input/FormInput";
import { useAskQuestion } from "./AskQuestion.hooks";
import { useAuth0 } from "@auth0/auth0-react";
import AskQuestionTags from "./ask-question-tags/AskQuestionTags";
import ButtonPrimary from "../button/button-primary/ButtonPrimary";
import ButtonLightDanger from "../button/button-light-danger/ButtonLightDanger";

const AskQuestion = () => {
  const { user } = useAuth0();
  const {
    body,
    changeBody,
    tags,
    setTags,
    title,
    changeTitle,
    cancelQuestion,
  } = useAskQuestion();

  return (
    <div className="flex flex-col gap-5">
      <Card className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="font-semibold">Title</h4>
            <p className="text-zinc-500">
              Base your title on what your problem is.
            </p>
          </div>

          <FormInput
            placeHolder="Title of your question"
            className="w-full"
            value={title}
            changeValue={changeTitle}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="font-semibold">Body</h4>
            <p className="text-zinc-500">
              Include all the relevant infromation so users acan help you find a
              solution.
            </p>
          </div>
          <AskQuestionEditor body={body} changeBody={changeBody} />
        </div>
        <AskQuestionTags tags={tags} setTags={setTags} />
      </Card>
      <ul className="flex items-center gap-2">
        <li>
          <ButtonPrimary>Post Question</ButtonPrimary>
        </li>
        <li>
          <ButtonLightDanger onClick={cancelQuestion}>
            Discard draft
          </ButtonLightDanger>
        </li>
      </ul>
    </div>
  );
};

export default AskQuestion;
