import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";

import { category } from "../../config/tmdbAPI.config";
import { apiConfig } from "../../config/api.config";
import { Category, MovieData } from "../../types/movie.type";

interface IProps {
  item: MovieData;
  categoryType: Category;
}

const MovieCard: React.FC<IProps> = ({ categoryType, item }) => {
  const link = `/${category[categoryType]}/${item.id}`;
  const bgIMG = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bgIMG})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
