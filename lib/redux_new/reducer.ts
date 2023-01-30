import { IAction, IState } from "./types";

const initialState: IState = {
    data: null,
    loading: false,
    error: null,
  };
  
  export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
      case 'FETCH_DATA_START':
        return { ...state, loading: true };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, data: action.payload, loading: false };
      case 'FETCH_DATA_ERROR':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };