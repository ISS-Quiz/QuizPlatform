import axios from "axios";


export const loginUser = (user, navigate) => async dispatch => {
    console.log("Logging in ...")
    dispatch ({type: 'USER_LOGIN_REQUEST'})
    const url = "http://localhost:8000/api/signin"
    try {
        const response = await axios.post(url,user)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data})
        sessionStorage.setItem('currentUser', JSON.stringify(response.data))
        navigate('/')
    } catch (error) {
        dispatch({type:'USER_LOGIN_FAILED', payload: error})
    }
}

export const logoutUser = () => dispatch => {
    sessionStorage.removeItem('currentUser')
    window.location.href = '/Login'
}