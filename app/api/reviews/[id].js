import { Review } from "../../../lib/db";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const reviews = await Review.findAll({ where: { animeId: id } });
    res.status(200).json(reviews);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
