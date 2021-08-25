import axios from "axios";

const baseURL =
  process.env.REACT_APP_BASEURL || "https://online.aluvastfrancishss.com/";

if (!baseURL) {
  throw new Error("BaseURL not set");
}

const api = axios.create({
  baseURL,
});

export default api;
