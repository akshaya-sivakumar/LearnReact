

export interface OtpState {
    data?: undefined;
    loading: boolean;
    success: boolean;
    error: any;
}

export interface OtpAction {
    type: string;
    payload?: any;
}
