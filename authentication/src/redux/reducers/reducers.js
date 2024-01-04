import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../action/Actionype'


const initialState = {
  user: [],
  loading:false,
  error:null

}

const reducers = (state = initialState, action) => {
 
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
        case LOGIN_REQUEST :
          return {
            ...state,
          }

          case LOGIN_SUCCESS :
            return {
              ...state,
              loading:true,
              user:action.payload
            }
            
        case LOGIN_FAILED :
          return {
            ...state,
            loading:false,
            error: action.payload
          }
    default:
      return state
  }
}
export default reducers