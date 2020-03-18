import axios from "axios";

const AnalyticsAPI = axios.create({
  baseURL: "https://api.coronaanalytic.com/",
});

export default AnalyticsAPI;
