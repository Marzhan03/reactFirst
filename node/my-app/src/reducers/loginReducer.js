// store/reducers/authReducer.js
const initialState = {
    tokens: {},
    loggedIn: false,
    // Другие начальные состояния, связанные с авторизацией
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                tokens: action.payload,
                loggedIn: true,
            };
        // Другие кейсы для обработки разных действий авторизации

        default:
            return state;
    }
};

export default loginReducer;
