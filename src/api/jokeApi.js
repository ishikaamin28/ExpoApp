import apiClient from "./apiClient";

export async function getRandomJoke() {
  const res = await apiClient.get("https://official-joke-api.appspot.com/random_joke");
  return res.data;
}
