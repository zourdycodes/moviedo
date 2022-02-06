import React from "react";
import { Link } from "react-router-dom";

import { HeroSlide } from "../components/organisms/HeroSlide";
import { MovieList } from "../components/organisms/MovieList";
import { OutlineButton } from "../components/atoms/Button";

import { category, movieType, tvType } from "../config/tmdbAPI.config";

export const Home: React.FC = () => {
  return (
    <>
      <HeroSlide />

      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">view more</OutlineButton>
            </Link>
          </div>
          <MovieList categoryType={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>

          <MovieList categoryType={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>

          <MovieList categoryType={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>

          <MovieList categoryType={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};
