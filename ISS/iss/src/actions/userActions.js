import axios from "axios";


export const loginUser = (user) => async dispatch => {
    dispatch ({type: 'USER_LOGIN_REQUEST'})
    const url = "http://localhost:8000/api/signin"
    try {
        const response =await axios.post(url,user)
        console.log(response);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data})
        sessionStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href='/'
    } catch (error) {
        dispatch({type:'USER_LOGIN_FAILED', payload: error})
    }
}

export const logoutUser = () => dispatch => {
    sessionStorage.removeItem('currentUser')
    window.location.href = '/Login'
}