import { AxiosRequestConfig } from "axios";
import { AccountModel } from "../models/AccountModel";
import { ApiResponse } from "../models/ApiResponseModel";
import api from "./api";

const getAccountBySub = (
  sub: string,
  accessToken: string
): Promise<ApiResponse<AccountModel>> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/account/find",
    params: {
      sub,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<AccountModel>({ config });
};

const isAccountSetup = (
  sub: string,
  accessToken: string
): Promise<ApiResponse<boolean>> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/account/account-is-setup",
    params: {
      sub,
    },
  };

  return api.callExternalApi<boolean>({ config });
};

const AccountService = {
  getAccountBySub,
  isAccountSetup,
};
Object.freeze(AccountService);
export default AccountService;
