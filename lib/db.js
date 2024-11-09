import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

const Anime = sequelize.define("Anime", {
  title: DataTypes.STRING,
  synopsis: DataTypes.TEXT,
  genre: DataTypes.STRING,
  image_url: DataTypes.STRING,
});

const Review = sequelize.define("Review", {
  animeId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER,
  rating: DataTypes.INTEGER,
  comment: DataTypes.TEXT,
});

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

const initDb = async () => {
  await sequelize.sync({ force: false });
};

export { sequelize, Anime, Review, User, initDb };
