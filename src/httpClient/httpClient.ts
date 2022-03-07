import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import * as rax from "retry-axios";

const MAX_RETRIES = 2;
const METHODS_RETRY = ["GET", "POST", "HEAD", "OPTIONS", "DELETE", "PUT"];

const API_BASE = process.env.REACT_APP_HANKU_SERVER_URL;

const addRetry = (instance: AxiosInstance): void => {
  const raxConfig = {
    instance,
    retry: MAX_RETRIES,
    httpMethodsToRetry: METHODS_RETRY,
  };
  instance.defaults.raxConfig = raxConfig;
  rax.attach(instance);
};

const httpClient = (): AxiosInstance => {
  const baseUrl = API_BASE;
  const clientAxios = Axios.create({
    baseURL: baseUrl,
  });
  addRetry(clientAxios);
  return clientAxios;
};

const httpRequest = async (requestData: AxiosRequestConfig) => {
  try {
    const { data } = await httpClient().request(requestData);
    return data;
  } catch (err) {
    console.log("ERROR : ", err);
    return err;
  }
};

export default httpRequest;
