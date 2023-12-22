import ButtonPrimary3D from "../../components/button/button-primary-3d/ButtonPrimary3d";
import Card from "../../components/card/Card";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-2 custom-grid">
        <aside></aside>
        <section>
          <Card>
            <header className="flex justify-between items-center">
              <h4 className="text-3xl font-semibold">Questions</h4>
              <ButtonPrimary3D href="/ask">Ask a Question</ButtonPrimary3D>
            </header>
          </Card>
        </section>
        <section></section>
      </div>
    </Layout>
  );
};

export default HomePage;
