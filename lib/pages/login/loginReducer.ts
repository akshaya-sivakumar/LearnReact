import { LoginAction, LoginState } from "./loginTypes";


const initialState: LoginState = {
    data: null,
    loading: false,
    error: null,
    success: false
};

export const loginReducer = (state = initialState, action: LoginAction) => {
    switch (action.type) {
        case 'FETCH_DATA_START':
            return { ...state, loading: true, success: false };
        case 'FETCH_DATA_SUCCESS':
            return { ...state, data: action.payload, loading: false, success: true };
        case 'FETCH_DATA_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};