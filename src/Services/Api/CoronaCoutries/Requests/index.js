import CountriesAPI, { CountriesAPISummary } from "../index";

export async function fetchGlobalShortInfos() {
  const response = await CountriesAPISummary.get("/countries");
  return response.data;
}

export async function fetchResumeTotalsInfo() {
  const response = await CountriesAPISummary.get("/totals");
  return response.data;
}

export async function fetchGlobalInfo(country) {
  const response = await CountriesAPI.get("/countries/" + country);
  return response.data;
}
