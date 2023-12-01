import ButtonPrimary from "../../components/button/button-primary/ButtonPrimary";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-2 custom-grid">
        <aside></aside>
        <section>
          <header className="flex justify-between items-center">
            <h4 className="text-3xl font-semibold">Questions</h4>
            <ButtonPrimary href="/ask">Ask a question</ButtonPrimary>
          </header>
        </section>
        <section></section>
      </div>
    </Layout>
  );
};

export default HomePage;
