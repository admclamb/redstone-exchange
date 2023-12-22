import { useAuth0 } from "@auth0/auth0-react";
import PageRoutes from "./pages/PageRoutes";
import PageLoader from "./components/loader/page-loader/PageLoader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AccountDoesNotExistBanner from "./banners/account-does-not-exist-banner/AccountDoesNotExistBanner";
import AccountService from "./services/AccountService";
import { useState, useEffect } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { setAccount } from "./slices/accountSlice";

const queryClient = new QueryClient();

const App = () => {
  const { isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();
  const [isAccountLoading, setIsAccountLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      setIsAccountLoading(true);
      if (user?.sub) {
        const accessToken = await getAccessTokenSilently();
        const { data } = await AccountService.getAccountBySub(
          user.sub,
          accessToken
        );
        if (data) {
          dispatch(setAccount(data));
        }
      }
      setIsAccountLoading(false);
    })();
  }, [user?.sub]);

  if (isLoading || isAccountLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {isAuthenticated ? <AccountDoesNotExistBanner /> : null}
        <PageRoutes />
      </QueryClientProvider>
    </>
  );
};

export default App;
