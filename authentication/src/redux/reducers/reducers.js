import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../action/Actionype'


const initialState = {
  user: [],
  loading:false,
  error:null

}

const reducers = (state = initialState, action) => {
  console.log("reducers Done");
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading:false
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading:false,
        error:action.payload
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user:action.payload,
        loading:true
      }

    default:
      return state
  }
}
export default reducers