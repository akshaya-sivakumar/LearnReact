import { Data } from "./watchlist";




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