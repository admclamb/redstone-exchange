import { useEffect } from "react";
import ButtonPrimary3D from "../../components/button/button-primary-3d/ButtonPrimary3d";
import Layout from "../../layout/Layout";
import MessageService from "../../services/MessageService";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const getMessages = async () => {
      const publicRes = await MessageService.getPublicMessage();
      console.log("PUBLIC: ", publicRes);

      const accessToken = await getAccessTokenSilently();
      console.log(accessToken)
      const protectedRes = await MessageService.getProtectedMessage(
        accessToken
      );
      console.log("Protected: ", protectedRes);

      const adminRes = await MessageService.getAdminMessage(accessToken);
      console.log("Admin: ", adminRes);
    };

    getMessages();
  }, []);
  return (
    <Layout>
      <div className="container mx-auto p-2 custom-grid">
        <aside></aside>
        <section>
          <header className="flex justify-between items-center">
            <h4 className="text-3xl font-semibold">Questions</h4>
            <ButtonPrimary3D href="/ask">Ask a Question</ButtonPrimary3D>
          </header>
        </section>
        <section></section>
      </div>
    </Layout>
  );
};

export default HomePage;
