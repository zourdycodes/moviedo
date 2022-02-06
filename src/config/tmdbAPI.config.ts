import axiosClient from "./axios.config";
import {
  Movie,
  TmdbAPI,
  TV,
  Category,
  ResponseData,
} from "../types/movie.type";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

class TmdbControllerAPI implements TmdbAPI {
  public getMovieList(type: Movie, params: object): Promise<ResponseData> {
    const url = `movie/${movieType[type]}`;
    return axiosClient.get(url, params);
  }
  public getTvList(type: TV, params: object): Promise<ResponseData> {
    const url = `tv/${tvType[type]}`;
    return axiosClient.get(url, params);
  }
  public getVideos(type: Category, id: number): Promise<ResponseData> {
    const url = `${category[type]}/${id}/videos`;
    return axiosClient.get(url, { params: {} });
  }
  public search(type: Category, params: object): Promise<ResponseData> {
    const url = `search/${category[type]}`;
    return axiosClient.get(url, params);
  }
  public detail(
    type: Category,
    id: number,
    params: object
  ): Promise<ResponseData> {
    const url = `${category[type]}/${id}`;
    return axiosClient.get(url, params);
  }
  public credits(type: Category, id: number): Promise<ResponseData> {
    const url = `${category[type]}/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  }
  public similar(type: Category, id: number): Promise<ResponseData> {
    const url = `${category[type]}/${id}/similar`;
    return axiosClient.get(url, { params: {} });
  }
}

export const tmdbApiController = new TmdbControllerAPI();
