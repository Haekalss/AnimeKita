const AnimeCard = ({ anime }) => (
  <div>
    <h2>{anime.title}</h2>
    <p>{anime.synopsis}</p>
    <img src={anime.image_url} alt={anime.title} />
  </div>
);

export default AnimeCard;
