import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.coronaanalytic.com/",
});

export default Api;
