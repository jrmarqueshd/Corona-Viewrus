import axios from "axios";

const CountriesAPI = axios.create({
  baseURL: "https://coronavirus-19-api.herokuapp.com/countries/",
});

export default CountriesAPI;
