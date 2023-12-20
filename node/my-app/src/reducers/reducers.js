// reducers.js
const initialState = {
    accessToken: null,
    refreshToken: null,
  };
  
  const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOKENS':
        return {
          ...state,
          accessToken: action.accessToken,
          refreshToken: action.refreshToken,
        };
      default:
        return state;
    }
  };
  
  export default tokenReducer;
  