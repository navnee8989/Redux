import axios from "axios";
import { signinRequest,signinSuccess,signinFail } from "../action/Action.jsx";

import {inp} from '../../custom/CustomHook.js'


const saveUser = () => {
    return async (dispatch) => {
      dispatch(signinRequest()); 
  
      try {
        const response = await axios.post('http://localhost:5000/users',inp);
        const data = response.data;
  
        dispatch(signinSuccess(data)); 
        console.log("api call");
      } catch (error) {
        dispatch(signinFail(error)); 
      }
    };
  };

  export default saveUser;