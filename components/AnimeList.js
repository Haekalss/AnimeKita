const AnimeList = ({ animes }) => (
  <div>
    {animes.map((anime) => (
      <AnimeCard key={anime.id} anime={anime} />
    ))}
  </div>
);

export default AnimeList;
