import { Review } from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { animeId, userId, rating, comment } = req.body;
    const newReview = await Review.create({ animeId, userId, rating, comment });
    res.status(201).json(newReview);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
