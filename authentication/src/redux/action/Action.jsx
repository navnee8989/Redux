import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './Actionype'



console.log("action done");
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

export { signinRequest, signinSuccess, signinFail }
