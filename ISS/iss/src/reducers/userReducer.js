const initialState= {
    currentuser: {},
}

export const loginUserReducer = (state=initialState, action) => {
    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST' : return{
            loading: true
        }
        case 'USER_LOGIN_SUCCESS' : return{
            loading: false,
            success: true,
            currentuser: action.payload 
        }
        case 'USER_LOGIN_FAILED' : return{
            loading: false,
            error: action.payload
        }
        default : return state
    }
} 