

export interface OtpState {
    data?: undefined;
    loading: boolean;
    success: boolean;
    error: string | null;
}

export interface OtpAction {
    type: string;
    payload?: any;
}
