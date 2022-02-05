import { AxiosResponse } from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { apiConfig } from "../../config/api.config";
import { category, tmdbApiController } from "../../config/tmdbAPI.config";
import { MovieData } from "../../types/movie.type";
import { Button, OutlineButton } from "../atoms/Button";

export const HeroSlideItem: React.FC<{
  item: MovieData;
  className: string;
}> = ({ item, className }) => {
  const history = useHistory();

  const backgroundImg = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`modal__${item.id}`);

    const videos: AxiosResponse<any[]> = await tmdbApiController.getVideos(
      category.movie as any,
      item.id
    );

    console.log(videos, modal);

    // if (videos.data.length > 0) {
    //   const videSrc = "https://www.youtube.com/embed/" + videos.data[0].key;
    //   modal!
    //     .querySelector(".modal__content > iframe")!
    //     .setAttribute("src", videSrc);
    // } else {
    //   modal!.querySelector(".modal__content")!.innerHTML = "No trailer";
    // }

    // modal!.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${className}`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push("/movie/" + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};
