/* import { SocketAction, SocketState } from "./socket_types";

const initialState: SocketState = {
    ws: null,
    loading: false,
    data: undefined,
    isOpen: false,
    error: null,
};

export const socketReducer = (state = initialState, action: SocketAction) => {
    switch (action.type) {
        case "WEBSOCKET_INITIALIZE":
            return { ...state, ws: "socket initialized" };
        case "WEBSOCKET_ONCONNECT":
            return { ...state, loading: true };
        case "WEBSOCKET_OPEN":
            return { ...state, isOpen: true, loading: false };
        case "WEBSOCKET_CLOSE":
            return { ...state, isOpen: false };
        case "WEBSOCKET_ERROR":
            return { ...state, error: "error" };
        case "WEBSOCKET_MESSAGE":

            return { ...state, data: action.payload };
        default:
            return state;
    }
}; */


import { SocketAction, SocketState } from "./socket_types";


const initialState: SocketState = {
    data: undefined,
    loading: false,
    success: false,
    error: null,
};

export const socketreducer = (state = initialState, action: SocketAction) => {
    switch (action.type) {
        case 'WEBSOCKET_INITIALIZE':
            return { ...state, loading: true };
        case 'WEBSOCKET_MESSAGE':
            return { ...state, data: action.payload, loading: false, success: true };
        case 'WEBSOCKET_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};