import { AxiosResponse } from "axios";

export interface MovieData {}

export type Movie = "upcoming" | "popular" | "top_rated";
export type TV = "popular" | "top_rated" | "on_the_air";
export type Category = "movie" | "tv";

export interface TmdbAPI {
  getMovieList(type: Movie, params: object): Promise<AxiosResponse<never>>;
  getTvList(type: TV, params: object): Promise<AxiosResponse<never>>;
  getVideos(type: Category, id: number): Promise<AxiosResponse<never>>;
  search(type: Category, params: object): Promise<AxiosResponse<never>>;
  detail(
    type: Category,
    id: number,
    params: object
  ): Promise<AxiosResponse<never>>;
  credits(type: Category, id: number): Promise<AxiosResponse<never>>;
  similar(type: Category, id: number): Promise<AxiosResponse<never>>;
}

export interface MovieData {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
  name: string;
  revenue: number;
  status: string;
  vote_count: number;
  vote_average: number;
}
