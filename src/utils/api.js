import { Axios } from "axios";

export const baseurl = "http://localhost:5000/";

export const axiosInstance = new Axios({
  baseURL: baseurl,
  headers: { "Content-Type": "application/json" },
});

export function getRequest(url) {
  let headers = {
    Authorization: "Bearer " + (localStorage.getItem("access-token") || ""),
  };
  return axiosInstance.get(url, { headers: headers });
}
export function postRequest(url, data) {
  let headers = {
    Authorization: "Bearer " + (localStorage.getItem("access-token") || ""),
  };
  return axiosInstance.post(url, JSON.stringify(data), { headers: headers });
}
