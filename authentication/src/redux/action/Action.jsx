import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './Actionype'


// Ragister Actions
const signinRequest = () => ({
  type: SIGNUP_REQUEST,
})

const signinSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
  
})

const signinFail = (err) => ({
  type: SIGNUP_FAILURE,
  payload: err,
})



const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

const loginSuccess = (Userdata) => ({
  type: LOGIN_SUCCESS,
  payload: Userdata,
  
})

const loginFail = (err) => ({
  type: LOGIN_FAILED,
  payload: err,
})


export { signinRequest, signinSuccess, signinFail,loginFail ,loginSuccess,loginRequest}
