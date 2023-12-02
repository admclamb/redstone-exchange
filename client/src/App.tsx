import { useAuth0 } from "@auth0/auth0-react";
import AccountDoesNotExistBanner from "./banners/account-does-not-exist-banner/AccountDoesNotExistBanner";
import PageRoutes from "./pages/PageRoutes";
import PageLoader from "./components/loader/page-loader/PageLoader";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return (
    <>
      {isAuthenticated ? <AccountDoesNotExistBanner /> : null}
      <PageRoutes />
    </>
  );
};

export default App;
