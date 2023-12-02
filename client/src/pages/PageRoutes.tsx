import { useAuth0 } from "@auth0/auth0-react";
import PageLoader from "../components/loader/page-loader/PageLoader";
import Layout from "../layout/Layout";
import HomePage from "./home-page/HomePage";
import { Route, Routes } from "react-router-dom";
import NotFound from "./not-found-page/NotFoundPage";
import { AuthenticationGuard } from "./AuthenticationGuard";
import AskQuestion from "./ask-question-page/AskQuestionPage";
import AccountSetup from "./account/setup/AccountSetupPage";

const PageRoutes = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    <Layout>
      <PageLoader />
    </Layout>;
  }
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="ask"
        element={<AuthenticationGuard component={AskQuestion} />}
      />
      <Route path="account">
        <Route
          path="setup"
          element={<AuthenticationGuard component={AccountSetup} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
