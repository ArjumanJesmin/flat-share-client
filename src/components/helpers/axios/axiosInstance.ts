import { authKey } from "@/components/contants/authkey";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "@/components/service/actions/local-storage";
import axios from "axios";
import setAccessToken from "@/components/service/actions/setAccessToken";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";

instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { instance };
