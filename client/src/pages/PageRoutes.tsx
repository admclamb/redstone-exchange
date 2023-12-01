import { useAuth0 } from "@auth0/auth0-react";
import PageLoader from "../components/loader/page-loader/PageLoader";
import Layout from "../layout/Layout";
import HomePage from "./home-page/HomePage";
import { Route, Routes } from "react-router-dom";

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
    </Routes>
  );
};

export default PageRoutes;
