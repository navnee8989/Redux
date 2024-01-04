import React, { useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { loginFail, loginRequest, loginSuccess } from '../redux/action/Action'
import { loginUser } from '../custom/services/fatchData'

const Login = () => {
  const [formData, setformData] = useState({ formData: '' })
  const dispatch = useDispatch()
  const handleChange = event => {
    const { name, value } = event.target
    setformData(koibhi => ({
      formData: { ...koibhi.formData, [name]: value }
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch(loginRequest())

    try {
      const UserData = await dispatch(loginUser(formData))
      const { email, password } = UserData
      const UserPayload = { email, password }
      console.log(formData)
      dispatch(loginSuccess(UserPayload))
    } catch (error) {
      dispatch(loginFail(error))
    }
  }

  console.log(formData)
  return (
    <>
      <div className="form-wraper  w-full min-h-full flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-6">Log in</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
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
            <label htmlFor="username" className="form-label">
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
          <div className="text-center">
            <input type="submit" value="Submit" className="btn btn-danger" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
