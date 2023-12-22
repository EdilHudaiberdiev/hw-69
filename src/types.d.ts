export type AppDispatch = typeo

export interface IShow {
  name: string;
  id: number;
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  genres: string[];
  language: string;
  premiered: string;
}
export interface IShows {
  score: number;
  show: IShow;
}