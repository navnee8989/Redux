import React, { useState } from "react";
import CustomHook, {handleChange,inp} from '../custom/CustomHook.js'
import { useDispatch } from "react-redux";
import { signinFail, signinRequest, signinSuccess } from "../redux/action/Action";
import saveUser from "../redux/services/fatchData.js";

const Signin = () => {
  const {handleChange,inp}=CustomHook('role:2',{})
  const disPatch = useDispatch()
 
const handleSubmit=async(e)=>{
    e.preventDefault()
    disPatch(signinRequest())

    try {
      await saveUser(inp)(disPatch)
    } catch (error) {
      disPatch(signinFail(error))
    }
}

    

  return (
    <>
      <div className="form-wrapper w-full min-h-full flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-6">Sign In</h1>
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
              className="form-control"
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
          <button type="submit" className="btn btn-danger" >
    sign in
          </button>
          
        </form>
      </div>
    </>
  );
};

export default Signin;