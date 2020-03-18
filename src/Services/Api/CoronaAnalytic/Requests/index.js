import AnalyticsAPI from "../index";

export async function fetchVirusInfo() {
  const response = await AnalyticsAPI.get();
  console.log(response.data);
  return response.data;
}
