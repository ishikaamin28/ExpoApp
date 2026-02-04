import apiClient from "./apiClient";

export async function getMyIP() {
  const res = await apiClient.get("https://api.ipify.org?format=json");
  return res.data;
}
