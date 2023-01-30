const initialState = {
    data: ''
  };
  
  export default (state = initialState, action: any) => {
    switch (action.type) {
      case 'FETCH_DATA':
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  