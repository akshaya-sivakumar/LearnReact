

export interface LoginState {
    data?: any;
    loading: boolean;
    success: boolean;
    error: any;
}

export interface LoginAction {
    type: string;
    payload?: any;
}
