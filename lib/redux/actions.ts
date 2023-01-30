
/* const dispatch: Dispatch
<AnyAction>(action: AnyAction) => AnyAction */

import { Dispatch } from "redux";





export function fetchData(): any {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch('https://my-api.com/data');
            const data = await response.json();


            dispatch({ type: 'FETCH_DATA', payload: data });
        } catch (error) {
            dispatch({ type: 'MY_ACTION_ERROR', error });
        }
    };
}
/* export function fetchData() {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch('https://my-api.com/data');
            const data = await response.json();


            dispatch({ type: 'FETCH_DATA', payload: data });
        } catch (error) {
            dispatch({ type: 'MY_ACTION_ERROR', error });
        }
    };
} */


