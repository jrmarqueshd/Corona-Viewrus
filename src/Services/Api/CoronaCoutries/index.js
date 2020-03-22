import axios from "axios";

export const CountriesAPISummary = axios.create({
  baseURL: "https://coronavirus.com.br:2096/",
});

const CountriesAPI = axios.create({
  baseURL: "https://coronavirus-19-api.herokuapp.com/",
});

export default CountriesAPI;
