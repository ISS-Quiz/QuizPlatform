const initialState= {
    currentUser: {},
    loading: false,
}

export const loginUserReducer = (state=initialState, action) => {
    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST' : return{
            ...state,
            loading: true
        }
        case 'USER_LOGIN_SUCCESS' : return{
            ...state,
            loading: false,
            success: true,
            currentUser: action.payload.user
        }
        case 'USER_LOGIN_FAILED' : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
} 