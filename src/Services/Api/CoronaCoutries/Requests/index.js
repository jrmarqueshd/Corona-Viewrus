import CountriesAPI from "../index";

export async function fetchGlobalInfos() {
  const response = await CountriesAPI.get("/countries");

  return response.data;
}

export async function fetchGlobalShortInfos() {
  const response = await CountriesAPI.get();

  return response.data;
}
