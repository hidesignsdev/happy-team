import axios from "axios";
import _ from "lodash";
import { APP_ID, API_URL, REST_KEY } from "./config";
const getAxiosInstance = () => {
  const token = localStorage.getItem("token");
  const headers = {
    "X-Parse-Application-Id": APP_ID,
    "X-Parse-REST-API-Key": REST_KEY,
    ...(token ? { "X-Parse-Session-Token": token } : {}),
  };
  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers,
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      if ([200, 201].includes(response.status)) {
        const result = response.data;
        if (_.isObject(result.isObject)) {
          result.statusCode = response.status;
        }
        return response.data;
      }
      return Promise.reject(response);
    },
    (error) => {
      const { code } = error.response.data;
      if (code) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.response.statusText);
    }
  );
  return axiosInstance;
};

const request = (url, data = {}, method = "POST") => {
  try {
    const API = getAxiosInstance();
    switch (method) {
      case "GET":
        return API.get(url, { params: data });
      default:
        return API.post(url, data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
export default request;
