import { useState } from "react";
import axios from "axios";

const ReviewForm = ({ animeId, onReviewAdded }) => {
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/reviews", { animeId, username, rating, comment });
    onReviewAdded();
    setUsername("");
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-10)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="10"
      />
      <textarea
        placeholder="Your Review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
