import { AxiosResponse } from "axios";

export interface MovieData {}

export type Movie = "upcoming" | "popular" | "top_rated";
export type TV = "popular" | "top_rated" | "on_the_air";
export type Category = "movie" | "tv";

export interface TmdbAPI {
  getMovieList(type: Movie, params: object): Promise<AxiosResponse<never>>;
  getTvList(type: TV, params: object): Promise<AxiosResponse<never>>;
  getVideos(type: Category, id: string): Promise<AxiosResponse<never>>;
  search(type: Category, params: object): Promise<AxiosResponse<never>>;
  detail(
    type: Category,
    id: string,
    params: object
  ): Promise<AxiosResponse<never>>;
  credits(type: Category, id: string): Promise<AxiosResponse<never>>;
  similar(type: Category, id: string): Promise<AxiosResponse<never>>;
}

export interface MovieData {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  name: string;
  revenue: number;
  status: string;
  vote_count: number;
  vote_average: number;
}
