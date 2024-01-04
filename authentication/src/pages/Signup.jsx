import React from "react";
import CustomHook from '../custom/CustomHook.js'
import { useDispatch } from "react-redux";
import { signinFail, signinRequest, signinSuccess } from "../redux/action/Action";
import {saveUser} from '../custom/services/fatchData.js'
import '../App.css'
import { useNavigate } from "react-router-dom";


const Signin = () => {
  const {handleChange,inp}=CustomHook({'role':2},{})
  const disPatch = useDispatch()
  const navigate = useNavigate()
 
const handleSubmit=async(e)=>{
    e.preventDefault()
    disPatch(signinRequest())

    try {
      await signinSuccess(saveUser(inp)(disPatch))
      navigate('/login')
    } catch (error) {
      disPatch(signinFail(error))
    }
}

  return (
    <>
      <div className="form-wrapper">
      <div className="dic  flex justify-center items-center">

        <form onSubmit={handleSubmit} className="w-25 ">
          <h1 className="mb-6 text-center">Sign In</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
             onChange={handleChange}
             name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control "
              placeholder="Enter Email"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="div text-center" >

          <button type="submit" className="btn btn-primary text-center w-25" >
    sign in
          </button>
          </div>
          
        </form>
      </div>
      </div>
    </>
  );
};

export default Signin;