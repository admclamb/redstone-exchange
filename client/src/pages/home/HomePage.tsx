import ButtonPrimary3D from "../../components/button/button-primary-3d/ButtonPrimary3d";
import Card from "../../components/card/Card";
import Container from "../../components/container/Container";
import ContainerMedium from "../../components/container/container-medium/ContainerMedium";
import NavbarItems from "../../components/navbar/navbar-items/NavbarItems";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <ContainerMedium className="py-5 grid-with-aside gap-5">
        <aside>
          <NavbarItems />
        </aside>
        <section>
          <Card>
            <header className="flex justify-between items-center">
              <h4 className="text-3xl font-semibold">Questions</h4>
              <ButtonPrimary3D href="/questions/ask">
                Ask a Question
              </ButtonPrimary3D>
            </header>
          </Card>
        </section>
        <section></section>
      </ContainerMedium>
    </Layout>
  );
};

export default HomePage;
