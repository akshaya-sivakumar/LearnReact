

export interface LoginState {
    data?: any;
    loading: boolean;
    success: boolean;
    error: string | null;
}

export interface LoginAction {
    type: string;
    payload?: any;
}
