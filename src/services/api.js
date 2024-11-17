import axios from "axios";

const api = axios.create({
  baseURL: "https://67351e4e5995834c8a91efda.mockapi.io/greenvolt",
});

export default api;
