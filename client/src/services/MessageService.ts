import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/ApiResponseModel";
import { MessageModel } from "../models/MessageModel";
import api from "./Api";

const getPublicMessage = (): Promise<ApiResponse<MessageModel>> => {
  const config: AxiosRequestConfig = {
    url: "/api/messages/public",
    headers: {
      "content-type": "application/json",
    },
  };

  return api.callExternalApi<MessageModel>({ config });
};

const getProtectedMessage = (
  accessToken: string
): Promise<ApiResponse<MessageModel>> => {
  const config: AxiosRequestConfig = {
    url: "/api/messages/protected",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<MessageModel>({ config });
};

const getAdminMessage = (
  accessToken: string
): Promise<ApiResponse<MessageModel>> => {
  const config: AxiosRequestConfig = {
    url: "/api/messages/admin",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<MessageModel>({ config });
};

const MessageService = {
  getPublicMessage,
  getProtectedMessage,
  getAdminMessage,
};
Object.freeze(MessageService);
export default MessageService;
