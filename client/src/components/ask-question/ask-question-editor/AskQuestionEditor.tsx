import MDEditor from "@uiw/react-md-editor";
import { useAskQuestionEditor } from "./AskQuestionEditor.hooks";
import rehypeSanitize from "rehype-sanitize";

const AskQuestionEditor = () => {
  const { body, changeBody } = useAskQuestionEditor();
  return (
    <div>
      <MDEditor
        value={body}
        onChange={changeBody}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        height={300}
      />
    </div>
  );
};

export default AskQuestionEditor;
