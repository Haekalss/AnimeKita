import { useState, useEffect } from "react";
import AnimeList from "../components/animelist.js";
import axios from "axios";

const Home = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await axios.get("/api/anime"); // Assuming API route for anime list
      setAnimes(response.data);
    };
    fetchAnimes();
  }, []);

  return (
    <div>
      <h1>Anime Reviews</h1>
      <AnimeList animes={animes} />
    </div>
  );
};

export default Home;
