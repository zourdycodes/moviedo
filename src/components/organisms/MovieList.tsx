import React, { useCallback, useEffect, useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";

import { MovieCard } from "../molecules/MovieCard";

import { tmdbApiController, category } from "../../config/tmdbAPI.config";
import { Category, Movie, MovieData } from "../../types/movie.type";
import { AxiosResponse } from "axios";

type Props = {
  categoryType: Category;
  type: Movie | any;
  id?: number;
};

export const MovieList: React.FC<Props> = ({ categoryType, type, id }) => {
  const [items, setItems] = useState<MovieData[]>([]);

  const getList = useCallback(async () => {
    let response: AxiosResponse;

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
    // setItems(response.data);
    console.log(response.data);
  }, [categoryType, type, id]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
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
  );
};
