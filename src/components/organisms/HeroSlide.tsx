import React, { useState, useEffect, useCallback } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { movieType, tmdbApiController } from "../../config/tmdbAPI.config";
import { MovieData } from "../../types/movie.type";
import { HeroSlideItem } from "../molecules/HeroSlideItem";

const HeroSlide: React.FC = (): JSX.Element => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState<MovieData[]>([]);

  const getMovies = useCallback(async () => {
    const params = { page: 1 };

    try {
      const response = await tmdbApiController.getMovieList(
        movieType.popular as any,
        {
          params,
        }
      );

      setMovieItems(response.results);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="hero-slide">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movieItems.map((item, index: number) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <HeroSlideItem
                  item={item}
                  className={`${isActive ? "active" : ""}`}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlide;
