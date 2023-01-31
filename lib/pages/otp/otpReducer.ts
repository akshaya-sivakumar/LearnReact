import { OtpAction, OtpState } from "./otpTypes";


const initialState: OtpState = {
    data: undefined,
    loading: false,
    success: false,
    error: null,
};

export const otpreducer = (state = initialState, action: OtpAction) => {
    switch (action.type) {
        case 'FETCH_DATA_START':
            return { ...state, loading: true };
        case 'FETCH_DATA_SUCCESS':
            return { ...state, data: action.payload, loading: false, success: true };
        case 'FETCH_DATA_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};