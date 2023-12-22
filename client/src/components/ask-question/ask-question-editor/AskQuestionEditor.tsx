import MDEditor from "@uiw/react-md-editor";

import rehypeSanitize from "rehype-sanitize";

type Props = {
  body: string;
  changeBody: (value: string | undefined) => void;
};

const AskQuestionEditor = ({ body, changeBody }: Props) => {
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
