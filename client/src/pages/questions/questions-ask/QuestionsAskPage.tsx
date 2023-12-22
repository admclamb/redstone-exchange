import AskQuestion from "../../../components/ask-question/AskQuestion";
import Container from "../../../components/container/Container";
import Layout from "../../../layout/Layout";

const QuestionsAskPage = () => {
  return (
    <Layout>
      <Container className="grid-with-aside py-5">
        <aside></aside>
        <section>
          <AskQuestion />
        </section>
        <div></div>
      </Container>
    </Layout>
  );
};

export default QuestionsAskPage;
