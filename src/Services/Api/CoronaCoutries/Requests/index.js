import CountriesAPI from "../index";

export async function fetchGlobalInfos() {
  const response = await CountriesAPI.get();
  console.log(response.data);
  return response.data;
}
