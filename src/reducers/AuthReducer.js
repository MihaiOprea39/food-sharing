export const AuthReducer = (state, action) => {
    switch (action.type) {
        case '[USER] Load User':
            return action.user;

        case '[USER] Update User Avatar':
            return {
                ...state,
                avatar: action.avatar
            }

        default:
            return state;
    }
};
