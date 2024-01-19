import axios from "axios";
import { Preferences } from "@capacitor/preferences";

const baseURL = "https://stationcensus.rivermedcenter.net/api/";//process.env.VUE_APP_API_URL;
//const baseURL = 'https://pxwaitlist.rivermedcenter.net/api';//process.env.VUE_APP_API_URL;


const api = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    'Authorization': localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : '',
  },
});

api.interceptors.request.use(async (config) => {
  const token = await Preferences.get({ key: "token" });
  config.headers.Authorization = `Bearer ${token.value || null}`;

  return config;
});

 api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("Error2")
    console.log(error)
    if (error.response.status === 401||error.response.status === 500) {
      console.log("Error1")
     // window.location = "/logout";
     // window.location = "/login";
    }

    return Promise.reject(error);
  },
);

export default api;
