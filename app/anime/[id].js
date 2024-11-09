import { useState, useEffect } from "react";
import { fetchAnimeDetails } from "../../lib/api";
import ReviewForm from "../../components/ReviewForm";
import axios from "axios";

const AnimeDetail = ({ anime }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(`/api/reviews/${anime.id}`);
      setReviews(response.data);
    };
    fetchReviews();
  }, [anime.id]);

  const handleReviewAdded = () => {
    // Refresh reviews after adding a new one
    const fetchReviews = async () => {
      const response = await axios.get(`/api/reviews/${anime.id}`);
      setReviews(response.data);
    };
    fetchReviews();
  };

  return (
    <div>
      <h1>{anime.title}</h1>
      <p>{anime.synopsis}</p>
      <img src={anime.main_picture.large} alt={anime.title} />

      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.username}</strong> rated {review.rating} -{" "}
            {review.comment}
          </li>
        ))}
      </ul>

      <ReviewForm animeId={anime.id} onReviewAdded={handleReviewAdded} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const anime = await fetchAnimeDetails(params.id);
  return { props: { anime } };
}

export default AnimeDetail;
