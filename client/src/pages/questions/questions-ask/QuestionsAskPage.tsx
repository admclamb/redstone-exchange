import AskQuestion from "../../../components/ask-question/AskQuestion";
import ContainerMedium from "../../../components/container/container-medium/ContainerMedium";
import Layout from "../../../layout/Layout";

const QuestionsAskPage = () => {
  return (
    <Layout>
      <ContainerMedium className="grid-aside gap-5 py-5">
        <section>
          <AskQuestion />
        </section>
        <aside></aside>
      </ContainerMedium>
    </Layout>
  );
};

export default QuestionsAskPage;
