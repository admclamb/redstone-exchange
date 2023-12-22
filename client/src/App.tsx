import { useAuth0 } from "@auth0/auth0-react";
import PageRoutes from "./pages/PageRoutes";
import PageLoader from "./components/loader/page-loader/PageLoader";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <>
      <PageRoutes />
    </>
  );
};

export default App;
