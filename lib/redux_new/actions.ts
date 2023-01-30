



export function fetchData(): any {
    return async (dispatch: any) => {
        dispatch({ type: 'FETCH_DATA_START' });
        try {
            const response = await fetch('http://5e53a76a31b9970014cf7c8c.mockapi.io/msf/getContacts');
            const data = await response.json();
            console.warn(data)
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_DATA_ERROR', payload: error });
        }
    };
}