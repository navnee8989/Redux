import React from 'react'
import '../App.css'
const Login = () => {
  return (
    <>
      <div className="form-wraper  w-full min-h-full flex items-center justify-center">
        <form>
      <h1 className='mb-6'>Log in</h1>
          
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className='text-center'>
            <input type="submit" value="Submit" className='btn btn-danger'/>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
