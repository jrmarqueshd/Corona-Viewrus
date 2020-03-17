import Api from "../index";

export async function fetchVirusInfo() {
  const response = await Api.get();
  console.log(response.data);
  return response.data;
}
