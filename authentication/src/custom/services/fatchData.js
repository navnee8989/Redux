import axios from "axios";
import { signinRequest,signinSuccess,signinFail, loginRequest, loginSuccess, loginFail } from "../../redux/action/Action.jsx";




export const saveUser = (Data) => {
  
    console.log(Data);
    return async (dispatch) => {
      dispatch(signinRequest()); 
  
      try {
        const response = await axios.post('http://localhost:5000/users',Data);

        const data = response.data;
  
        dispatch(signinSuccess(data)); 
        console.log("api call");
      } catch (error) {
        dispatch(signinFail(error)); 
      }
   
    };
  };

  export const loginUser = (LoginData) => {
    console.log("api done in Login Page");
    console.log(LoginData.email && LoginData.password);
    return async (dispatch) => {
      dispatch(loginRequest());
      try {
        console.log("inside try");
        const response = await axios.get('http://localhost:5000/users');
        const data = response.data;
        console.log(data);
  
        const userFromDB = data.find((user) => user.email === LoginData.email && user.password === LoginData.password);
  
        if (userFromDB) {
          dispatch(loginSuccess(userFromDB));
        } else {
          dispatch(loginFail('Invalid email or password'));
          console.log("Invalid user");
        }
      } catch (error) {
        dispatch(loginFail(error));
      }
    };
  };