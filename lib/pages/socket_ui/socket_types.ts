

export interface SocketState {
    data?: any;
    loading: boolean;
    success: boolean;
    error: string | null;
}

export interface SocketAction {
    type: string;
    payload?: any;
}
