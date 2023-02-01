import { Data } from "./watchlist/watchlist";




export function fetchData(): any {
    return async (dispatch: any) => {
        dispatch({ type: 'FETCH_DATA_START' });
        try {
            const response = await fetch('https://run.mocky.io/v3/ec1a0f0c-3739-4914-b5c0-2140e5165fe5', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "request": { "appID": "f79f65f1b98e116f40633dbb46fd5e21", "data": { "category": "TOPGAINER", "sessionID": "guest", "usrID": "guest" }, "formFactor": "M", "futures": "0", "response_format": "json" } })
            });

            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data.response.data.symbols as Data[] });
        } catch (error) {
            dispatch({ type: 'FETCH_DATA_ERROR', payload: error });
        }
    };
}

export function login(mobileNumber: string): any {
    return async (dispatch: any) => {
        dispatch({ type: 'FETCH_DATA_START' });
        try {
            const response = await fetch('https://dev.gwcindia.in/msil-gwc-webservice-dev/User/GenerateOTP/1.0.0', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-ENCRYPT': "false"

                },
                body: JSON.stringify({
                    "request": {
                        "data":

                            { "mobNo": mobileNumber }
                        , "appID": "f79f65f1b98e116f40633dbb46fd5e21"
                    }
                })
            });

            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();

            if (data.response.infoID == "EGN002") {
                throw Error(data.response.
                    infoMsg);
            }

            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data.response });
        } catch (error) {

            dispatch({ type: 'FETCH_DATA_ERROR', payload: error });
        }
    };
}



export function otpValidation(otp: string): any {
    return async (dispatch: any) => {
        dispatch({ type: 'FETCH_DATA_START' });
        try {
            const response = await fetch('https://dev.gwcindia.in/virtual-trade/User/Login/1.0.0', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-ENCRYPT': "false"

                },
                body: JSON.stringify({
                    "request": {
                        "data":

                            { "mobNo": "+918248121331", "userType": "virtual", "otp": otp }
                        , "appID": "45370504ab27eed7327a1df46403a30a"
                    }
                })
            });

            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            if (data.response.infoID == "EGN002") {
                throw Error(data.response.
                    infoMsg);
            }

            console.warn(JSON.stringify(data))
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: JSON.stringify(data) });
        } catch (error) {
            console.warn(error)
            dispatch({ type: 'FETCH_DATA_ERROR', payload: error });
        }
    };
}