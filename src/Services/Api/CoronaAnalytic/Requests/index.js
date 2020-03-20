import AnalyticsAPI from "../index";

export async function fetchVirusInfo() {
  const response = await AnalyticsAPI.get();
  return response.data;
}
