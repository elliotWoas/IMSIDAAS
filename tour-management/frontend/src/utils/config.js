import axios from "axios";
export const BASE_URL = () => {
  axios.defaults.withCredentials = true;
  axios.post("https://imseedass.vercel.app/m/api/v1");
};
