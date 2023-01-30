import { Data } from "./watchlist";

export interface IState {
  data?: Data[];
  loading: boolean;
  error: string | null;
}

export interface IAction {
  type: string;
  payload?: any;
}
