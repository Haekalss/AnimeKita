import axios from "axios";

const API_URL = "https://api.myanimelist.net/v2";
const API_KEY = process.env.MYANIMELIST_API_KEY;

export const fetchAnimeDetails = async (animeId) => {
  const response = await axios.get(`${API_URL}/anime/${animeId}`, {
    headers: { "X-MAL-Client-ID": API_KEY },
  });
  return response.data;
};
