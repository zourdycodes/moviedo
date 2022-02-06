import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";

import { tmdbApiController, category } from "../../config/tmdbAPI.config";
import {
  Category,
  Movie,
  MovieData,
  ResponseData,
} from "../../types/movie.type";

// import { MovieCard } from "../molecules/MovieCard";

const MovieCard = lazy(() => import("../molecules/MovieCard"));

type Props = {
  categoryType: Category | any;
  type: Movie | any;
  id?: number;
};

const MovieList: React.FC<Props> = ({ categoryType, type, id }) => {
  const [items, setItems] = useState<MovieData[]>([]);

  const getList = useCallback(async () => {
    let response: ResponseData;

    const params = {};

    if ("similar" !== type) {
      switch (categoryType) {
        case category.movie:
          response = await tmdbApiController.getMovieList(type, { params });
          break;

        default:
          response = await tmdbApiController.getTvList(type, { params });
      }
    } else {
      response = await tmdbApiController.similar(categoryType, id!);
    }
    setItems(response.results);
    console.log(response.results);
  }, [categoryType, type, id]);

  useEffect(() => {
    getList();
  }, [getList]);

  const renderLoader = (): JSX.Element => <p>loading...</p>;

  return (
    <Suspense fallback={renderLoader()}>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
          {items.map((item, index: number) => {
            return (
              <SwiperSlide key={index}>
                <MovieCard item={item} categoryType={categoryType} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Suspense>
  );
};

export default MovieList;
